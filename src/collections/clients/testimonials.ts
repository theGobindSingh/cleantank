import type { Access, CollectionConfig } from "payload";
import { revalidateSite } from "../revalidate-site";

// Quotes carry a person's name and role (personal data under the DPDP Act), so
// visitors and the public API only ever see the ones given with permission.
const hasPermission = (data: Partial<{ permission: boolean | null }>) => {
  return Boolean(data.permission);
};

const readPermittedOrAll: Access = ({ req }) => {
  return req.user ? true : { permission: { equals: true } };
};

/** Quotes from clients' staff. Only those marked `permission` show on the site. */
export const testimonials: CollectionConfig = {
  slug: "testimonials",
  admin: {
    group: "Clients",
    useAsTitle: "organisation",
    defaultColumns: ["organisation", "role", "name", "permission"],
  },
  access: { read: readPermittedOrAll },
  hooks: { afterChange: [revalidateSite] },
  orderable: true,
  fields: [
    { name: "quote", type: "textarea", required: true, localized: true },
    {
      name: "name",
      type: "text",
      admin: {
        description:
          "Leave empty for a quote from a certificate; the role and organisation then stand in.",
      },
    },
    { name: "role", type: "text", required: true, localized: true },
    { name: "organisation", type: "text", required: true },
    {
      name: "permission",
      type: "checkbox",
      label: "Permission to publish",
      admin: {
        position: "sidebar",
        description:
          "Tick only once the person has agreed to their quote, name and role being shown, or the quote is from a work completion certificate (PRODUCT.md).",
      },
    },
    {
      name: "permissionDate",
      type: "date",
      admin: {
        position: "sidebar",
        description: "When they gave permission.",
        condition: hasPermission,
      },
    },
  ],
};
