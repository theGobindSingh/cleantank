import { anchorField } from "@/blocks/anchor";
import { highlightField } from "@/blocks/highlight";
import type { Block, Field } from "payload";

const itemFields: Field[] = [
  { name: "title", type: "text", required: true, localized: true },
  { name: "text", type: "textarea", localized: true },
];

/** A titled list of short points in ruled cells, such as what to prepare, with an optional second list beside it. */
export const ruledList: Block = {
  slug: "ruledList",
  interfaceName: "RuledListBlock",
  labels: { singular: "Ruled list", plural: "Ruled lists" },
  fields: [
    { name: "heading", type: "text", required: true, localized: true },
    highlightField,
    { name: "text", type: "textarea", localized: true },
    {
      name: "label",
      type: "text",
      localized: true,
      admin: {
        description:
          "A small caps label over the points. Needed only with a second list.",
      },
    },
    {
      name: "items",
      type: "array",
      required: true,
      minRows: 1,
      fields: itemFields,
    },
    {
      name: "secondLabel",
      type: "text",
      localized: true,
      admin: {
        description:
          "Optional. With a second list, the two sit side by side from large screens up, each under its label.",
      },
    },
    {
      name: "secondItems",
      type: "array",
      fields: itemFields,
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
