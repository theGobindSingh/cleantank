import { createHash } from "node:crypto";

export type ImageType =
  "image/svg+xml" | "image/png" | "image/jpeg" | "image/webp";

export const extensions: Record<ImageType, string> = {
  "image/svg+xml": "svg",
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/webp": "webp",
};

const startsWith = (bytes: Uint8Array, signature: number[], offset = 0) => {
  const matches = (byte: number, index: number) => {
    return bytes[offset + index] === byte;
  };
  return signature.every(matches);
};

/** The image type the bytes really are, from their magic bytes; null for anything else. */
export const detectImage = (bytes: Uint8Array): ImageType | null => {
  if (startsWith(bytes, [0x89, 0x50, 0x4e, 0x47])) return "image/png";
  if (startsWith(bytes, [0xff, 0xd8, 0xff])) return "image/jpeg";
  // RIFF....WEBP
  if (
    startsWith(bytes, [0x52, 0x49, 0x46, 0x46]) &&
    startsWith(bytes, [0x57, 0x45, 0x42, 0x50], 8)
  ) {
    return "image/webp";
  }
  const head = new TextDecoder().decode(bytes.subarray(0, 4096)).trimStart();
  const isMarkup = /^(?:<\?xml|<!--|<!doctype svg|<svg)/i.test(head);
  return isMarkup && /<svg[\s>]/i.test(head) ? "image/svg+xml" : null;
};

/**
 * Strips script, event handlers, foreignObject and javascript: links from an
 * SVG with DOMPurify, since media is served from our own origin. Throws if no
 * SVG is left. DOMPurify loads here, not at the top: it pulls in jsdom, whose
 * ESM-only dependency crashes Vercel's runtime when Payload loads its config.
 */
export const sanitizeSvg = async (svg: string): Promise<string> => {
  const { sanitize } = await import("isomorphic-dompurify");
  const clean = sanitize(svg, {
    USE_PROFILES: { svg: true, svgFilters: true },
  });
  if (!clean.startsWith("<svg")) throw new Error("The SVG has no drawing left");
  return clean;
};

/** SHA-256 of the bytes, to tell whether a refetched logo changed. */
export const hashBytes = (bytes: Uint8Array) => {
  return createHash("sha256").update(bytes).digest("hex");
};
