import { toImage } from "@/blocks/to-image";
import type { StoryBlock } from "@/payload-types";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import Paragraphs from "@components/paragraphs";
import SectionHeadline from "@components/section-headline";
import Image from "next/image";

/**
 * Prose under an H2 in seven columns, the photo framed in the other five from
 * `lg` up; below that the photo follows the text.
 */
const Story = ({ heading, highlight, text, image }: StoryBlock) => {
  const photo = toImage(image);
  return (
    <CommonFullWidthWrapper className="grid gap-10 py-8 md:py-10 lg:grid-cols-12 lg:gap-6 lg:py-12">
      <div className="flex flex-col gap-4 lg:col-span-7">
        <SectionHeadline heading={heading} highlight={highlight} />
        <Paragraphs text={text} className="max-w-[68ch] text-pretty" />
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
