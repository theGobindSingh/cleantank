import type { Block } from "payload";

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
        { name: "value", type: "text", required: true, localized: true },
        { name: "label", type: "text", required: true, localized: true },
      ],
    },
  ],
};
