import type { Process } from "@/payload-types";
import { revalidatePath } from "next/cache";
import type { GlobalAfterChangeHook, GlobalConfig } from "payload";

const allowPublicRead = () => {
  return true;
};

// The steps show on several pages, so a save rebuilds every page in every language.
// Scripts outside Next (seeding) pass `context: { disableRevalidate: true }`.
const revalidateSite: GlobalAfterChangeHook = ({ doc, context }) => {
  if (!context.disableRevalidate) revalidatePath("/[lang]", "layout");
  return doc as Process;
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
