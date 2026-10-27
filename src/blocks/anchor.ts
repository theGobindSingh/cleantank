import type { Field } from "payload";

const ANCHOR_PATTERN = /^[a-z0-9-]+$/;

const validateAnchor = (value: string | null | undefined) => {
  return (
    !value ||
    ANCHOR_PATTERN.test(value) ||
    "Lowercase letters, digits and hyphens only."
  );
};

/** An optional id for the section, so links like /about#clients land on it. */
export const anchorField: Field = {
  name: "anchor",
  type: "text",
  validate: validateAnchor,
  admin: {
    description:
      "Optional. Lets a link such as /about#clients jump here. Lowercase letters, digits and hyphens.",
  },
};
