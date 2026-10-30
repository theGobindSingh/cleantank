import { revalidateSite } from "@/collections/revalidate-site";
import type { GlobalConfig } from "payload";

const allowPublicRead = () => {
  return true;
};

/** The 5-step cleaning process, shared by every page that shows it. */
export const processGlobal: GlobalConfig = {
  slug: "process",
  access: { read: allowPublicRead },
  hooks: { afterChange: [revalidateSite] },
  fields: [
    {
      name: "steps",
      type: "array",
      required: true,
      minRows: 5,
      maxRows: 5,
      admin: {
        description:
          "Always these five, in this order: De-watering, High-pressure cleaning, Sludge & water removal, Disinfection, UV treatment.",
      },
      fields: [
        { name: "title", type: "text", required: true, localized: true },
        { name: "text", type: "textarea", required: true, localized: true },
        {
          name: "benefit",
          type: "text",
          localized: true,
          admin: {
            description:
              "What the customer gets from the step, in one short line. Shown in the track on the home and homes pages. Optional.",
          },
        },
        {
          name: "purpose",
          type: "textarea",
          localized: true,
          admin: {
            description:
              "Why the step matters, shown on the process page. Optional.",
          },
        },
        {
          name: "equipment",
          type: "text",
          localized: true,
          admin: {
            description:
              "The equipment used, shown on the process page. Optional.",
          },
        },
        { name: "image", type: "upload", relationTo: "media", required: true },
        {
          name: "whereApplicable",
          type: "checkbox",
          admin: {
            description: "Marks the step “Where applicable” (UV treatment).",
          },
        },
      ],
    },
  ],
};
