import { actionsField } from "@/blocks/actions/config";
import { highlightField } from "@/blocks/highlight";
import type { Block } from "payload";

/** Where a service is offered, in words and on a rough map, with actions to confirm an address. */
export const serviceArea: Block = {
  slug: "serviceArea",
  interfaceName: "ServiceAreaBlock",
  labels: { singular: "Service area", plural: "Service areas" },
  fields: [
    { name: "heading", type: "text", required: true, localized: true },
    highlightField,
    {
      name: "text",
      type: "textarea",
      required: true,
      localized: true,
      admin: { description: "Leave a blank line between paragraphs." },
    },
    {
      name: "map",
      type: "group",
      admin: {
        description:
          "Labels on the rough map. The drawing itself is fixed in code.",
      },
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "chandigarh",
              type: "text",
              required: true,
              localized: true,
            },
            { name: "mohali", type: "text", required: true, localized: true },
            {
              name: "panchkula",
              type: "text",
              required: true,
              localized: true,
            },
          ],
        },
        {
          name: "radius",
          type: "text",
          required: true,
          localized: true,
          admin: { description: "The label on the dashed line, e.g. 20 km." },
        },
        {
          name: "caption",
          type: "text",
          required: true,
          localized: true,
          admin: {
            description:
              "Under the map; also what screen readers hear in its place.",
          },
        },
      ],
    },
    actionsField,
    {
      name: "isSubtle",
      type: "checkbox",
      label: "Stone background",
      admin: { description: "Tick to alternate with the section above." },
    },
  ],
};
