import type { Media } from "@/payload-types";
import type { CompareImage } from "@components/compare-slider";
import Image from "next/image";

interface LandscapePhotoProps {
  photo: CompareImage;
  media: number | Media | null | undefined;
}

/** The upload's focal point (set in the admin) as an object-position; the centre by default. */
const focusOf = (media: LandscapePhotoProps["media"]) => {
  if (!media || typeof media === "number") return undefined;
  return `${media.focalX ?? 50}% ${media.focalY ?? 50}%`;
};

/**
 * The value prop's landscape frame in the story's right half: from `lg` up
 * 72 px in from the half's edge (96 px from the text with the grid gap), as
 * tall as the text, 16:9 at most and narrower when the space is, at the right
 * edge. Below `lg` 16:9 and at most 28rem wide.
 */
const LandscapePhoto = ({ photo, media }: LandscapePhotoProps) => {
  return (
    <div className="lg:relative lg:col-span-6 lg:col-start-7 lg:ml-18">
      <div className="max-w-md lg:absolute lg:inset-y-0 lg:right-0 lg:flex lg:max-w-full">
        <div className="relative aspect-video overflow-hidden rounded-sm outline-1 -outline-offset-1 outline-grey-200 lg:h-full">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
            style={{ objectPosition: focusOf(media) }}
          />
        </div>
      </div>
    </div>
  );
};

export default LandscapePhoto;
