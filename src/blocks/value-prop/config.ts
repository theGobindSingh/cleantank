import type { Block } from "payload";

/** The core promise under the hero: a heading, a short paragraph, a photo and an optional link onward. */
export const valueProp: Block = {
  slug: "valueProp",
  interfaceName: "ValuePropBlock",
  labels: { singular: "Value proposition", plural: "Value propositions" },
  fields: [
    { name: "heading", type: "text", required: true, localized: true },
    {
      name: "text",
      type: "textarea",
      required: true,
      localized: true,
      admin: { description: "Leave a blank line between paragraphs." },
    },
    { name: "image", type: "upload", relationTo: "media", required: true },
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
