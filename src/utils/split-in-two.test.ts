import { describe, expect, it } from "vitest";
import { splitInTwo } from "./split-in-two";

describe("splitInTwo", () => {
  it("splits at the space nearest the middle", () => {
    expect(splitInTwo("Your health comes first.")).toEqual([
      "Your health",
      "comes first.",
    ]);
    expect(splitInTwo("आपकी सेहत सबसे पहले।")).toEqual([
      "आपकी सेहत",
      "सबसे पहले।",
    ]);
  });

  it("counts graphemes, not code units", () => {
    expect(splitInTwo("ਤੁਹਾਡੀ ਸਿਹਤ ਸਭ ਤੋਂ ਪਹਿਲਾਂ।")).toEqual([
      "ਤੁਹਾਡੀ ਸਿਹਤ",
      "ਸਭ ਤੋਂ ਪਹਿਲਾਂ।",
    ]);
  });

  it("keeps text without a space whole", () => {
    expect(splitInTwo("Clean")).toEqual(["Clean"]);
  });
});
