import { highlightField } from "@/blocks/highlight";
import type { Block } from "payload";

/** A heading over a few paragraphs of prose, with an optional photo beside them. */
export const story: Block = {
  slug: "story",
  interfaceName: "StoryBlock",
  labels: { singular: "Story", plural: "Stories" },
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
    { name: "image", type: "upload", relationTo: "media" },
  ],
};
