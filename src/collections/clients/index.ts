import type { CollectionConfig } from "payload";
import { revalidateSite } from "../revalidate-site";

const allowPublicRead = () => {
  return true;
};

/** Clients for the logo band and client lists. Only `cleared` ones show on the site. */
export const clients: CollectionConfig = {
  slug: "clients",
  admin: {
    group: "Clients",
    useAsTitle: "name",
    defaultColumns: ["name", "category", "cleared"],
  },
  access: { read: allowPublicRead },
  hooks: { afterChange: [revalidateSite] },
  orderable: true,
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      admin: { description: "Spelled exactly as in INFO-BANK §7." },
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "client-categories",
      required: true,
    },
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      filterOptions: { mimeType: { equals: "image/svg+xml" } },
      admin: {
        description:
          "SVG only. Without one the client is left out of the band. No State Emblem of India.",
      },
    },
    {
      name: "certificate",
      type: "upload",
      relationTo: "media",
      admin: {
        description:
          "Work completion certificate. Public, but not shown on the band.",
      },
    },
    {
      name: "cleared",
      type: "checkbox",
      label: "Permission to show on the site",
      admin: {
        position: "sidebar",
        description:
          "Tick only with the client's permission or documentation (INFO-BANK §7).",
      },
    },
  ],
};
