import { toSlotImage } from "@/blocks/to-image";
import type { ValuePropBlock } from "@/payload-types";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import type { CompareImage } from "@components/compare-slider";
import Link from "@components/link";
import RichParagraphs from "@components/rich-paragraphs";
import SectionHeadline from "@components/section-headline";
import { localePath, type Locale } from "@i18n";
import { tw } from "@utils/tw";
import Image from "next/image";
import List from "./list";

interface ValuePropProps extends ValuePropBlock {
  locale: Locale;
}

const renderPhoto = (photo: CompareImage) => {
  return (
    <div
      key={photo.src}
      className="relative aspect-1/2 overflow-hidden rounded-sm outline-1 -outline-offset-1 outline-grey-200 lg:h-full lg:min-w-0"
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(min-width: 1024px) 30vw, 65vw"
        className="object-cover"
        style={{ objectPosition: photo.position }}
      />
    </div>
  );
};

const renderLandscapePhoto = (photo: CompareImage) => {
  return (
    <div
      key={photo.src}
      className="relative aspect-2/1 overflow-hidden rounded-sm outline-1 -outline-offset-1 outline-grey-200"
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

/**
 * The promise under a large statement headline with an optional button.
 * The headline is set in two lines split at the space that best halves its
 * width, and the text column is as wide as the longer line: the body and
 * button never pass it. Below `lg` the text takes the full width instead.
 * From `lg` up the photo sits at the right edge, as tall as the text and half
 * as wide as it is tall (1:2), narrower only if a tall text column would push
 * it past the edge. Below that the photos follow the text, 1:2, each half of a
 * row at most 28rem wide.
 * An optional second photo sits left of the first at the same size, 12 px
 * apart.
 * With `staggerPhotos` on and two portrait photos, the left one sits 12 px
 * higher and the right one 12 px lower, in both layouts.
 * With `photoShape` set to `landscape`, the photos are 2:1 instead, 96 px
 * from the text in both layouts, so a 2:1 photo shows whole: from `lg` up they
 * fill the space right of the 96 px gap, at the right edge, vertically centred
 * on the text (not matched to its height); below that they follow the text,
 * one per row, at most 28rem wide.
 * With `media` set to `list`, a numbered list takes the photos' place
 * instead, at most 28rem wide.
 * The words listed in `highlight` show in accent 500 in every mode, and bold
 * phrases in the text in semibold.
 */
const ValueProp = ({
  heading,
  highlight,
  text,
  media,
  image,
  imageUrl,
  imageAlt,
  secondImage,
  secondImageUrl,
  secondImageAlt,
  photoShape,
  staggerPhotos,
  href,
  linkLabel,
  items,
  anchor,
  locale,
}: ValuePropProps) => {
  const main = toSlotImage(image, imageUrl, imageAlt);
  const second = toSlotImage(secondImage, secondImageUrl, secondImageAlt);
  // Left to right.
  const photos = main && second ? [second, main] : main ? [main] : [];
  const isLandscape = media !== "list" && photoShape === "landscape";
  const isStaggered = Boolean(staggerPhotos) && photos.length === 2;
  return (
    <CommonFullWidthWrapper
      wrapperProps={anchor ? { id: anchor } : {}}
      className={tw(
        "grid py-8 md:py-10 lg:gap-x-0 lg:py-12",
        isLandscape
          ? "gap-24 lg:grid-cols-[auto_6rem_1fr]"
          : "gap-10 lg:grid-cols-[auto_minmax(2.5rem,1fr)_minmax(0,auto)]",
      )}
    >
      <div className="flex flex-col gap-4 justify-self-stretch lg:justify-self-start">
        <SectionHeadline heading={heading} highlight={highlight} />
        {/* contain-inline-size: the body takes the headline's width instead of setting it */}
        <RichParagraphs
          data={text}
          className="text-pretty contain-inline-size"
        />
        {href && linkLabel && (
          <Link
            href={localePath(locale, href)}
            variant="filled"
            color="accent"
            className="mt-2 self-start"
          >
            {linkLabel}
          </Link>
        )}
      </div>
      {media === "list"
        ? items && items.length > 0 && <List items={items} />
        : photos.length > 0 &&
          (isLandscape ? (
            <div className="grid max-w-md gap-3 lg:col-start-3 lg:max-w-none lg:self-center">
              {photos.map(renderLandscapePhoto)}
            </div>
          ) : (
            <div
              className={tw(
                "grid max-w-md grid-cols-2 gap-3 lg:col-start-3 lg:flex lg:max-w-none",
                // The section's padding (32 px and up) leaves room for the 12 px shift.
                isStaggered && "*:first:-translate-y-3 *:last:translate-y-3",
              )}
            >
              {photos.map(renderPhoto)}
            </div>
          ))}
    </CommonFullWidthWrapper>
  );
};

export default ValueProp;
