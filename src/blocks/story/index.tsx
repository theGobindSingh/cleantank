import { toImage } from "@/blocks/to-image";
import type { StoryBlock } from "@/payload-types";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import { P } from "@components/html";
import Paragraphs from "@components/paragraphs";
import SectionHeadline from "@components/section-headline";
import Image from "next/image";

interface ColumnProps {
  label: string | null | undefined;
  text: string | null | undefined;
}

/** One of two side-by-side columns: a mono caps label, then its paragraphs. */
const Column = ({ label, text }: ColumnProps) => {
  return (
    <div className="flex flex-col gap-4">
      {label && (
        <P
          $size="ref"
          $weight="500"
          $margin="0"
          className="font-mono tracking-widest text-heading uppercase"
        >
          {label}
        </P>
      )}
      <Paragraphs text={text} className="text-pretty" />
    </div>
  );
};

/**
 * Prose under an H2 in seven columns, the photo framed in the other five from
 * `lg` up, as tall as the text and never shorter than 3:2; below that the photo
 * follows the text at 3:2. With a second text, the two sit side by side from
 * `md` up with a 1 px rule between them, stacked with a rule above the second
 * below that.
 */
const Story = ({
  heading,
  highlight,
  label,
  text,
  secondLabel,
  secondText,
  note,
  image,
}: StoryBlock) => {
  const photo = toImage(image);
  return (
    <CommonFullWidthWrapper className="grid gap-10 py-8 md:py-10 lg:grid-cols-12 lg:gap-6 lg:py-12">
      <div className="flex flex-col gap-4 lg:col-span-7">
        <SectionHeadline heading={heading} highlight={highlight} />
        {secondText ? (
          <div className="grid gap-6 md:grid-cols-2 md:gap-0">
            <div className="md:pr-6">
              <Column label={label} text={text} />
            </div>
            <div className="border-t border-border pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-6">
              <Column label={secondLabel} text={secondText} />
            </div>
          </div>
        ) : (
          <Paragraphs text={text} className="max-w-[68ch] text-pretty" />
        )}
        {note && (
          <P
            $size="small"
            $margin="0"
            className="max-w-[68ch] text-pretty text-fg-muted"
          >
            {note}
          </P>
        )}
      </div>
      {photo && (
        <div className="relative overflow-hidden rounded-sm outline-1 -outline-offset-1 outline-grey-200 lg:col-span-5">
          {/* holds 3:2 as the least height; from lg up the photo grows to the text's height */}
          <div className="aspect-3/2" />
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
        </div>
      )}
    </CommonFullWidthWrapper>
  );
};

export default Story;
