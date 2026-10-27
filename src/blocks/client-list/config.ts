import { anchorField } from "@/blocks/anchor";
import type { Block } from "payload";

/** Every cleared client by name, grouped by sector, from the `clients` collection. */
export const clientList: Block = {
  slug: "clientList",
  interfaceName: "ClientListBlock",
  labels: { singular: "Client list", plural: "Client lists" },
  fields: [
    { name: "heading", type: "text", required: true, localized: true },
    { name: "text", type: "textarea", localized: true },
    anchorField,
  ],
};
