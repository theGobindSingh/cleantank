import type { RuledListBlock } from "@/payload-types";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import { H2, H3, P } from "@components/html";
import { tw } from "@utils/tw";

type Item = RuledListBlock["items"][number];

const renderItem = (item: Item, index: number) => {
  return (
    <li
      key={item.id ?? index}
      className="flex flex-col gap-2 bg-surface p-6 md:p-10"
    >
      <H3 $size="h4" $margin="0">
        {item.title}
      </H3>
      {item.text && <P className="text-pretty text-fg-muted">{item.text}</P>}
    </li>
  );
};

/**
 * A heading, an optional line and short points in ruled cells, stacked on
 * phones and in two columns from `md`. From `lg` up, three columns when the
 * count fills whole rows of three.
 */
const RuledList = ({
  heading,
  text,
  items,
  note,
  isSubtle,
  anchor,
}: RuledListBlock) => {
  return (
    <CommonFullWidthWrapper
      wrapperClassName={tw(isSubtle && "bg-bg-subtle")}
      wrapperProps={anchor ? { id: anchor } : {}}
      className="flex flex-col gap-10 py-16 md:gap-12 md:py-20 lg:py-24"
    >
      <div className="flex flex-col gap-4">
        <H2 $margin="0">{heading}</H2>
        {text && (
          <P className="max-w-[60ch] text-pretty text-fg-muted">{text}</P>
        )}
      </div>
      <ul
        className={tw(
          // an odd last cell spans the row, so no row ends in an empty cell
          "grid gap-px overflow-hidden rounded-xs border border-border bg-border md:grid-cols-2 md:[&>li:last-child:nth-child(odd)]:col-span-2",
          items.length % 3 === 0 &&
            "lg:grid-cols-3 lg:[&>li:last-child:nth-child(odd)]:col-span-1",
        )}
      >
        {items.map(renderItem)}
      </ul>
      {note && (
        <P $size="small" className="max-w-[68ch] text-pretty text-fg-muted">
          {note}
        </P>
      )}
    </CommonFullWidthWrapper>
  );
};

export default RuledList;
