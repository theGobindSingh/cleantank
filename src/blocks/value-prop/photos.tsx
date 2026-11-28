import type { CompareImage } from "@components/compare-slider";
import Image from "next/image";

const renderPortraitImage = (photo: CompareImage) => {
  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      fill
      sizes="(min-width: 1024px) 30vw, 65vw"
      className="object-cover"
      style={{ objectPosition: photo.position }}
    />
  );
};

export const renderPhoto = (photo: CompareImage) => {
  return (
    <div
      key={photo.src}
      className="relative aspect-1/2 overflow-hidden rounded-sm outline-1 -outline-offset-1 outline-grey-200 lg:h-full lg:min-w-0"
    >
      {renderPortraitImage(photo)}
    </div>
  );
};

// The frame stays put; only the photo inside drifts sideways (drift.css).
export const renderDriftPhoto = (photo: CompareImage) => {
  return (
    <div
      key={photo.src}
      className="relative aspect-1/2 overflow-hidden rounded-sm outline-1 -outline-offset-1 outline-grey-200 drift-frame lg:h-full lg:min-w-0"
    >
      <div className="absolute drift-photo inset-y-0">
        {renderPortraitImage(photo)}
      </div>
    </div>
  );
};

export const renderLandscapePhoto = (photo: CompareImage) => {
  return (
    <div
      key={photo.src}
      className="relative aspect-video overflow-hidden rounded-sm outline-1 -outline-offset-1 outline-grey-200 lg:aspect-auto lg:h-full"
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
        style={{ objectPosition: photo.position }}
      />
    </div>
  );
};
