import { audiences } from "@/blocks/audiences/config";
import { clientList } from "@/blocks/client-list/config";
import { clientsBand } from "@/blocks/clients-band/config";
import { compareGallery } from "@/blocks/compare-gallery/config";
import { credentials } from "@/blocks/credentials/config";
import { ctaBand } from "@/blocks/cta-band/config";
import { faq } from "@/blocks/faq/config";
import { founder } from "@/blocks/founder/config";
import { hero } from "@/blocks/hero/config";
import { pageIntro } from "@/blocks/page-intro/config";
import { processBlock } from "@/blocks/process/config";
import { ruledList } from "@/blocks/ruled-list/config";
import { story } from "@/blocks/story/config";
import { testimonialsBlock } from "@/blocks/testimonials/config";
import { trustBand } from "@/blocks/trust-band/config";
import type { Page } from "@/payload-types";
import { revalidatePath } from "next/cache";
import type { CollectionAfterChangeHook, CollectionConfig } from "payload";

const allowPublicRead = () => {
  return true;
};

// Pages are prerendered, so a saved change rebuilds the page in every language.
// Scripts outside Next (seeding) pass `context: { disableRevalidate: true }`.
const revalidatePage: CollectionAfterChangeHook<Page> = ({ doc, context }) => {
  if (!context.disableRevalidate) {
    const route = doc.slug === "home" ? "/[lang]" : `/[lang]/${doc.slug}`;
    revalidatePath(route, "page");
  }
  return doc;
};

/** Site pages, each built from blocks. The slug `home` is the home page. */
export const pages: CollectionConfig = {
  slug: "pages",
  admin: { useAsTitle: "title", defaultColumns: ["title", "slug"] },
  access: { read: allowPublicRead },
  hooks: { afterChange: [revalidatePage] },
  fields: [
    { name: "title", type: "text", required: true },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        position: "sidebar",
        description: "The URL path without slashes. `home` is the home page.",
      },
    },
    {
      name: "metaTitle",
      type: "text",
      localized: true,
      admin: {
        position: "sidebar",
        description:
          "The browser tab and search title. Falls back to the title.",
      },
    },
    {
      name: "metaDescription",
      type: "textarea",
      localized: true,
      admin: {
        position: "sidebar",
        description: "One or two sentences for search results. Optional.",
      },
    },
    {
      name: "layout",
      type: "blocks",
      required: true,
      blocks: [
        hero,
        audiences,
        processBlock,
        trustBand,
        clientsBand,
        testimonialsBlock,
        pageIntro,
        ruledList,
        compareGallery,
        faq,
        ctaBand,
        story,
        founder,
        credentials,
        clientList,
      ],
    },
  ],
};
