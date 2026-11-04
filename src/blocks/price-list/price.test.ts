import { describe, expect, it } from "vitest";
import { quote, reachedStep } from "./price";

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
      eligible: 1,
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

  it("takes the rate the eligible tanks earn, only off those tanks", () => {
    const five = quote([500, 500, 1000, 1000, 31000], TIERS, DISCOUNTS, 18);
    expect(five).toMatchObject({ eligible: 4, percent: 20 });
    expect(five.discount).toBe(560);
    expect(five.total).toBe(2800 + 4030 - 560 + 1129);
  });

  it("doesn't count tanks in a tier without discount towards the rate", () => {
    expect(quote([40000, 1000], TIERS, DISCOUNTS, 0)).toMatchObject({
      eligible: 1,
      percent: 0,
      discount: 0,
      total: 5200 + 800,
    });
    expect(quote([40000, 1000, 1000], TIERS, DISCOUNTS, 0)).toMatchObject({
      eligible: 2,
      percent: 10,
      discount: 160,
      total: 5200 + 1600 - 160,
    });
  });

  it("skips empty and zero sizes", () => {
    expect(quote([0, Number.NaN, 500], TIERS, DISCOUNTS, 0)).toMatchObject({
      percent: 0,
      total: 600,
    });
  });
});

describe("reachedStep", () => {
  it("marks no step without eligible tanks, then one step per rule earned", () => {
    expect(reachedStep(0, DISCOUNTS)).toBe(-1);
    expect(reachedStep(1, DISCOUNTS)).toBe(0);
    expect(reachedStep(3, DISCOUNTS)).toBe(1);
    expect(reachedStep(4, DISCOUNTS)).toBe(2);
    expect(reachedStep(9, DISCOUNTS)).toBe(2);
  });

  it("marks no step when only big tanks are entered", () => {
    const bill = quote([40000, 40000], TIERS, DISCOUNTS, 0);
    expect(reachedStep(bill.eligible, DISCOUNTS)).toBe(-1);
  });
});
