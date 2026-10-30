import { actionsField } from "@/blocks/actions/config";
import { highlightField } from "@/blocks/highlight";
import type { Block } from "payload";

/** A navy emphasis band that closes a page with a heading, a line and actions. */
export const ctaBand: Block = {
  slug: "ctaBand",
  interfaceName: "CtaBandBlock",
  labels: { singular: "Closing band", plural: "Closing bands" },
  fields: [
    { name: "heading", type: "text", required: true, localized: true },
    highlightField,
    { name: "text", type: "textarea", localized: true },
    actionsField,
  ],
};
