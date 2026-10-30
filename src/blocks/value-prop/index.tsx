import { toImage } from "@/blocks/to-image";
import type { ValuePropBlock } from "@/payload-types";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import type { CompareImage } from "@components/compare-slider";
import Highlight from "@components/highlight";
import { H2 } from "@components/html";
import Link from "@components/link";
import Paragraphs from "@components/paragraphs";
import { localePath, type Locale } from "@i18n";
import { splitInTwo } from "@utils/split-in-two";
import Image from "next/image";

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
        sizes="(min-width: 1024px) 15vw, 45vw"
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
  // one block per line, so the heading is exactly as wide as its longer line
  const renderLine = (line: string, index: number) => {
    return (
      <span key={line} className="block">
        {index > 0 && " "}
        <Highlight
          text={line}
          highlight={highlight}
          className="text-accent-500"
        />
      </span>
    );
  };
  return (
    <CommonFullWidthWrapper className="grid gap-10 py-16 md:py-20 lg:grid-cols-[auto_minmax(2.5rem,1fr)_minmax(0,auto)] lg:gap-x-0 lg:py-24">
      <div className="flex flex-col gap-4 justify-self-start">
        <H2
          $size="statement"
          $margin="0 0 0.25em 0"
          // a class, not $lineHeight, so the Hindi and Punjabi heading leading in defaults.css wins
          className="leading-[0.85] wrap-break-word"
        >
          {splitInTwo(heading).map(renderLine)}
        </H2>
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
      {photos.length > 0 && (
        <div className="grid max-w-md grid-cols-2 gap-3 lg:col-start-3 lg:flex lg:max-w-none">
          {photos.map(renderPhoto)}
        </div>
      )}
    </CommonFullWidthWrapper>
  );
};

export default ValueProp;
