import type { HomePrice } from "@/payload-types";
import type { Dictionary } from "@i18n";
import { formatNumber, formatRupees, type Quote } from "./price";

type Tier = HomePrice["tiers"][number];
type Discount = NonNullable<HomePrice["discounts"]>[number];
type Labels = Dictionary["prices"];

const isSized = (litres: number) => {
  return litres > 0;
};

// Each band starts one litre above the band before it.
export const sizeLabel = (
  tier: Tier,
  previous: Tier | undefined,
  labels: Labels,
) => {
  const min = previous?.upTo ? formatNumber(previous.upTo + 1) : undefined;
  if (tier.upTo == null) {
    return labels.above.replace("{min}", formatNumber(previous?.upTo ?? 0));
  }
  const max = formatNumber(tier.upTo);
  return min
    ? labels.range.replace("{min}", min).replace("{max}", max)
    : labels.upTo.replace("{max}", max);
};

// Split around the amount, so only the figure is set in mono.
export const priceParts = (tier: Tier, labels: Labels) => {
  const [before = "", after = ""] =
    tier.per === "litre" ? labels.perLitre.split("{price}") : [];
  return { before, amount: formatRupees(tier.price), after };
};

/** One cell of the discount strip: the tank count, then what it costs. */
export interface Step {
  tanks: string;
  off: string;
}

const range = (min: number, max: number, labels: Labels) => {
  return min === max
    ? String(min)
    : labels.stepRange
        .replace("{min}", String(min))
        .replace("{max}", String(max));
};

/**
 * The strip's cells: full price below the first rule, then one per rule, each
 * running until the next rule starts. `rules` are sorted by tanks.
 */
export const discountSteps = (rules: Discount[], labels: Labels): Step[] => {
  const first = rules[0]?.tanks ?? 2;
  const toStep = (rule: Discount, index: number) => {
    const next = rules[index + 1];
    return {
      tanks: next
        ? range(rule.tanks, next.tanks - 1, labels)
        : labels.stepFrom.replace("{min}", String(rule.tanks)),
      off: labels.percentOff.replace("{percent}", String(rule.percent)),
    };
  };
  return [
    {
      tanks: first > 2 ? range(1, first - 1, labels) : labels.oneTank,
      off: labels.fullPrice,
    },
    ...rules.map(toStep),
  ];
};

/**
 * The WhatsApp message for the calculator's figures: the tanks entered and the
 * bill. Undefined until a tank has a size, so the generic message stays.
 */
export const whatsappMessage = (
  litres: number[],
  bill: Quote,
  gstPercent: number,
  labels: Labels,
): string | undefined => {
  const sizes = litres.filter(isSized);
  if (sizes.length === 0) return undefined;
  const toLine = (size: number, index: number) => {
    return labels.whatsappTank
      .replace("{n}", String(index + 1))
      .replace("{litres}", formatNumber(size));
  };
  const discount =
    bill.discount > 0
      ? [
          `${labels.discount.replace("{percent}", String(bill.percent))}: −${formatRupees(bill.discount)}`,
        ]
      : [];
  return [
    labels.whatsapp,
    ...sizes.map(toLine),
    `${labels.subtotal}: ${formatRupees(bill.subtotal)}`,
    ...discount,
    `${labels.gst.replace("{percent}", String(gstPercent))}: ${formatRupees(bill.gst)}`,
    `${labels.total}: ${formatRupees(bill.total)}`,
  ].join("\n");
};
