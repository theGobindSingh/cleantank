import type { Field, TextField } from "payload";
import { describe, expect, it } from "vitest";
import { imageSlotFields } from "./image-slot";

const url = "https://images.unsplash.com/photo-123?auto=format&q=80";

const isUrlField = (field: Field): field is TextField => {
  return "name" in field && field.name === "imageUrl";
};

const fieldName = (field: Field) => {
  return "name" in field && field.name;
};

const check = (
  required: boolean,
  value: string | null,
  siblingData: object,
) => {
  const field = imageSlotFields({
    name: "image",
    required,
    description: "",
  }).find(isUrlField);
  return field?.validate?.(value as never, { siblingData } as never);
};

describe("imageSlotFields", () => {
  it("names the fields after the slot", () => {
    const fields = imageSlotFields({ name: "secondImage", description: "" });
    expect(fields.map(fieldName)).toEqual([
      "secondImage",
      "secondImageUrl",
      "secondImageAlt",
    ]);
  });

  it("takes an upload or a URL in a required slot", () => {
    expect(check(true, null, { image: 1 })).toBe(true);
    expect(check(true, url, {})).toBe(true);
    expect(check(true, url, { image: 1 })).toBe(true);
  });

  it("needs one of the two in a required slot", () => {
    expect(check(true, null, {})).toBe("Upload an image or add an image URL.");
    expect(check(true, "", { image: null })).toBe(
      "Upload an image or add an image URL.",
    );
  });

  it("leaves an optional slot empty", () => {
    expect(check(false, null, {})).toBe(true);
  });

  it("refuses a URL next/image would throw on, even beside an upload", () => {
    expect(check(false, "https://example.com/a.jpg", { image: 1 })).toMatch(
      /images\.unsplash\.com/,
    );
  });
});
