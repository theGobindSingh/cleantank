import type { Media } from "@/payload-types";
import { describe, expect, it } from "vitest";
import { toSlotImage } from "./to-image";

const media = { url: "/api/media/file/a.jpg", alt: "Tank" } as Media;
const url = "https://images.pexels.com/photos/1/pexels-photo-1.jpeg";

describe("toSlotImage", () => {
  it("uses the upload when there is no URL", () => {
    expect(toSlotImage(media, null, "Ignored")).toEqual({
      src: media.url,
      alt: "Tank",
    });
  });

  it("prefers the URL and its alt over the upload", () => {
    expect(toSlotImage(media, url, "Rooftop")).toEqual({
      src: url,
      alt: "Rooftop",
    });
  });

  it("treats a URL photo with no alt as decorative", () => {
    expect(toSlotImage(media, url, null)).toEqual({ src: url, alt: "" });
  });

  it("returns null for an empty slot", () => {
    expect(toSlotImage(null, "", null)).toBeNull();
  });
});
