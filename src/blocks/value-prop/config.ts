import { highlightField } from "@/blocks/highlight";
import { imageSlotFields } from "@/blocks/image-slot";
import type { Block } from "payload";

/** The core promise under the hero: a heading, a short paragraph, one or two photos and an optional link onward. */
export const valueProp: Block = {
  slug: "valueProp",
  interfaceName: "ValuePropBlock",
  labels: { singular: "Value proposition", plural: "Value propositions" },
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
    ...imageSlotFields({
      name: "image",
      required: true,
      description: "Upload the main image, or add its URL below.",
    }),
    ...imageSlotFields({
      name: "secondImage",
      description: "Optional. Shown left of the main image, at the same size.",
    }),
    {
      type: "row",
      fields: [
        {
          name: "href",
          type: "text",
          admin: {
            description:
              "Optional. A site path, such as /process. Shown only with a link label.",
          },
        },
        { name: "linkLabel", type: "text", localized: true },
      ],
    },
  ],
};
