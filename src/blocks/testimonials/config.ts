import { highlightField } from "@/blocks/highlight";
import type { Block } from "payload";

/** Up to three quotes from the `testimonials` collection. */
export const testimonialsBlock: Block = {
  slug: "testimonials",
  interfaceName: "TestimonialsBlock",
  labels: { singular: "Testimonials", plural: "Testimonials" },
  fields: [
    { name: "heading", type: "text", required: true, localized: true },
    highlightField,
    {
      name: "items",
      type: "relationship",
      relationTo: "testimonials",
      hasMany: true,
      maxRows: 3,
      filterOptions: { permission: { equals: true } },
      admin: {
        description:
          "Pick up to three. Only quotes with permission can be picked, and the section stays hidden until one is.",
      },
    },
  ],
};
