import { toImage } from "@/blocks/to-image";
import type { ValuePropBlock } from "@/payload-types";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import { H2 } from "@components/html";
import { iconProps } from "@components/icon";
import Link from "@components/link";
import Paragraphs from "@components/paragraphs";
import { localePath, type Locale } from "@i18n";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

interface ValuePropProps extends ValuePropBlock {
  locale: Locale;
}

/**
 * The promise under a large statement headline with an optional text link.
 * From `lg` up the text column is a third of the screen and the photo fills
 * the rest; the body and link never pass the headline's right edge. Below
 * that the column is as wide as the headline text and the photo follows it.
 */
const ValueProp = ({
  heading,
  text,
  image,
  href,
  linkLabel,
  locale,
}: ValuePropProps) => {
  const photo = toImage(image);
  return (
    <CommonFullWidthWrapper className="grid gap-10 py-16 md:py-20 lg:grid-cols-[33.333vw_1fr] lg:items-center lg:gap-10 lg:py-24">
      <div className="flex max-w-[calc(var(--fs-statement)*4.5)] flex-col gap-4 lg:max-w-none">
        <H2
          $size="statement"
          $lineHeight="1"
          $margin="0 0 0.25em 0"
          className="text-balance"
        >
          {heading}
        </H2>
        <Paragraphs text={text} />
        {href && linkLabel && (
          <Link
            href={localePath(locale, href)}
            className="mt-2 inline-flex items-center gap-2 self-start font-semibold"
          >
            {linkLabel}
            <ArrowRightIcon {...iconProps} strokeWidth={2} className="size-4" />
          </Link>
        )}
      </div>
      {photo && (
        <div className="relative aspect-3/2 overflow-hidden rounded-sm outline-1 -outline-offset-1 outline-grey-200">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 1024px) 55vw, 90vw"
            className="object-cover"
          />
        </div>
      )}
    </CommonFullWidthWrapper>
  );
};

export default ValueProp;
