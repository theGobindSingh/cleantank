import { actionsField } from "@/blocks/actions/config";
import { highlightField } from "@/blocks/highlight";
import type { Block } from "payload";

/** The franchise models side by side, each with its investment, with the financial disclaimer under them. */
export const franchiseModels: Block = {
  slug: "franchiseModels",
  interfaceName: "FranchiseModelsBlock",
  labels: { singular: "Franchise models", plural: "Franchise models" },
  fields: [
    { name: "heading", type: "text", required: true, localized: true },
    highlightField,
    { name: "text", type: "textarea", localized: true },
    {
      name: "investmentLabel",
      type: "text",
      localized: true,
      admin: {
        description:
          "A small caps label over each model's figure, such as “Total investment”. Optional.",
      },
    },
    {
      name: "models",
      type: "array",
      required: true,
      minRows: 1,
      maxRows: 4,
      admin: { description: "Shown as equals, in this order." },
      fields: [
        { name: "name", type: "text", required: true, localized: true },
        {
          name: "investment",
          type: "text",
          required: true,
          localized: true,
          admin: { description: "Such as ₹5.5 lakh." },
        },
        {
          name: "investmentNote",
          type: "text",
          localized: true,
          admin: { description: "Such as “including machinery”. Optional." },
        },
        { name: "summary", type: "textarea", required: true, localized: true },
        {
          name: "points",
          type: "array",
          admin: { description: "What the package includes. Optional." },
          fields: [
            { name: "text", type: "text", required: true, localized: true },
          ],
        },
      ],
    },
    {
      name: "note",
      type: "textarea",
      required: true,
      localized: true,
      admin: {
        description:
          "The financial disclaimer (INFO-BANK §8). It shows right under the figures.",
      },
    },
    actionsField,
    {
      name: "apply",
      type: "group",
      admin: {
        description:
          "Separate cards only: a subheading and one accent button under the copy column, such as “Are you partner material?” and “Apply now”. Optional; shown when both are set.",
      },
      fields: [
        { name: "heading", type: "text", localized: true },
        highlightField,
        { name: "label", type: "text", localized: true },
        {
          name: "href",
          type: "text",
          admin: {
            description:
              "A path such as /contact, or `whatsapp` or `call` for the site's number.",
          },
        },
      ],
    },
    {
      name: "isSeparate",
      type: "checkbox",
      label: "Separate cards",
      admin: {
        description:
          "Tick to show each model as its own card with space between, instead of one ruled grid, with the heading and text in a column beside the cards on wide screens.",
      },
    },
    {
      name: "isSubtle",
      type: "checkbox",
      label: "Stone background",
      admin: { description: "Tick to alternate with the section above." },
    },
  ],
};
