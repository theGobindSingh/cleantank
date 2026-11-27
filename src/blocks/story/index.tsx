import { toImage } from "@/blocks/to-image";
import type { StoryBlock } from "@/payload-types";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import type { CompareImage } from "@components/compare-slider";
import { H3, P } from "@components/html";
import Paragraphs from "@components/paragraphs";
import SectionHeadline from "@components/section-headline";
import { tw } from "@utils/tw";
import Image from "next/image";
import LandscapePhoto from "./landscape-photo";

interface ColumnProps {
  label: string | null | undefined;
  text: string | null | undefined;
}

/** One of two side-by-side columns: a mini heading, then its paragraphs. */
const Column = ({ label, text }: ColumnProps) => {
  return (
    <div className="flex flex-col gap-4">
      {label && (
        <H3 $size="h4" $margin="0">
          {label}
        </H3>
      )}
      <Paragraphs text={text} className="text-pretty" />
    </div>
  );
};

const renderPortrait = (photo: CompareImage) => {
  return (
    <div
      key={photo.src}
      className="relative aspect-1/2 overflow-hidden rounded-sm outline-1 -outline-offset-1 outline-grey-200"
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(min-width: 1024px) 20vw, 45vw"
        className="object-cover"
      />
    </div>
  );
};

const isImage = (photo: CompareImage | null): photo is CompareImage => {
  return photo !== null;
};

/**
 * Prose under an H2 in six columns, the photo framed in the last five from
 * `lg` up with one empty column between, as tall as the text and never shorter than 3:2; below that the photo
 * follows the text at 3:2. With a second text, the two sit side by side once
 * the text column is at least 36rem wide, with a 1 px rule between them,
 * stacked with a rule above the second below that. An intro sits between the
 * heading and the text; with no photo at all it widens the text to all twelve
 * columns. Up to two portrait photos (1:2) sit side by side at the top of the
 * photo column, 12 px apart, with the 3:2 photo under them; the column then
 * keeps its own height instead of the text's.
 * With `photoShape` set to `landscape` and no portraits, the one photo takes
 * the value prop's landscape frame: from `lg` up as tall as the text, its
 * right edge on the content edge, 96 px from the text (the 24 px grid gap plus
 * 72 px) and 16:9 at most, narrower when the space is (the cover crop keeps
 * the upload's focal point); below that it follows the text, 96 px under it,
 * 16:9 and at most 28rem wide.
 */
const Story = ({
  heading,
  highlight,
  intro,
  label,
  text,
  secondLabel,
  secondText,
  note,
  photos,
  image,
  photoShape,
}: StoryBlock) => {
  const photo = toImage(image);
  const portraits = (photos ?? []).map(toImage).filter(isImage);
  const hasMedia = Boolean(photo) || portraits.length > 0;
  const isWide = Boolean(intro) && !hasMedia;
  const isLandscape =
    photoShape === "landscape" && Boolean(photo) && portraits.length === 0;
  return (
    <CommonFullWidthWrapper
      className={tw(
        "grid py-8 md:py-10 lg:grid-cols-12 lg:gap-6 lg:py-12",
        isLandscape ? "gap-24" : "gap-10",
      )}
    >
      <div
        className={`flex flex-col gap-4 ${isWide ? "lg:col-span-12" : "lg:col-span-6"}`}
      >
        <SectionHeadline heading={heading} highlight={highlight} />
        {intro && <Paragraphs text={intro} className="text-pretty" />}
        {secondText ? (
          // A container: the two sit side by side only when the text column is wide enough.
          <div className="@container">
            <div className="grid gap-6 @xl:grid-cols-2 @xl:gap-0">
              <div className="@xl:pr-6">
                <Column label={label} text={text} />
              </div>
              <div className="border-t border-border pt-6 @xl:border-t-0 @xl:border-l @xl:pt-0 @xl:pl-6">
                <Column label={secondLabel} text={secondText} />
              </div>
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
      {isLandscape && photo ? (
        <LandscapePhoto photo={photo} media={image} />
      ) : portraits.length > 0 ? (
        <div className="flex flex-col gap-3 lg:col-span-5 lg:col-start-8">
          <div className="grid max-w-md grid-cols-2 gap-3 lg:max-w-none">
            {portraits.map(renderPortrait)}
          </div>
          {photo && (
            <div className="relative aspect-3/2 overflow-hidden rounded-sm outline-1 -outline-offset-1 outline-grey-200">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          )}
        </div>
      ) : (
        photo && (
          <div className="relative overflow-hidden rounded-sm outline-1 -outline-offset-1 outline-grey-200 lg:col-span-5 lg:col-start-8">
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
        )
      )}
    </CommonFullWidthWrapper>
  );
};

export default Story;
