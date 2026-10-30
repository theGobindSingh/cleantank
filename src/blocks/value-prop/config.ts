import type { Block } from "payload";

/** The core promise under the hero: a heading, a short paragraph, one or two photos and an optional link onward. */
export const valueProp: Block = {
  slug: "valueProp",
  interfaceName: "ValuePropBlock",
  labels: { singular: "Value proposition", plural: "Value propositions" },
  fields: [
    { name: "heading", type: "text", required: true, localized: true },
    {
      name: "highlight",
      type: "text",
      localized: true,
      admin: {
        description:
          "Words or phrases from the heading to show in coral, separated by commas. For example: health",
      },
    },
    {
      name: "text",
      type: "textarea",
      required: true,
      localized: true,
      admin: { description: "Leave a blank line between paragraphs." },
    },
    { name: "image", type: "upload", relationTo: "media", required: true },
    {
      name: "secondImage",
      type: "upload",
      relationTo: "media",
      admin: {
        description:
          "Optional. Shown left of the main image, at the same size.",
      },
    },
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
