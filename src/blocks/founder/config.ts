import type { Block } from "payload";

/** The founder: role, name, a short bio and a cut-out portrait. */
export const founder: Block = {
  slug: "founder",
  interfaceName: "FounderBlock",
  labels: { singular: "Founder", plural: "Founders" },
  fields: [
    {
      name: "role",
      type: "text",
      required: true,
      localized: true,
      admin: { description: "Shown as a small label above the name." },
    },
    { name: "name", type: "text", required: true, localized: true },
    {
      name: "bio",
      type: "textarea",
      required: true,
      localized: true,
      admin: { description: "Leave a blank line between paragraphs." },
    },
    {
      name: "portrait",
      type: "upload",
      relationTo: "media",
      admin: {
        description:
          "A real photo with the background removed (transparent PNG or WebP). It sits on the section's ground, unframed.",
      },
    },
  ],
};
