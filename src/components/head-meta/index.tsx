import { siteLinks } from "@constants";
import Head from "next/head";
import { useRouter } from "next/router";

const defaultDescription =
  "Clean Tank Services delivers industrial-grade water tank cleaning across India — ISO 9001:2015 certified, government-empanelled, trusted by hospitals, institutions, and enterprises nationwide.";

const pageMeta: Record<string, { title?: string; description: string }> = {
  "/contact": {
    title: "Contact | Clean Tank Services",
    description:
      "Request a CleanTank Services site audit for residential societies, commercial buildings, hospitals, schools, government facilities, and industrial water tanks across India.",
  },
};

const HeadMeta = () => {
  const { pathname } = useRouter();
  const page = (
    siteLinks.find((link) => {
      return link.path === pathname;
    })?.name ?? "Not Found"
  ).trim();

  const meta = pageMeta[pathname];
  const title = meta?.title ?? `${page} | Clean Tank Services`;
  const description = meta?.description ?? defaultDescription;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {page && page !== "Not Found" && (
        <>
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content={`https://cleantankservices.in${pathname}`}
          />
        </>
      )}
    </Head>
  );
};

export default HeadMeta;
