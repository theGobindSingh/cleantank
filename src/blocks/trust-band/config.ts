import { highlightField } from "@/blocks/highlight";
import type { Block } from "payload";

const isTyped = (
  _data: unknown,
  siblingData: Partial<{ source: string | null }>,
) => {
  return siblingData.source !== "isoStandard";
};

/** The secondary emphasis band of key figures: years, ISO, reach. */
export const trustBand: Block = {
  slug: "trustBand",
  interfaceName: "TrustBandBlock",
  labels: { singular: "Trust band", plural: "Trust bands" },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
      localized: true,
      admin: { description: "A short label above the figures." },
    },
    highlightField,
    {
      name: "figures",
      type: "array",
      required: true,
      minRows: 2,
      maxRows: 4,
      admin: {
        description: "Only figures approved in INFO-BANK, such as 15+ years.",
      },
      fields: [
        {
          name: "source",
          type: "select",
          required: true,
          defaultValue: "typed",
          options: [
            { label: "Typed value", value: "typed" },
            { label: "ISO standard from site.ts", value: "isoStandard" },
          ],
          admin: {
            description:
              "Pick the ISO standard to show the one in src/site.ts instead of typing it.",
          },
        },
        {
          name: "value",
          type: "text",
          required: true,
          localized: true,
          admin: { condition: isTyped },
        },
        { name: "label", type: "text", required: true, localized: true },
      ],
    },
  ],
};
