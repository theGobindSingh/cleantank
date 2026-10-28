import { actionsField } from "@/blocks/actions/config";
import { anchorField } from "@/blocks/anchor";
import type { Block } from "payload";

/** Published prices by tank size, with multi-tank discounts, GST and a calculator. */
export const priceList: Block = {
  slug: "priceList",
  interfaceName: "PriceListBlock",
  labels: { singular: "Price list", plural: "Price lists" },
  fields: [
    { name: "heading", type: "text", required: true, localized: true },
    {
      name: "text",
      type: "textarea",
      localized: true,
      admin: { description: "Leave a blank line between paragraphs." },
    },
    {
      name: "tiers",
      type: "array",
      required: true,
      minRows: 1,
      admin: {
        description:
          "One row per size band. Each band starts one litre above the band before it.",
      },
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "upTo",
              label: "Up to (litres)",
              type: "number",
              min: 1,
              admin: {
                description: "Leave empty on the last, open-ended band.",
              },
            },
            {
              name: "price",
              label: "Price (₹, before GST)",
              type: "number",
              required: true,
              min: 0,
            },
            {
              name: "per",
              type: "select",
              required: true,
              defaultValue: "tank",
              options: [
                { label: "Per tank", value: "tank" },
                { label: "Per litre", value: "litre" },
              ],
            },
          ],
        },
        {
          name: "discount",
          type: "checkbox",
          label: "Multi-tank discount applies",
          defaultValue: true,
        },
      ],
    },
    {
      name: "discounts",
      type: "array",
      admin: {
        description:
          "Each rate applies from its number of tanks until the next rate starts.",
      },
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "tanks",
              label: "From (tanks)",
              type: "number",
              required: true,
              min: 2,
            },
            {
              name: "percent",
              label: "Discount (%)",
              type: "number",
              required: true,
              min: 0,
              max: 100,
            },
          ],
        },
      ],
    },
    {
      name: "gst",
      label: "GST (%)",
      type: "number",
      required: true,
      defaultValue: 18,
      min: 0,
      admin: { description: "Added to the prices above in the calculator." },
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
