import type { FounderBlock } from "@/payload-types";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import { Span } from "@components/html";
import Paragraphs from "@components/paragraphs";
import SectionHeadline from "@components/section-headline";
import Image from "next/image";

/**
 * A stone section: the bio in seven columns and the cut-out portrait in five,
 * standing on the section's bottom edge with no frame. From `lg` up the
 * portrait is on the left; below that it follows the text.
 */
const Founder = ({ role, name, bio, portrait }: FounderBlock) => {
  const photo =
    portrait && typeof portrait !== "number" && portrait.url ? portrait : null;
  return (
    <CommonFullWidthWrapper
      wrapperClassName="bg-bg-subtle"
      className="grid gap-10 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-6 lg:pt-0"
    >
      <div className="flex flex-col gap-4 lg:col-span-7 lg:col-start-6 lg:self-center lg:py-24">
        <Span
          $size="ref"
          className="font-mono font-medium tracking-widest text-marker-text uppercase"
        >
          {role}
        </Span>
        <SectionHeadline heading={name} />
        <Paragraphs text={bio} className="max-w-[68ch] text-pretty" />
      </div>
      {photo?.url && (
        <Image
          src={photo.url}
          alt={photo.alt}
          width={photo.width ?? 900}
          height={photo.height ?? 1200}
          sizes="(min-width: 1024px) 35vw, (min-width: 768px) 60vw, 90vw"
          className="h-auto w-full max-w-md self-end lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:max-w-none lg:pt-16"
        />
      )}
    </CommonFullWidthWrapper>
  );
};

export default Founder;
