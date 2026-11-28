import type { Block } from "payload";

/** The grey band of client logos, from the cleared `clients`. Its heading is the `clientsBand` global. */
export const clientsBand: Block = {
  slug: "clientsBand",
  interfaceName: "ClientsBandBlock",
  labels: { singular: "Clients band", plural: "Clients bands" },
  fields: [],
};
