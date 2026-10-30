import { toImage } from "@/blocks/to-image";
import type { ValuePropBlock } from "@/payload-types";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import type { CompareImage } from "@components/compare-slider";
import Highlight from "@components/highlight";
import { H2 } from "@components/html";
import Link from "@components/link";
import Paragraphs from "@components/paragraphs";
import { localePath, type Locale } from "@i18n";
import { tw } from "@utils/tw";
import Image from "next/image";

interface ValuePropProps extends ValuePropBlock {
  locale: Locale;
}

const renderPhoto = (
  photo: CompareImage,
  index: number,
  photos: CompareImage[],
) => {
  const isPair = photos.length === 2;
  return (
    <div
      key={photo.src}
      className={tw(
        "relative overflow-hidden rounded-sm outline-1 -outline-offset-1 outline-grey-200 lg:aspect-auto",
        isPair ? "aspect-4/5" : "aspect-3/2",
        index === 0 ? "lg:col-start-3" : "lg:col-start-4",
      )}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={
          isPair
            ? "(min-width: 1024px) 20vw, 45vw"
            : "(min-width: 1024px) 20vw, 90vw"
        }
        className="object-cover"
      />
    </div>
  );
};

/**
 * The promise under a large statement headline with an optional button.
 * From `lg` up the text column is a third of the screen and the photo sits at
 * the right edge, a fifth of the section wide and as tall as the text; the body and button never pass the headline's right edge. Below
 * that the column is as wide as the headline text and the photo follows it.
 * An optional second photo sits left of the first at the same size; below `lg`
 * the two share a row at 4:5.
 * The words listed in `highlight` show in accent 600 (accent 500 in dark mode).
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
  // Left to right; grid auto-placement needs column 3 before column 4.
  const photos = main && second ? [second, main] : main ? [main] : [];
  const isPair = photos.length === 2;
  return (
    <CommonFullWidthWrapper
      className={tw(
        "grid gap-10 py-16 md:py-20 lg:gap-10 lg:py-24",
        isPair
          ? "lg:grid-cols-[33.333vw_1fr_20%_20%]"
          : "lg:grid-cols-[33.333vw_1fr_20%]",
      )}
    >
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
            className="text-accent-600 dark:text-accent-500"
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
        <div className={tw("grid gap-4 lg:contents", isPair && "grid-cols-2")}>
          {photos.map(renderPhoto)}
        </div>
      )}
    </CommonFullWidthWrapper>
  );
};

export default ValueProp;
