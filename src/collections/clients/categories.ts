import type { CollectionConfig } from "payload";
import { revalidateSite } from "../revalidate-site";

const allowPublicRead = () => {
  return true;
};

/** Client sectors (Government, Healthcare…), from INFO-BANK §7. */
export const clientCategories: CollectionConfig = {
  slug: "client-categories",
  labels: { singular: "Category", plural: "Categories" },
  admin: { group: "Clients", useAsTitle: "name" },
  access: { read: allowPublicRead },
  hooks: { afterChange: [revalidateSite] },
  orderable: true,
  fields: [{ name: "name", type: "text", required: true, localized: true }],
};
