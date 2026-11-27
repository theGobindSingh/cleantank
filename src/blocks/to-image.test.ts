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

  it("passes the upload's focal point on as an object position", () => {
    const focused = { ...media, focalX: 62.5, focalY: 40 } as Media;
    expect(toSlotImage(focused, null, null)).toEqual({
      src: media.url,
      alt: "Tank",
      position: "62.5% 40%",
    });
  });

  it("returns null for an empty slot", () => {
    expect(toSlotImage(null, "", null)).toBeNull();
  });
});
