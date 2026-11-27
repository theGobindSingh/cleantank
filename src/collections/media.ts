import { detectImage, sanitizeSvg } from "@utils/image-file";
import type { CollectionBeforeOperationHook, CollectionConfig } from "payload";

const allowPublicRead = () => {
  return true;
};

// Media is served from our own origin, so an SVG's script would run as ours.
// Sniffing the bytes also catches an SVG uploaded under another name or type.
const sanitizeSvgUpload: CollectionBeforeOperationHook = ({ args, req }) => {
  const { file } = req;
  if (file && detectImage(file.data) === "image/svg+xml") {
    file.data = Buffer.from(sanitizeSvg(file.data.toString("utf8")));
    file.size = file.data.byteLength;
    file.mimetype = "image/svg+xml";
  }
  return args;
};

// Each file request runs Payload and fetches from storage, which counts against
// Neon's egress, so let the CDN keep it 30 days and serve the old copy while it
// refreshes. For an urgent change, upload under a new filename or purge it:
// docs/CONVENTIONS.md, Payload.
const cacheFiles = ({ headers }: { headers: Headers }) => {
  headers.set(
    "Cache-Control",
    "public, max-age=3600, s-maxage=2592000, stale-while-revalidate=604800",
  );
  return headers;
};

const webp = { format: "webp", options: { quality: 80 } } as const;

/** Uploaded images and files, publicly readable. SVGs are sanitized on upload. */
export const media: CollectionConfig = {
  slug: "media",
  access: { read: allowPublicRead },
  hooks: { beforeOperation: [sanitizeSvgUpload] },
  fields: [{ name: "alt", type: "text", required: true, localized: true }],
  upload: {
    modifyResponseHeaders: cacheFiles,
    // Raster uploads are stored as WebP, at most 2400px wide, so the originals
    // stay small. SVGs skip Sharp and keep their sanitized markup.
    formatOptions: webp,
    resizeOptions: { width: 2400, withoutEnlargement: true },
    // The admin lists thumbnails instead of loading every original.
    imageSizes: [{ name: "thumbnail", width: 400, formatOptions: webp }],
    adminThumbnail: "thumbnail",
  },
  // Payload Folders (beta): the admin gets a By Folder view, folder create, rename, delete and move.
  folders: true,
};
