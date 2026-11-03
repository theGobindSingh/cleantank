import type { Client } from "@/payload-types";
import { extensions } from "@utils/image-file";
import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
  CollectionBeforeChangeHook,
  PayloadRequest,
} from "payload";
import { downloadLogo } from "./logo";

const idOf = (logo: Client["fetchedLogo"] | undefined) => {
  return typeof logo === "object" ? (logo?.id ?? null) : (logo ?? null);
};

const deleteMedia = async (req: PayloadRequest, id: number | null) => {
  if (!id) return;
  try {
    await req.payload.delete({ collection: "media", id, req });
  } catch (error) {
    req.payload.logger.warn({ err: error }, `Could not delete media ${id}`);
  }
};

const LOGO_FOLDER = "Client logos";

/** The top-level media folder fetched logos go in, created on first use. */
const logoFolderId = async (req: PayloadRequest) => {
  const { docs } = await req.payload.find({
    collection: "payload-folders",
    where: { name: { equals: LOGO_FOLDER }, folder: { exists: false } },
    limit: 1,
    depth: 0,
    req,
  });
  if (docs[0]) return docs[0].id;
  const folder = await req.payload.create({
    collection: "payload-folders",
    data: { name: LOGO_FOLDER, folderType: ["media"] },
    req,
  });
  return folder.id;
};

/**
 * Copies the logo link into media when it is new or changed, or when the
 * build's refresh sets `context.refetchLogo`; unchanged bytes keep the copy.
 * A failed fetch keeps the previous copy and never blocks the save.
 */
export const fetchLogo: CollectionBeforeChangeHook<Client> = async ({
  data,
  originalDoc,
  req,
  context,
}) => {
  const link =
    (data.logoUrl === undefined
      ? originalDoc?.logoUrl
      : data.logoUrl
    )?.trim() ?? "";
  const previousId = idOf(originalDoc?.fetchedLogo);
  if (!link) {
    return {
      ...data,
      fetchedLogo: null,
      fetchedLogoHash: null,
      logoFetchError: null,
    };
  }
  const isChanged = link !== originalDoc?.logoUrl || !previousId;
  if (!isChanged && !context.refetchLogo) return data;

  try {
    const logo = await downloadLogo(link);
    if (previousId && logo.hash === originalDoc?.fetchedLogoHash) {
      return { ...data, logoUrl: link, logoFetchError: null };
    }
    const name = data.name ?? originalDoc?.name ?? "client";
    const slug = name.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-");
    const media = await req.payload.create({
      collection: "media",
      data: { alt: name, folder: await logoFolderId(req) },
      file: {
        data: logo.data,
        mimetype: logo.mimetype,
        name: `${slug}-logo.${extensions[logo.mimetype]}`,
        size: logo.data.byteLength,
      },
      req,
    });
    return {
      ...data,
      logoUrl: link,
      fetchedLogo: media.id,
      fetchedLogoHash: logo.hash,
      logoFetchError: null,
    };
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    const day = new Date().toISOString().slice(0, 10);
    return { ...data, logoFetchError: `${day}: ${reason}` };
  }
};

/** Files the uploaded or picked logo in Client logos if it sits elsewhere. */
export const fileUploadedLogo: CollectionAfterChangeHook<Client> = async ({
  doc,
  req,
}) => {
  const id = idOf(doc.logo);
  if (!id) return doc;
  try {
    const media = await req.payload.findByID({
      collection: "media",
      id,
      depth: 0,
      req,
    });
    const folder = await logoFolderId(req);
    if (media.folder !== folder) {
      await req.payload.update({
        collection: "media",
        id,
        data: { folder },
        req,
      });
    }
  } catch (error) {
    req.payload.logger.warn({ err: error }, `Could not file media ${id}`);
  }
  return doc;
};

/** Deletes the fetched copy a save replaced or cleared. */
export const deleteReplacedLogo: CollectionAfterChangeHook<Client> = async ({
  doc,
  previousDoc,
  req,
}) => {
  const previousId = idOf(previousDoc.fetchedLogo);
  if (previousId !== idOf(doc.fetchedLogo)) await deleteMedia(req, previousId);
  return doc;
};

/** Deletes a deleted client's fetched copy; an uploaded logo stays in media. */
export const deleteFetchedLogo: CollectionAfterDeleteHook<Client> = async ({
  doc,
  req,
}) => {
  await deleteMedia(req, idOf(doc.fetchedLogo));
  return doc;
};
