import type { PriceListBlock } from "@/payload-types";

type Tier = PriceListBlock["tiers"][number];
type Discount = NonNullable<PriceListBlock["discounts"]>[number];

export interface Quote {
  /** Tanks with a valid size, discounted or not. */
  count: number;
  /** Tanks in a tier marked for discount: only these set the rate. */
  eligible: number;
  subtotal: number;
  percent: number;
  discount: number;
  gst: number;
  total: number;
}

const toPercent = (rule: Discount) => {
  return rule.percent;
};

const byUpTo = (a: Tier, b: Tier) => {
  return (a.upTo ?? Infinity) - (b.upTo ?? Infinity);
};

/** Tiers from smallest to largest, the open-ended tier last. */
export const sortTiers = (tiers: Tier[]): Tier[] => {
  return [...tiers].sort(byUpTo);
};

/** The tier a tank of `litres` falls in, if any. */
export const tierFor = (litres: number, sorted: Tier[]): Tier | undefined => {
  const fits = (tier: Tier) => {
    return tier.upTo == null || litres <= tier.upTo;
  };
  return sorted.find(fits);
};

/** One tank's price in rupees, before discount and GST. */
export const tankPrice = (litres: number, tier: Tier): number => {
  return tier.per === "litre" ? litres * tier.price : tier.price;
};

/**
 * The bill for a set of tanks, in whole rupees. The discount rate follows the
 * number of tanks in tiers marked for it and applies only to those; GST goes on
 * after.
 */
export const quote = (
  litres: number[],
  tiers: Tier[],
  discounts: Discount[],
  gstPercent: number,
): Quote => {
  const sorted = sortTiers(tiers);
  let subtotal = 0;
  let discountable = 0;
  let count = 0;
  let eligible = 0;
  for (const size of litres) {
    const tier = size > 0 ? tierFor(size, sorted) : undefined;
    if (!tier) continue;
    const price = tankPrice(size, tier);
    subtotal += price;
    count += 1;
    if (!tier.discount) continue;
    discountable += price;
    eligible += 1;
  }
  const isEarned = (rule: Discount) => {
    return eligible >= rule.tanks;
  };
  const percent = Math.max(0, ...discounts.filter(isEarned).map(toPercent));
  const roundedSubtotal = Math.round(subtotal);
  const discount = Math.round((discountable * percent) / 100);
  const taxable = roundedSubtotal - discount;
  const gst = Math.round((taxable * gstPercent) / 100);
  return {
    count,
    eligible,
    subtotal: roundedSubtotal,
    percent,
    discount,
    gst,
    total: taxable + gst,
  };
};

/**
 * Which step of the discount strip a bill reaches: one per rule its eligible
 * tanks earn, so 0 (full price) while only big tanks are entered; -1 with no
 * valid tank yet.
 */
export const reachedStep = (
  { count, eligible }: Pick<Quote, "count" | "eligible">,
  discounts: Discount[],
): number => {
  const isEarned = (rule: Discount) => {
    return eligible >= rule.tanks;
  };
  return count === 0 ? -1 : discounts.filter(isEarned).length;
};

const WHOLE = new Intl.NumberFormat("en-IN");
const PAISE = new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2 });

/** Indian grouping (`20,00,000`) in Latin digits, whatever the page language. */
export const formatNumber = (value: number): string => {
  return WHOLE.format(value);
};

/** `₹1,400`, or `₹0.20` for a per-litre rate. */
export const formatRupees = (value: number): string => {
  return `₹${(Number.isInteger(value) ? WHOLE : PAISE).format(value)}`;
};
