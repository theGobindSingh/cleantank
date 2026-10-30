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
import { discountLabel, priceParts, sizeLabel } from "./labels";
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
 * Prices by tank size in a table, the multi-tank discounts and small print in
 * seven columns, the calculator in the other five from `lg` up; stacked below.
 */
const PriceList = ({
  heading,
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

  const renderRule = (rule: Discount, index: number) => {
    return (
      <li key={rule.id ?? index}>
        {discountLabel(rule, rules[index + 1], labels)}
      </li>
    );
  };

  return (
    <CommonFullWidthWrapper
      wrapperClassName={tw(isSubtle && "bg-bg-subtle")}
      wrapperProps={anchor ? { id: anchor } : {}}
      className="grid gap-10 py-16 md:py-20 lg:grid-cols-12 lg:gap-6 lg:py-24"
    >
      <div className="flex flex-col gap-6 lg:col-span-7">
        <div className="flex flex-col gap-4">
          <SectionHeadline heading={heading} />
          <Paragraphs text={text} className="max-w-[60ch] text-pretty" />
        </div>
        <table className="w-full max-w-160 border-collapse border border-border bg-surface">
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
        {rules.length > 0 && (
          <ul className="flex flex-col gap-1 font-semibold">
            {rules.map(renderRule)}
          </ul>
        )}
        {note && (
          <div className="flex flex-col gap-2">
            {toParagraphs(note).map(renderNote)}
          </div>
        )}
      </div>
      {/* after the prices on phones, beside them from lg up; the buttons follow the calculator */}
      <div className="self-start lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1">
        <Calculator
          tiers={tiers}
          discounts={rules}
          gstPercent={gst}
          labels={labels}
        />
      </div>
      <Actions actions={actions} locale={locale} className="lg:col-span-7" />
    </CommonFullWidthWrapper>
  );
};

export default PriceList;
