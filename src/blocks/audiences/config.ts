import { highlightField } from "@/blocks/highlight";
import type { Block } from "payload";

/** The three doors: Homes, Organisations and Franchise, each linking to its page. */
export const audiences: Block = {
  slug: "audiences",
  interfaceName: "AudiencesBlock",
  labels: { singular: "Audience doors", plural: "Audience doors" },
  fields: [
    { name: "heading", type: "text", required: true, localized: true },
    highlightField,
    {
      name: "doors",
      type: "array",
      required: true,
      minRows: 3,
      maxRows: 3,
      admin: { description: "Homes, Organisations, Franchise, in that order." },
      fields: [
        { name: "title", type: "text", required: true, localized: true },
        { name: "text", type: "textarea", required: true, localized: true },
        {
          name: "href",
          type: "text",
          required: true,
          admin: { description: "A site path, such as /homes." },
        },
        { name: "linkLabel", type: "text", required: true, localized: true },
      ],
    },
  ],
};
