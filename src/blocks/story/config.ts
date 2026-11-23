import { highlightField } from "@/blocks/highlight";
import type { Block } from "payload";

/** A heading over a few paragraphs of prose, with an optional second column and photos beside them. */
export const story: Block = {
  slug: "story",
  interfaceName: "StoryBlock",
  labels: { singular: "Story", plural: "Stories" },
  fields: [
    { name: "heading", type: "text", required: true, localized: true },
    highlightField,
    {
      name: "intro",
      type: "textarea",
      localized: true,
      admin: {
        description:
          "Optional. A lead-in over both text columns. Without photos, the section's text then spans the full width.",
      },
    },
    {
      name: "label",
      type: "text",
      localized: true,
      admin: {
        description:
          "A small caps label over the text. Needed only with a second column.",
      },
    },
    {
      name: "text",
      type: "textarea",
      required: true,
      localized: true,
      admin: { description: "Leave a blank line between paragraphs." },
    },
    {
      name: "secondLabel",
      type: "text",
      localized: true,
      admin: {
        description:
          "Optional. With a second column, the two sit side by side with a rule between them, each under its label.",
      },
    },
    {
      name: "secondText",
      type: "textarea",
      localized: true,
      admin: { description: "Leave a blank line between paragraphs." },
    },
    {
      name: "note",
      type: "textarea",
      localized: true,
      admin: { description: "A small note under the text. Optional." },
    },
    {
      name: "photos",
      type: "upload",
      relationTo: "media",
      hasMany: true,
      maxRows: 2,
      admin: {
        description:
          "Optional. One or two portrait photos (1:2) side by side at the right, above the photo below.",
      },
    },
    { name: "image", type: "upload", relationTo: "media" },
  ],
};
