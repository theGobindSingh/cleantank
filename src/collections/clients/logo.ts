import { detectImage, hashBytes, type ImageType } from "@utils/image-file";

// Client logos are copied into media from the owner's link; the site never hotlinks them.
const MAX_BYTES = 2 * 1024 * 1024;
const TIMEOUT_MS = 10_000;

/** Reads the body, giving up past `MAX_BYTES` even when the server sends no length. */
const readCapped = async (response: Response) => {
  if (Number(response.headers.get("content-length")) > MAX_BYTES) {
    throw new Error("The file is over 2 MB");
  }
  if (!response.body) throw new Error("The link returned no file");
  const chunks: Uint8Array[] = [];
  let size = 0;
  for await (const chunk of response.body) {
    size += chunk.byteLength;
    if (size > MAX_BYTES) throw new Error("The file is over 2 MB");
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
};

export interface Logo {
  data: Buffer;
  mimetype: ImageType;
  /** Hash of the bytes as downloaded, before any sanitizing. */
  hash: string;
}

/** Downloads a logo link and checks it is an SVG, PNG, JPEG or WebP image. */
export const downloadLogo = async (link: string): Promise<Logo> => {
  const url = URL.parse(link);
  if (url?.protocol !== "https:" && url?.protocol !== "http:") {
    throw new Error("The link must start with https:// or http://");
  }
  const response = await fetch(url, {
    redirect: "follow",
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!response.ok) throw new Error(`The link answered ${response.status}`);
  const data = await readCapped(response);
  const mimetype = detectImage(data);
  if (!mimetype) {
    throw new Error("The link is not an SVG, PNG, JPEG or WebP image");
  }
  return { data, mimetype, hash: hashBytes(data) };
};
