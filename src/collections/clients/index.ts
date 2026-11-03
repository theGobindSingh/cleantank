import type { CollectionConfig } from "payload";
import { revalidateSite } from "../revalidate-site";
import {
  deleteFetchedLogo,
  deleteReplacedLogo,
  fetchLogo,
  fileUploadedLogo,
} from "./logo-hooks";

const allowPublicRead = () => {
  return true;
};

const hasFetchError = (data: Partial<{ logoFetchError: string | null }>) => {
  return Boolean(data.logoFetchError);
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
  hooks: {
    beforeChange: [fetchLogo],
    afterChange: [deleteReplacedLogo, fileUploadedLogo, revalidateSite],
    afterDelete: [deleteFetchedLogo],
  },
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
      name: "logoUrl",
      type: "text",
      label: "Logo link",
      admin: {
        description:
          "Paste the address of the logo image (SVG, PNG, JPEG or WebP, up to 2 MB). On save, and again on every deploy, the site copies it into Media; visitors never load it from the client's server. The copy wins over an uploaded logo. With neither, the client stays off the band. No State Emblem of India.",
      },
    },
    {
      name: "logoFetchError",
      type: "text",
      label: "Why the link failed",
      admin: {
        readOnly: true,
        condition: hasFetchError,
        description:
          "The last copy attempt failed, so the band keeps the previous copy or the uploaded logo. Fix the link and save again.",
      },
    },
    {
      name: "fetchedLogo",
      type: "upload",
      relationTo: "media",
      label: "Logo copied from the link",
      admin: {
        readOnly: true,
        description:
          "Set by the site from the link above. Clear the link to remove it.",
      },
    },
    { name: "fetchedLogoHash", type: "text", admin: { hidden: true } },
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      label: "Uploaded logo",
      filterOptions: { mimeType: { contains: "image/" } },
      admin: {
        description:
          "Fallback for when there is no link: upload an SVG, PNG, JPEG or WebP. Used only if no copy from a link exists. On save the image moves to the Client logos folder in Media.",
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
