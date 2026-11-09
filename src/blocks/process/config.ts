import { actionsField } from "@/blocks/actions/config";
import { highlightField } from "@/blocks/highlight";
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
    highlightField,
    {
      name: "detailed",
      type: "checkbox",
      admin: {
        description:
          "Also show each step in full, with its photo, purpose and equipment, under the track. For the process page.",
      },
    },
    actionsField,
  ],
};
