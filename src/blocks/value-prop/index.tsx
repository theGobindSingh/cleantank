import { toImage } from "@/blocks/to-image";
import type { ValuePropBlock } from "@/payload-types";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import type { CompareImage } from "@components/compare-slider";
import Highlight from "@components/highlight";
import { H2 } from "@components/html";
import Link from "@components/link";
import Paragraphs from "@components/paragraphs";
import { localePath, type Locale } from "@i18n";
import Image from "next/image";

interface ValuePropProps extends ValuePropBlock {
  locale: Locale;
}

const renderPhoto = (photo: CompareImage) => {
  return (
    <div
      key={photo.src}
      className="relative aspect-1/2 overflow-hidden rounded-sm outline-1 -outline-offset-1 outline-grey-200 lg:h-full"
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(min-width: 1024px) 15vw, 45vw"
        className="object-cover"
      />
    </div>
  );
};

/**
 * The promise under a large statement headline with an optional button.
 * From `lg` up the text column is a third of the screen and the photo sits at
 * the right edge, as tall as the text and half as wide as it is tall (1:2);
 * the body and button never pass the headline's right edge. Below that the
 * column is as wide as the headline text and the photos follow it, 1:2, each
 * half of a row at most 28rem wide.
 * An optional second photo sits left of the first at the same size, 12 px
 * apart.
 * The words listed in `highlight` show in accent 500 in every mode.
 */
const ValueProp = ({
  heading,
  highlight,
  text,
  image,
  secondImage,
  href,
  linkLabel,
  locale,
}: ValuePropProps) => {
  const main = toImage(image);
  const second = toImage(secondImage);
  // Left to right.
  const photos = main && second ? [second, main] : main ? [main] : [];
  return (
    <CommonFullWidthWrapper className="grid gap-10 py-16 md:py-20 lg:grid-cols-[33.333vw_minmax(2.5rem,1fr)_auto] lg:gap-x-0 lg:py-24">
      <div className="flex max-w-[calc(var(--fs-statement)*4.5)] flex-col gap-4 lg:max-w-none">
        <H2
          $size="statement"
          $lineHeight="0.85"
          $margin="0 0 0.25em 0"
          className="text-balance"
        >
          <Highlight
            text={heading}
            highlight={highlight}
            className="text-accent-500"
          />
        </H2>
        <Paragraphs text={text} />
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
      {photos.length > 0 && (
        <div className="grid max-w-md grid-cols-2 gap-3 lg:col-start-3 lg:flex lg:max-w-none">
          {photos.map(renderPhoto)}
        </div>
      )}
    </CommonFullWidthWrapper>
  );
};

export default ValueProp;
