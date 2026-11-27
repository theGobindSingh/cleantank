import type { Media } from "@/payload-types";
import type { CompareImage } from "@components/compare-slider";

// Uploads arrive populated at depth 1; an id alone means the file is missing.
export const toImage = (
  media: number | Media | null | undefined,
): CompareImage | null => {
  if (!media || typeof media === "number" || !media.url) return null;
  const { focalX, focalY } = media;
  if (focalX == null || focalY == null)
    return { src: media.url, alt: media.alt };
  return { src: media.url, alt: media.alt, position: `${focalX}% ${focalY}%` };
};

/** A photo slot from `imageSlotFields`: the URL wins over the upload. */
export const toSlotImage = (
  media: number | Media | null | undefined,
  url: string | null | undefined,
  alt: string | null | undefined,
): CompareImage | null => {
  if (url) return { src: url, alt: alt ?? "" };
  return toImage(media);
};
