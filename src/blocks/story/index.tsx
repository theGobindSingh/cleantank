import { toImage } from "@/blocks/to-image";
import type { StoryBlock } from "@/payload-types";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import { H2, P } from "@components/html";
import { toParagraphs } from "@utils/paragraphs";
import Image from "next/image";

const renderParagraph = (paragraph: string) => {
  return (
    <P key={paragraph} $margin="0" className="text-pretty">
      {paragraph}
    </P>
  );
};

/**
 * Prose under an H2 in seven columns, the photo framed in the other five from
 * `lg` up; below that the photo follows the text.
 */
const Story = ({ heading, text, image }: StoryBlock) => {
  const photo = toImage(image);
  return (
    <CommonFullWidthWrapper className="grid gap-10 py-16 md:py-20 lg:grid-cols-12 lg:gap-6 lg:py-24">
      <div className="flex max-w-[68ch] flex-col gap-4 lg:col-span-7">
        <H2 $margin="0 0 0.25em 0">{heading}</H2>
        {toParagraphs(text).map(renderParagraph)}
      </div>
      {photo && (
        <div className="relative aspect-3/2 self-start overflow-hidden rounded-sm outline-1 -outline-offset-1 outline-grey-200 lg:col-span-5">
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
