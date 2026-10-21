import { hero } from "@/blocks/hero/config";
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
    { name: "layout", type: "blocks", required: true, blocks: [hero] },
  ],
};
