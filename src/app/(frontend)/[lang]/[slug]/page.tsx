import Blocks from "@/blocks";
import Link from "@components/link";
import StatusPage from "@components/status-page";
import { getDictionary, localeAlternates, localePath, toLocale } from "@i18n";
import config from "@payload-config";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import { cache } from "react";

// Pages added in the admin later render on first visit, then stay cached.
export const dynamicParams = true;

/** Linked from the header but not built yet; each shows a holding page until its CMS page exists. */
const UNDER_DEVELOPMENT = ["organisations", "franchise"];

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

const toSlug = ({ slug }: { slug: string }) => {
  return slug;
};

const toParams = (slug: string) => {
  return { slug };
};

/** Every page in the `pages` collection except the home page, plus the holding pages. */
export const generateStaticParams = async () => {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "pages",
    select: { slug: true },
    pagination: false,
  });
  const slugs = new Set([
    ...docs.filter(isInnerPage).map(toSlug),
    ...UNDER_DEVELOPMENT,
  ]);
  return [...slugs].map(toParams);
};

export const generateMetadata = async ({
  params,
}: PageProps<"/[lang]/[slug]">): Promise<Metadata> => {
  const { lang, slug } = await params;
  const page = await findPage(slug, lang);
  const path = `/${slug}`;
  const isHolding = !page && UNDER_DEVELOPMENT.includes(slug);
  return {
    ...(page && { title: page.metaTitle ?? page.title }),
    ...(isHolding && {
      title: getDictionary(toLocale(lang)).underDevelopment.title,
      robots: { index: false, follow: true },
    }),
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
  const locale = toLocale(lang);
  const page = await findPage(slug, lang);
  if (!page && UNDER_DEVELOPMENT.includes(slug)) {
    const { underDevelopment } = getDictionary(locale);
    return (
      <StatusPage
        code={underDevelopment.code}
        title={underDevelopment.title}
        description={underDevelopment.description}
      >
        <Link href={localePath(locale, "/contact")} variant="filled">
          {underDevelopment.contact}
        </Link>
      </StatusPage>
    );
  }
  if (!page) notFound();

  return (
    <main>
      <Blocks blocks={page.layout} locale={locale} />
    </main>
  );
};

export default CmsPage;
