import { describe, expect, it } from "vitest";
import {
  localeAlternates,
  localePath,
  preferredLocale,
  toLocale,
} from "./config";

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
    "x-default": "/amc",
  });
});

describe("preferredLocale", () => {
  it("follows the browser's ranking", () => {
    expect(preferredLocale("hi-IN,hi;q=0.9,en;q=0.8")).toBe("hi");
    expect(preferredLocale("en-US,en;q=0.9,pa;q=0.8")).toBe("en");
    expect(preferredLocale("fr,pa;q=0.5,hi;q=0.4")).toBe("pa");
    expect(preferredLocale("en;q=0.5,hi;q=0.9")).toBe("hi");
  });

  it("falls back to English", () => {
    expect(preferredLocale(null)).toBe("en");
    expect(preferredLocale("fr-FR,de")).toBe("en");
    expect(preferredLocale("hi;q=0")).toBe("en");
  });
});
