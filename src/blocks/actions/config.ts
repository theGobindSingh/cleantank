import type { Field } from "payload";

/** Up to two links shown as buttons; the first is the filled one. */
export const actionsField: Field = {
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
          "A path such as /contact (the language prefix is added for you), or `whatsapp` or `call` for the site's number.",
      },
    },
  ],
};
