import { describe, expect, it } from "vitest";
import { pexels, unsplash } from "./stock-photo";

describe("unsplash", () => {
  it("defaults to quality 80", () => {
    expect(unsplash("1507525428034-b723cf961d3e")).toBe(
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&q=80",
    );
  });

  it("keeps a quality of 0", () => {
    expect(unsplash("1507525428034-b723cf961d3e", { quality: 0 })).toBe(
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&q=0",
    );
  });
});

describe("pexels", () => {
  it("repeats the id in the file name", () => {
    expect(pexels("2014422")).toBe(
      "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
    );
  });
});
