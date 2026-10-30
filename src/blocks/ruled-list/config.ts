import { anchorField } from "@/blocks/anchor";
import { highlightField } from "@/blocks/highlight";
import type { Block } from "payload";

/** A titled list of short points in ruled cells, such as what to prepare. */
export const ruledList: Block = {
  slug: "ruledList",
  interfaceName: "RuledListBlock",
  labels: { singular: "Ruled list", plural: "Ruled lists" },
  fields: [
    { name: "heading", type: "text", required: true, localized: true },
    highlightField,
    { name: "text", type: "textarea", localized: true },
    {
      name: "items",
      type: "array",
      required: true,
      minRows: 1,
      fields: [
        { name: "title", type: "text", required: true, localized: true },
        { name: "text", type: "textarea", localized: true },
      ],
    },
    {
      name: "note",
      type: "textarea",
      localized: true,
      admin: { description: "A small note under the list. Optional." },
    },
    {
      name: "isSubtle",
      type: "checkbox",
      label: "Stone background",
      admin: { description: "Tick to alternate with the section above." },
    },
    anchorField,
  ],
};
