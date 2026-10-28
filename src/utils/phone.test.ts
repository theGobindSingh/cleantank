import { describe, expect, it } from "vitest";
import { formatPhone, whatsappHref } from "./phone";

describe("formatPhone", () => {
  it("groups an Indian number in the house style", () => {
    expect(formatPhone("919453517514")).toBe("+91 94535 17514");
  });
});

describe("whatsappHref", () => {
  it("encodes the pre-filled message, Indic text included", () => {
    expect(whatsappHref("919453517514", "नमस्ते, hi & bye?")).toBe(
      "https://wa.me/919453517514?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%2C%20hi%20%26%20bye%3F",
    );
  });
});
