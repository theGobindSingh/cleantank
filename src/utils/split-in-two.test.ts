import { describe, expect, it } from "vitest";
import { splitInTwo } from "./split-in-two";

describe("splitInTwo", () => {
  it("splits at the space that best halves the width", () => {
    expect(splitInTwo("Your health comes first.")).toEqual([
      "Your health",
      "comes first.",
    ]);
    expect(splitInTwo("आपकी सेहत सबसे पहले।")).toEqual([
      "आपकी सेहत",
      "सबसे पहले।",
    ]);
  });

  it("weighs Indic text by width, not character count", () => {
    expect(splitInTwo("ਪਰਿਵਾਰ ਸਾਡੇ ਉੱਤੇ ਭਰੋਸਾ ਕਿਉਂ ਕਰਦੇ ਹਨ।")).toEqual([
      "ਪਰਿਵਾਰ ਸਾਡੇ ਉੱਤੇ",
      "ਭਰੋਸਾ ਕਿਉਂ ਕਰਦੇ ਹਨ।",
    ]);
    expect(splitInTwo("हम आपकी टंकी कैसे साफ़ करते हैं।")).toEqual([
      "हम आपकी टंकी",
      "कैसे साफ़ करते हैं।",
    ]);
    expect(splitInTwo("ਤੁਹਾਡੀ ਸਿਹਤ ਸਭ ਤੋਂ ਪਹਿਲਾਂ।")).toEqual([
      "ਤੁਹਾਡੀ ਸਿਹਤ",
      "ਸਭ ਤੋਂ ਪਹਿਲਾਂ।",
    ]);
  });

  it("keeps text without a space whole", () => {
    expect(splitInTwo("Clean")).toEqual(["Clean"]);
  });
});
