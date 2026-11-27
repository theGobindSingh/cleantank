import type { Field } from "payload";

/** Up to three links: the first a filled button, the second outlined, the third a text link. */
export const actionsField: Field = {
  name: "actions",
  type: "array",
  maxRows: 3,
  admin: {
    description:
      "The first is the filled button, the second outlined, the third a text link. Use an approved label, such as “Get a Service Quote”.",
  },
  fields: [
    { name: "label", type: "text", required: true, localized: true },
    {
      name: "href",
      type: "text",
      required: true,
      admin: {
        description:
          "A path such as /contact (the language prefix is added for you), or `whatsapp` or `call` for the site's number.",
      },
    },
  ],
};
