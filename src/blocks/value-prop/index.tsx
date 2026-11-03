import { toSlotImage } from "@/blocks/to-image";
import type { ValuePropBlock } from "@/payload-types";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import type { CompareImage } from "@components/compare-slider";
import Link from "@components/link";
import Paragraphs from "@components/paragraphs";
import SectionHeadline from "@components/section-headline";
import { localePath, type Locale } from "@i18n";
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
      />
    </div>
  );
};

/**
 * The promise under a large statement headline with an optional button.
 * The headline is set in two lines split at the space nearest its middle, and
 * the text column is as wide as the longer line: the body and button never
 * pass it.
 * From `lg` up the photo sits at the right edge, as tall as the text and half
 * as wide as it is tall (1:2), narrower only if a tall text column would push
 * it past the edge. Below that the photos follow the text, 1:2, each half of a
 * row at most 28rem wide.
 * An optional second photo sits left of the first at the same size, 12 px
 * apart.
 * With `media` set to `list`, a numbered list takes the photos' place
 * instead, at most 28rem wide.
 * The words listed in `highlight` show in accent 500 in every mode.
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
  href,
  linkLabel,
  items,
  locale,
}: ValuePropProps) => {
  const main = toSlotImage(image, imageUrl, imageAlt);
  const second = toSlotImage(secondImage, secondImageUrl, secondImageAlt);
  // Left to right.
  const photos = main && second ? [second, main] : main ? [main] : [];
  return (
    <CommonFullWidthWrapper className="grid gap-10 py-8 md:py-10 lg:grid-cols-[auto_minmax(2.5rem,1fr)_minmax(0,auto)] lg:gap-x-0 lg:py-12">
      <div className="flex flex-col gap-4 justify-self-start">
        <SectionHeadline heading={heading} highlight={highlight} />
        {/* contain-inline-size: the body takes the headline's width instead of setting it */}
        <Paragraphs text={text} className="text-pretty contain-inline-size" />
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
        : photos.length > 0 && (
            <div className="grid max-w-md grid-cols-2 gap-3 lg:col-start-3 lg:flex lg:max-w-none">
              {photos.map(renderPhoto)}
            </div>
          )}
    </CommonFullWidthWrapper>
  );
};

export default ValueProp;
