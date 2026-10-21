import { describe, expect, it } from "vitest";
import { localeAlternates, localePath, toLocale } from "./config";

describe("localePath", () => {
  it("leaves English unprefixed", () => {
    expect(localePath("en", "/")).toBe("/");
    expect(localePath("en", "/amc")).toBe("/amc");
  });

  it("prefixes other languages", () => {
    expect(localePath("hi", "/")).toBe("/hi");
    expect(localePath("pa", "/amc")).toBe("/pa/amc");
  });
});

describe("toLocale", () => {
  it("keeps known codes and falls back to English", () => {
    expect(toLocale("pa")).toBe("pa");
    expect(toLocale("fr")).toBe("en");
    expect(toLocale(undefined)).toBe("en");
  });
});

it("localeAlternates lists every language", () => {
  expect(localeAlternates("/amc")).toEqual({
    en: "/amc",
    hi: "/hi/amc",
    pa: "/pa/amc",
  });
});
