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
    },
    {
      name: "highlight",
      type: "text",
      localized: true,
      admin: {
        description:
          "Words or phrases from the heading to show in coral, separated by commas. Not used on a detailed block, which keeps a plain heading.",
      },
    },
    {
      name: "detailed",
      type: "checkbox",
      admin: {
        description:
          "Also show each step in full, with its photo, purpose and equipment, and link the track to them. For the process page.",
      },
    },
  ],
};
