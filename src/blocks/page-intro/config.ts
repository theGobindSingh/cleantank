import { actionsField } from "@/blocks/actions/config";
import type { Block } from "payload";

/** The top of an inner page: its H1, one line and up to two actions. */
export const pageIntro: Block = {
  slug: "pageIntro",
  interfaceName: "PageIntroBlock",
  labels: { singular: "Page intro", plural: "Page intros" },
  fields: [
    { name: "heading", type: "text", required: true, localized: true },
    { name: "text", type: "textarea", localized: true },
    actionsField,
  ],
};
