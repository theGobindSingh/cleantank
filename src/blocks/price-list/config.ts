import { actionsField } from "@/blocks/actions/config";
import { anchorField } from "@/blocks/anchor";
import { highlightField } from "@/blocks/highlight";
import type { Block } from "payload";

/**
 * Published prices by tank size, with multi-tank discounts, GST and a
 * calculator. The figures come from the `homePrices` global.
 */
export const priceList: Block = {
  slug: "priceList",
  interfaceName: "PriceListBlock",
  labels: { singular: "Price list", plural: "Price lists" },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
      localized: true,
      admin: {
        description:
          "The prices, discounts and GST are in the Home prices global, shared by every language.",
      },
    },
    highlightField,
    {
      name: "text",
      type: "textarea",
      localized: true,
      admin: { description: "Leave a blank line between paragraphs." },
    },
    {
      name: "note",
      type: "textarea",
      localized: true,
      admin: {
        description:
          "Small print under the prices. Leave a blank line between paragraphs.",
      },
    },
    actionsField,
    {
      name: "isSubtle",
      type: "checkbox",
      label: "Stone background",
      admin: { description: "Tick to alternate with the section above." },
    },
    anchorField,
  ],
};
