import Blocks from "@/blocks";
import { localeAlternates, localePath, toLocale } from "@i18n";
import config from "@payload-config";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import { cache } from "react";

// Pages added in the admin later render on first visit, then stay cached.
export const dynamicParams = true;

const findPage = cache(async (slug: string, lang: string) => {
  const payload = await getPayload({ config });
  const {
    docs: [page],
  } = await payload.find({
    collection: "pages",
    where: { slug: { equals: slug } },
    locale: toLocale(lang),
    limit: 1,
  });
  // `home` is served at `/`, never at `/home`.
  return slug === "home" ? undefined : page;
});

const isInnerPage = ({ slug }: { slug: string }) => {
  return slug !== "home";
};

const toParams = ({ slug }: { slug: string }) => {
  return { slug };
};

/** Every page in the `pages` collection except the home page. */
export const generateStaticParams = async () => {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "pages",
    select: { slug: true },
    pagination: false,
  });
  return docs.filter(isInnerPage).map(toParams);
};

export const generateMetadata = async ({
  params,
}: PageProps<"/[lang]/[slug]">): Promise<Metadata> => {
  const { lang, slug } = await params;
  const page = await findPage(slug, lang);
  const path = `/${slug}`;
  return {
    ...(page && { title: page.metaTitle ?? page.title }),
    ...(page?.metaDescription && { description: page.metaDescription }),
    alternates: {
      canonical: localePath(toLocale(lang), path),
      languages: localeAlternates(path),
    },
  };
};

/** An inner page, such as `/process`, built from its blocks in Payload. */
const CmsPage = async ({ params }: PageProps<"/[lang]/[slug]">) => {
  const { lang, slug } = await params;
  const page = await findPage(slug, lang);
  if (!page) notFound();

  return (
    <main>
      <Blocks blocks={page.layout} locale={toLocale(lang)} />
    </main>
  );
};

export default CmsPage;
