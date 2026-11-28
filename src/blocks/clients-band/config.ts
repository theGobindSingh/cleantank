import { highlightField } from "@/blocks/highlight";
import type { Block } from "payload";

/** The grey band of client logos, from the cleared `clients`. */
export const clientsBand: Block = {
  slug: "clientsBand",
  interfaceName: "ClientsBandBlock",
  labels: { singular: "Clients band", plural: "Clients bands" },
  fields: [
    {
      name: "heading",
      type: "textarea",
      required: true,
      localized: true,
      admin: {
        description:
          "A short label beside the logos. Each line of the field is a line on the site.",
      },
    },
    highlightField,
  ],
};
