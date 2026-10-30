import { highlightField } from "@/blocks/highlight";
import type { Block } from "payload";

/** Questions and answers, each opening on its own. */
export const faq: Block = {
  slug: "faq",
  interfaceName: "FaqBlock",
  labels: { singular: "Questions", plural: "Questions" },
  fields: [
    { name: "heading", type: "text", required: true, localized: true },
    highlightField,
    {
      name: "items",
      type: "array",
      required: true,
      minRows: 1,
      fields: [
        { name: "question", type: "text", required: true, localized: true },
        { name: "answer", type: "textarea", required: true, localized: true },
      ],
    },
  ],
};
