import type { Field } from "payload";

/** The words of a block's heading to show in accent 500. */
export const highlightField: Field = {
  name: "highlight",
  type: "text",
  localized: true,
  admin: {
    description:
      "Words or phrases from the heading to show in coral, separated by commas. For example: Clean, easy",
  },
};
