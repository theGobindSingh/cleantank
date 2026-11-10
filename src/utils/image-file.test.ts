import { describe, expect, it } from "vitest";
import { detectImage, hashBytes, sanitizeSvg } from "./image-file";

const bytes = (...values: number[]) => {
  return new Uint8Array([...values, 0, 0, 0, 0, 0, 0, 0, 0]);
};
const text = (value: string) => {
  return new TextEncoder().encode(value);
};

describe("detectImage", () => {
  it("knows PNG, JPEG and WebP by their magic bytes", () => {
    expect(detectImage(bytes(0x89, 0x50, 0x4e, 0x47))).toBe("image/png");
    expect(detectImage(bytes(0xff, 0xd8, 0xff))).toBe("image/jpeg");
    expect(detectImage(text("RIFF\0\0\0\0WEBPVP8 "))).toBe("image/webp");
  });

  it("knows an SVG, with or without an XML declaration", () => {
    expect(detectImage(text('<svg xmlns="http://www.w3.org/2000/svg"/>'))).toBe(
      "image/svg+xml",
    );
    expect(detectImage(text('<?xml version="1.0"?>\n<svg>'))).toBe(
      "image/svg+xml",
    );
  });

  it("refuses HTML and anything else", () => {
    expect(detectImage(text("<!doctype html><html><svg></svg>"))).toBeNull();
    expect(detectImage(text("GIF89a"))).toBeNull();
  });
});

describe("sanitizeSvg", () => {
  it("strips script, event handlers, foreignObject and javascript: links", async () => {
    const clean = await sanitizeSvg(
      '<svg xmlns="http://www.w3.org/2000/svg" onload="alert(1)"><script>alert(1)</script><foreignObject><div>x</div></foreignObject><a href="javascript:alert(1)"><rect width="5" height="5"/></a></svg>',
    );
    expect(clean).toContain('<svg xmlns="http://www.w3.org/2000/svg">');
    expect(clean).toContain("<rect");
    expect(clean).not.toMatch(/script|onload|foreignObject|javascript/i);
  });

  it("throws when no SVG is left", async () => {
    await expect(sanitizeSvg("<script>alert(1)</script>")).rejects.toThrow();
  });
});

describe("hashBytes", () => {
  it("matches equal bytes and tells changed ones apart", () => {
    expect(hashBytes(text("logo"))).toBe(hashBytes(text("logo")));
    expect(hashBytes(text("logo"))).not.toBe(hashBytes(text("logo2")));
  });
});
