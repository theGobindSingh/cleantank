import type { Media } from "@/payload-types";
import type { CompareImage } from "@components/compare-slider";

// Uploads arrive populated at depth 1; an id alone means the file is missing.
export const toImage = (
  media: number | Media | null | undefined,
): CompareImage | null => {
  if (!media || typeof media === "number" || !media.url) return null;
  return { src: media.url, alt: media.alt };
};
