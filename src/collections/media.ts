import { detectImage, sanitizeSvg } from "@utils/image-file";
import type { CollectionBeforeOperationHook, CollectionConfig } from "payload";

const allowPublicRead = () => {
  return true;
};

// Media is served from our own origin, so an SVG's script would run as ours.
// Sniffing the bytes also catches an SVG uploaded under another name or type.
const sanitizeSvgUpload: CollectionBeforeOperationHook = async ({
  args,
  req,
}) => {
  const { file } = req;
  if (file && detectImage(file.data) === "image/svg+xml") {
    file.data = Buffer.from(await sanitizeSvg(file.data.toString("utf8")));
    file.size = file.data.byteLength;
    file.mimetype = "image/svg+xml";
  }
  return args;
};

/** Uploaded images and files, publicly readable. SVGs are sanitized on upload. */
export const media: CollectionConfig = {
  slug: "media",
  access: { read: allowPublicRead },
  hooks: { beforeOperation: [sanitizeSvgUpload] },
  fields: [{ name: "alt", type: "text", required: true, localized: true }],
  upload: true,
  // Payload Folders (beta): the admin gets a By Folder view, folder create, rename, delete and move.
  folders: true,
};
