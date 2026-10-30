import { highlightField } from "@/blocks/highlight";
import type { Block } from "payload";

/** Before/after comparisons of different tanks, side by side. */
export const compareGallery: Block = {
  slug: "compareGallery",
  interfaceName: "CompareGalleryBlock",
  labels: {
    singular: "Before/after gallery",
    plural: "Before/after galleries",
  },
  fields: [
    { name: "heading", type: "text", required: true, localized: true },
    highlightField,
    { name: "text", type: "textarea", localized: true },
    {
      name: "items",
      type: "array",
      required: true,
      minRows: 1,
      admin: {
        description:
          "One tank each. Frame the before and after photos the same way.",
      },
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "before",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "after",
              type: "upload",
              relationTo: "media",
              required: true,
            },
          ],
        },
        {
          name: "caption",
          type: "text",
          localized: true,
          admin: { description: "Such as the tank type and capacity." },
        },
      ],
    },
    {
      name: "isSubtle",
      type: "checkbox",
      label: "Stone background",
      admin: { description: "Tick to alternate with the section above." },
    },
  ],
};
