import { describe, expect, it } from "vitest";
import { toParagraphs } from "./paragraphs";

describe("toParagraphs", () => {
  it("splits at blank lines and trims", () => {
    expect(toParagraphs(" One.\nStill one.\n\n  \nTwo. \n")).toEqual([
      "One.\nStill one.",
      "Two.",
    ]);
  });

  it("returns nothing for empty text", () => {
    expect(toParagraphs(null)).toEqual([]);
  });
});
