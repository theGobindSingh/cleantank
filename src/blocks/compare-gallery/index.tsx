import { toImage } from "@/blocks/to-image";
import type { CompareGalleryBlock } from "@/payload-types";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import CompareSlider from "@components/compare-slider";
import { H2, P } from "@components/html";
import { getDictionary, type Locale } from "@i18n";
import { tw } from "@utils/tw";

interface CompareGalleryProps extends CompareGalleryBlock {
  locale: Locale;
}

type Item = CompareGalleryBlock["items"][number];

/**
 * Before/after comparisons of different tanks, one column on phones and two
 * from `md`. Each is the hero's slider inline: framed, divider centred, no
 * opening glide.
 */
const CompareGallery = ({
  heading,
  text,
  items,
  isSubtle,
  locale,
}: CompareGalleryProps) => {
  const { compare } = getDictionary(locale);

  const renderItem = (item: Item, index: number) => {
    const before = toImage(item.before);
    const after = toImage(item.after);
    if (!before || !after) return null;
    return (
      <figure key={item.id ?? index} className="flex flex-col gap-3">
        <CompareSlider
          before={before}
          after={after}
          label={item.caption ?? compare.label}
          beforeLabel={compare.before}
          afterLabel={compare.after}
          isInline
          className="aspect-4/3 rounded-sm outline-1 -outline-offset-1 outline-grey-200"
        />
        {item.caption && (
          <figcaption>
            <P $size="small" className="text-fg-muted">
              {item.caption}
            </P>
          </figcaption>
        )}
      </figure>
    );
  };

  return (
    <CommonFullWidthWrapper
      wrapperClassName={tw(isSubtle && "bg-bg-subtle")}
      className="flex flex-col gap-10 py-16 md:gap-12 md:py-20 lg:py-24"
    >
      <div className="flex flex-col gap-4">
        <H2 $margin="0">{heading}</H2>
        {text && (
          <P className="max-w-[60ch] text-pretty text-fg-muted">{text}</P>
        )}
      </div>
      <div className="grid gap-x-6 gap-y-10 md:grid-cols-2">
        {items.map(renderItem)}
      </div>
    </CommonFullWidthWrapper>
  );
};

export default CompareGallery;
