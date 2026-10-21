import Blocks from "@/blocks";
import { localeAlternates, localePath, toLocale } from "@i18n";
import config from "@payload-config";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPayload } from "payload";

export const generateMetadata = async ({
  params,
}: PageProps<"/[lang]">): Promise<Metadata> => {
  const locale = toLocale((await params).lang);
  return {
    alternates: {
      canonical: localePath(locale, "/"),
      languages: localeAlternates("/"),
    },
  };
};

/** The gateway page, built from the `home` page's blocks in Payload. */
const HomePage = async ({ params }: PageProps<"/[lang]">) => {
  const locale = toLocale((await params).lang);
  const payload = await getPayload({ config });
  const {
    docs: [page],
  } = await payload.find({
    collection: "pages",
    where: { slug: { equals: "home" } },
    locale,
    limit: 1,
  });
  if (!page) notFound();

  return (
    <main>
      <Blocks blocks={page.layout} locale={locale} />
    </main>
  );
};

export default HomePage;
