import type { PriceListBlock } from "@/payload-types";
import type { Dictionary } from "@i18n";
import { formatNumber, formatRupees } from "./price";

type Tier = PriceListBlock["tiers"][number];
type Discount = NonNullable<PriceListBlock["discounts"]>[number];
type Labels = Dictionary["prices"];

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

export const discountLabel = (
  rule: Discount,
  next: Discount | undefined,
  labels: Labels,
) => {
  const template = next
    ? labels.discountRange.replace("{max}", String(next.tanks - 1))
    : labels.discountFrom;
  return template
    .replace("{min}", String(rule.tanks))
    .replace("{percent}", String(rule.percent));
};
