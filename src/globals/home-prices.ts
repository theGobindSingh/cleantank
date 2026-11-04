import { revalidateSite } from "@/collections/revalidate-site";
import type { GlobalConfig } from "payload";

const allowPublicRead = () => {
  return true;
};

/**
 * The home price figures the price list block shows. Not localized, so every
 * language shows the same numbers.
 */
export const homePrices: GlobalConfig = {
  slug: "homePrices",
  label: "Home prices",
  access: { read: allowPublicRead },
  hooks: { afterChange: [revalidateSite] },
  fields: [
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
  ],
};
