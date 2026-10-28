import { describe, expect, it } from "vitest";
import { quote } from "./price";

const TIERS = [
  { upTo: 500, price: 600, per: "tank" as const, discount: true },
  { upTo: 1000, price: 800, per: "tank" as const, discount: true },
  { upTo: 10000, price: 2000, per: "tank" as const, discount: true },
  { upTo: 30000, price: 0.2, per: "litre" as const, discount: true },
  { upTo: null, price: 0.13, per: "litre" as const, discount: false },
];
const DISCOUNTS = [
  { tanks: 2, percent: 10 },
  { tanks: 4, percent: 20 },
];

describe("quote", () => {
  it("prices one tank by its tier and adds GST", () => {
    expect(quote([1000], TIERS, DISCOUNTS, 18)).toEqual({
      subtotal: 800,
      percent: 0,
      discount: 0,
      gst: 144,
      total: 944,
    });
  });

  it("charges per litre and includes the tier's upper bound", () => {
    expect(quote([500], TIERS, [], 0).total).toBe(600);
    expect(quote([12345], TIERS, [], 0).total).toBe(2469);
    expect(quote([30000], TIERS, [], 0).total).toBe(6000);
  });

  it("takes the rate the tank count earns, only off discountable tanks", () => {
    const four = quote([500, 500, 1000, 31000], TIERS, DISCOUNTS, 18);
    expect(four.percent).toBe(20);
    expect(four.discount).toBe(400);
    expect(four.total).toBe(Math.round(2000 + 4030 - 400) + 1013);
  });

  it("skips empty and zero sizes", () => {
    expect(quote([0, Number.NaN, 500], TIERS, DISCOUNTS, 0)).toMatchObject({
      percent: 0,
      total: 600,
    });
  });
});
