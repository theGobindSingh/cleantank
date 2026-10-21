import type { Block } from "payload";

/** The top of a page: heading, one line, up to two actions, over a before/after comparison. */
export const hero: Block = {
  slug: "hero",
  interfaceName: "HeroBlock",
  fields: [
    { name: "heading", type: "text", required: true, localized: true },
    { name: "text", type: "textarea", required: true, localized: true },
    {
      type: "row",
      fields: [
        {
          name: "before",
          type: "upload",
          relationTo: "media",
          required: true,
          admin: { description: "The tank before cleaning." },
        },
        {
          name: "after",
          type: "upload",
          relationTo: "media",
          required: true,
          admin: {
            description: "The same tank after cleaning, framed the same way.",
          },
        },
      ],
    },
    {
      name: "actions",
      type: "array",
      maxRows: 2,
      admin: {
        description:
          "The first is the filled button. Use an approved label, such as “Get a Service Quote”.",
      },
      fields: [
        { name: "label", type: "text", required: true, localized: true },
        {
          name: "href",
          type: "text",
          required: true,
          admin: {
            description:
              "A path such as /contact. The language prefix is added for you.",
          },
        },
      ],
    },
  ],
};
