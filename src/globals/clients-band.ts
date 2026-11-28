import { highlightField } from "@/blocks/highlight";
import { revalidateSite } from "@/collections/revalidate-site";
import type { GlobalConfig } from "payload";

const allowPublicRead = () => {
  return true;
};

/** The clients strip's heading, shared by every page that shows the strip. */
export const clientsBandGlobal: GlobalConfig = {
  slug: "clientsBand",
  label: "Clients band",
  access: { read: allowPublicRead },
  hooks: { afterChange: [revalidateSite] },
  fields: [
    {
      name: "heading",
      type: "textarea",
      required: true,
      localized: true,
      admin: {
        description:
          "A short label beside the logos, on every page with the strip. Each line of the field is a line on the site.",
      },
    },
    highlightField,
  ],
};
