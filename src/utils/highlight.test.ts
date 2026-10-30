import { describe, expect, it } from "vitest";
import { toHighlightParts } from "./highlight";

const plain = (text: string) => {
  return { text, isHighlight: false };
};
const marked = (text: string) => {
  return { text, isHighlight: true };
};

describe("toHighlightParts", () => {
  it("splits the list with or without spaces", () => {
    const expected = [marked("Clean"), plain(" tanks, "), marked("easy")];
    expect(toHighlightParts("Clean tanks, easy", "Clean, easy")).toEqual(
      expected,
    );
    expect(toHighlightParts("Clean tanks, easy", "Clean,easy")).toEqual(
      expected,
    );
  });

  it("ignores case and keeps the heading's own case", () => {
    expect(toHighlightParts("CLEAN tanks", "clean")).toEqual([
      marked("CLEAN"),
      plain(" tanks"),
    ]);
  });

  it("matches whole words only", () => {
    expect(toHighlightParts("Uneasy, then easy", "easy")).toEqual([
      plain("Uneasy, then "),
      marked("easy"),
    ]);
  });

  it("returns the heading unmarked for an empty field", () => {
    expect(toHighlightParts("Clean tanks", null)).toEqual([
      plain("Clean tanks"),
    ]);
    expect(toHighlightParts("Clean tanks", " , ,")).toEqual([
      plain("Clean tanks"),
    ]);
  });

  it("matches a phrase and escapes regex characters", () => {
    expect(
      toHighlightParts("Tanks cleaned (properly)", "cleaned (properly)"),
    ).toEqual([plain("Tanks "), marked("cleaned (properly)")]);
  });

  it("matches Hindi as whole words", () => {
    expect(toHighlightParts("साफ़ टंकी, आसान काम", "आसान, साफ")).toEqual([
      plain("साफ़ टंकी, "),
      marked("आसान"),
      plain(" काम"),
    ]);
  });
});
