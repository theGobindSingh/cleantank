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
      name: "certificates",
      type: "array",
      labels: { singular: "Certificate", plural: "Certificates" },
      admin: {
        description:
          "Work completion certificates, newest last. Shown in the client list while showClientCertificates in src/site.ts is on, never on the band. Blur officials' names, signatures and personal contacts, and every amount (values, costs, rates), before uploading.",
      },
      fields: [
        { name: "file", type: "upload", relationTo: "media", required: true },
        {
          name: "date",
          type: "date",
          required: true,
          admin: {
            date: { pickerAppearance: "dayOnly" },
            description:
              "When the work was completed; the issue date if the certificate gives none.",
          },
        },
        {
          name: "work",
          type: "text",
          required: true,
          localized: true,
          admin: { description: "The work certified, in one sentence." },
        },
      ],
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
