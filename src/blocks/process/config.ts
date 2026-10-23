import type { Block } from "payload";

/** The 5-step track, with the steps from the `process` global. */
export const processBlock: Block = {
  slug: "process",
  interfaceName: "ProcessBlock",
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
      localized: true,
      admin: {
        description: "Read out by screen readers; not shown on the page.",
      },
    },
  ],
};
