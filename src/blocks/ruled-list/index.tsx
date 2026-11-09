import type { RuledListBlock } from "@/payload-types";
import { H3, P } from "@components/html";
import Section from "@components/section";
import { tw } from "@utils/tw";
import { useId } from "react";

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

const CELLS_CLASS =
  "grid gap-px overflow-hidden rounded-xs border border-border bg-border";

interface ColumnProps {
  label: string;
  items: Item[];
}

/** One of two side-by-side lists: a mono caps label on a 2 px navy rule, then its cells in one column. */
const Column = ({ label, items }: ColumnProps) => {
  const id = useId();
  return (
    <div className="flex flex-col gap-4">
      <P
        id={id}
        $size="ref"
        $weight="500"
        className="border-t-2 border-border-strong pt-3 font-mono tracking-widest text-heading uppercase"
      >
        {label}
      </P>
      <ul aria-labelledby={id} className={CELLS_CLASS}>
        {items.map(renderItem)}
      </ul>
    </div>
  );
};

/**
 * A heading, an optional line and short points in ruled cells, stacked on
 * phones and in two columns from `md`. From `lg` up, three columns when the
 * count fills whole rows of three. With a second list, each list sits under
 * its own label in one column of cells, the two side by side from `lg` up.
 */
const RuledList = ({
  heading,
  highlight,
  text,
  label,
  items,
  secondLabel,
  secondItems,
  note,
  isSubtle,
  anchor,
}: RuledListBlock) => {
  const isPaired = Boolean(secondItems?.length);
  return (
    <Section
      heading={heading}
      highlight={highlight}
      text={text}
      isSubtle={isSubtle}
      anchor={anchor}
    >
      {isPaired ? (
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-6">
          <Column label={label ?? ""} items={items} />
          <Column label={secondLabel ?? ""} items={secondItems ?? []} />
        </div>
      ) : (
        <ul
          className={tw(
            CELLS_CLASS,
            // an odd last cell spans the row, so no row ends in an empty cell
            "md:grid-cols-2 md:[&>li:last-child:nth-child(odd)]:col-span-2",
            items.length % 3 === 0 &&
              "lg:grid-cols-3 lg:[&>li:last-child:nth-child(odd)]:col-span-1",
          )}
        >
          {items.map(renderItem)}
        </ul>
      )}
      {note && (
        <P $size="small" className="max-w-[68ch] text-pretty text-fg-muted">
          {note}
        </P>
      )}
    </Section>
  );
};

export default RuledList;
