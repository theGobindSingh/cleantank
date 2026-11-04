import Actions from "@/blocks/actions";
import type { PriceListBlock } from "@/payload-types";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import { P } from "@components/html";
import Paragraphs from "@components/paragraphs";
import SectionHeadline from "@components/section-headline";
import { getDictionary, type Locale } from "@i18n";
import { toParagraphs } from "@utils/paragraphs";
import { tw } from "@utils/tw";
import Calculator from "./calculator";
import { priceParts, sizeLabel } from "./labels";
import { sortTiers } from "./price";

interface PriceListProps extends PriceListBlock {
  locale: Locale;
}

type Tier = PriceListBlock["tiers"][number];
type Discount = NonNullable<PriceListBlock["discounts"]>[number];

const byTanks = (a: Discount, b: Discount) => {
  return a.tanks - b.tanks;
};

const CELL = "p-3 md:px-4";
const HEAD =
  "p-3 font-mono text-(length:--fs-caption) font-medium tracking-[0.08em] uppercase md:px-4";

const renderNote = (paragraph: string) => {
  return (
    <P
      key={paragraph}
      $size="small"
      $margin="0"
      className="text-pretty text-fg-muted"
    >
      {paragraph}
    </P>
  );
};

/**
 * The headline and intro across the top, then from `lg` up the calculator and
 * buttons in five columns and the price table and small print in the other
 * seven; stacked below, calculator first.
 */
const PriceList = ({
  heading,
  highlight,
  text,
  tiers,
  discounts,
  gst,
  note,
  actions,
  isSubtle,
  anchor,
  locale,
}: PriceListProps) => {
  const { prices: labels } = getDictionary(locale);
  const sorted = sortTiers(tiers);
  const rules = [...(discounts ?? [])].sort(byTanks);

  const renderTier = (tier: Tier, index: number) => {
    const price = priceParts(tier, labels);
    return (
      <tr key={tier.id ?? index} className="border-t border-border">
        <th scope="row" className={tw(CELL, "text-left font-normal")}>
          {sizeLabel(tier, sorted[index - 1], labels)}
        </th>
        <td className={tw(CELL, "text-right")}>
          {price.before}
          <span className="font-mono tabular-nums">{price.amount}</span>
          {price.after}
        </td>
      </tr>
    );
  };

  return (
    <CommonFullWidthWrapper
      wrapperClassName={tw(isSubtle && "bg-bg-subtle")}
      wrapperProps={anchor ? { id: anchor } : {}}
      className="grid gap-10 py-8 md:py-10 lg:grid-cols-12 lg:gap-6 lg:py-12"
    >
      <div className="flex flex-col gap-4 lg:col-span-12">
        <SectionHeadline heading={heading} highlight={highlight} />
        <Paragraphs text={text} className="max-w-[60ch] text-pretty" />
      </div>
      {/* before the prices on phones, beside them from lg up; the buttons follow the calculator */}
      <div className="flex flex-col gap-6 self-start lg:col-span-5">
        <Calculator
          tiers={tiers}
          discounts={rules}
          gstPercent={gst}
          labels={labels}
        />
        <Actions actions={actions} locale={locale} isAccent />
      </div>
      <div className="flex flex-col gap-6 lg:col-span-7">
        {/* the wrapper draws the edge and rounds it; a collapsed table can't */}
        <div className="max-w-160 overflow-hidden rounded-sm border border-border bg-surface">
          <table className="w-full border-collapse">
            <caption className="sr-only">{heading}</caption>
            <thead>
              <tr className="bg-band text-white">
                <th scope="col" className={tw(HEAD, "text-left")}>
                  {labels.size}
                </th>
                <th scope="col" className={tw(HEAD, "text-right")}>
                  {labels.price}
                </th>
              </tr>
            </thead>
            <tbody>{sorted.map(renderTier)}</tbody>
          </table>
        </div>
        {note && (
          <div className="flex flex-col gap-2">
            {toParagraphs(note).map(renderNote)}
          </div>
        )}
      </div>
    </CommonFullWidthWrapper>
  );
};

export default PriceList;
