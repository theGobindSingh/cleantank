import {
  SITE_NAME,
  SITE_URL,
  brand,
  businessContactDetails,
  clientGroupLabels,
  iso,
  legalLinks,
  siteLinks,
} from "@constants";
import Head from "next/head";
import { useRouter } from "next/router";

const THEME_COLOR = "#001B3C";

const defaultDescription = `${brand.brandLine}. ${brand.descriptor}. ${iso.safeWording} Serving residential, commercial and institutional water storage tanks across India.`;

const pageMeta: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Water Tank Cleaning Services India | Clean Tank",
    description:
      "ISO 9001:2015 certified water storage tank cleaning across 7 Indian states. Scientific, mechanized cleaning, disinfection and AMC plans since 2008.",
  },
  "/clients": {
    title: "Our Clients | Clean Tank Services",
    description:
      "Clean Tank Services has cleaned water storage tanks for government bodies, hospitals, IITs, NITs, hotels and residential complexes across India.",
  },
  "/process": {
    title: "5-Step Tank Cleaning Process | Clean Tank",
    description:
      "Our scientific 5-step tank cleaning process: de-watering, high-pressure jetting, sludge removal, disinfection and UV treatment where applicable.",
  },
  "/about-us": {
    title: "About Clean Tank Services | Since 2008",
    description:
      "Clean Tank Services, an initiative of Gobind Galaxy, has offered ISO 9001:2015 certified water tank cleaning across India since 2008.",
  },
  "/services": {
    title: "Water Tank Cleaning Services & AMC | Clean Tank",
    description:
      "Domestic, commercial, institutional and industrial water tank cleaning, disinfection and annual maintenance contracts (AMC) across India.",
  },
  "/franchise": {
    title: "Water Tank Cleaning Franchise | Clean Tank",
    description:
      "Start a Clean Tank Services franchise from approximately ₹3 lakh. Training, marketing support and an ISO-aligned tank cleaning business model.",
  },
  "/contact": {
    title: "Contact Clean Tank Services | Get a Quote",
    description:
      "Contact Clean Tank Services for a water storage tank cleaning quote — residential, commercial, institutional and government facilities across India.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Clean Tank Services",
    description:
      "How Clean Tank Services collects, uses and protects your personal information when you contact us or use this website.",
  },
  "/terms": {
    title: "Terms & Conditions | Clean Tank Services",
    description:
      "Terms and conditions governing use of the Clean Tank Services website and our water storage tank cleaning services.",
  },
};

// Same five client groups as `/clients` and the home "Who We Serve" section —
// labels come from `@constants` so this JSON-LD list can never drift apart.
const serviceSegments = Object.values(clientGroupLabels);

const businessId = `${SITE_URL}/#business`;
const websiteId = `${SITE_URL}/#website`;

// Escape `<` so a stringified JSON-LD payload can never break out of the
// surrounding <script> tag.
const escapeJsonLd = (json: string) => {
  return json.replace(/</g, "\\u003c");
};

const buildBusinessNode = () => {
  const { phone, email, address, geo, socialProfiles } = businessContactDetails;
  // E.164 phone number derived from the existing tel: href.
  const telephone = phone.href.replace(/^tel:/, "");

  return {
    "@type": "LocalBusiness",
    "@id": businessId,
    name: SITE_NAME,
    url: SITE_URL,
    telephone,
    email: email.label,
    description: defaultDescription,
    image: `${SITE_URL}/icon-512.png`,
    logo: `${SITE_URL}/icon-512.png`,
    // No documented fixed opening hours exist (INFO-BANK only supports 24x7
    // emergency service, subject to availability) — omit
    // openingHoursSpecification rather than assert hours that aren't real.
    areaServed: { "@type": "Country", name: "India" },
    ...(address && {
      address: { "@type": "PostalAddress", ...address },
    }),
    ...(geo && { geo: { "@type": "GeoCoordinates", ...geo } }),
    ...(socialProfiles.length > 0 && { sameAs: socialProfiles }),
    makesOffer: serviceSegments.map((segment) => {
      return {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `Water Tank Cleaning for ${segment}`,
          description: `Industrial-grade water tank cleaning and sanitation for ${segment.toLowerCase()} across India.`,
          provider: { "@id": businessId },
          areaServed: { "@type": "Country", name: "India" },
        },
      };
    }),
  };
};

const buildWebsiteNode = () => {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": businessId },
  };
};

const buildWebPageNode = ({
  canonicalUrl,
  title,
  description,
}: {
  canonicalUrl: string;
  title: string;
  description: string;
}) => {
  return {
    "@type": "WebPage",
    url: canonicalUrl,
    name: title,
    description,
    isPartOf: { "@id": websiteId },
    about: { "@id": businessId },
  };
};

const buildBreadcrumbNode = ({
  canonicalUrl,
  pageName,
}: {
  canonicalUrl: string;
  pageName: string;
}) => {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: pageName, item: canonicalUrl },
    ],
  };
};

const HeadMeta = () => {
  const { pathname } = useRouter();
  // Known routes = primary nav + legal pages. `pageMeta` only supplies
  // title/description overrides; whether a route is indexable must not
  // depend on it having a `pageMeta` entry (that previously noindexed
  // /privacy-policy and /terms, which have no siteLinks entry).
  const link = [...siteLinks, ...legalLinks].find((knownLink) => {
    return knownLink.path === pathname;
  });
  const isNotFound = !link;
  const pageName = (link?.name ?? "Page Not Found").trim();

  const meta = pageMeta[pathname];
  const title = isNotFound
    ? "Page Not Found | Clean Tank Services"
    : (meta?.title ?? `${pageName} | ${SITE_NAME}`);
  const description = meta?.description ?? defaultDescription;

  const canonicalPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  const graph = isNotFound
    ? null
    : [
        buildBusinessNode(),
        buildWebsiteNode(),
        buildWebPageNode({ canonicalUrl, title, description }),
        ...(pathname === "/"
          ? []
          : [buildBreadcrumbNode({ canonicalUrl, pageName })]),
      ];

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {isNotFound && <meta name="robots" content="noindex" />}
      <link rel="canonical" href={canonicalUrl} />

      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icon-32.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content={THEME_COLOR} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${SITE_URL}/og.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}/og.png`} />

      {graph && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: escapeJsonLd(
              JSON.stringify({
                "@context": "https://schema.org",
                "@graph": graph,
              }),
            ),
          }}
        />
      )}
    </Head>
  );
};

export default HeadMeta;
