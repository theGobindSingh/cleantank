import { siteLinks } from "@constants";
import Head from "next/head";
import { useRouter } from "next/router";

const HeadMeta = () => {
  const { pathname } = useRouter();
  const page = (
    siteLinks.find((link) => {
      return link.path === pathname;
    })?.name ?? "Not Found"
  ).trim();

  const title = `${page} | Clean Tank Services`;
  const description =
    "Clean Tank Services delivers industrial-grade water tank cleaning across India — ISO 9001:2015 certified, government-empanelled, trusted by hospitals, institutions, and enterprises nationwide.";

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
