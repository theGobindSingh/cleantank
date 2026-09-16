import {
  SITE_NAME,
  SITE_URL,
  businessContactDetails,
  siteLinks,
} from "@constants";
import Head from "next/head";
import { useRouter } from "next/router";

const THEME_COLOR = "#001B3C";

const defaultDescription =
  "Clean Tank Services delivers industrial-grade water tank cleaning across India — ISO 9001:2015 certified, government-empanelled, trusted by hospitals, institutions, and enterprises nationwide.";

const pageMeta: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Water Tank Cleaning Services in India | Clean Tank Services",
    description:
      "ISO 9001:2015 certified, government-grade water tank cleaning across India using robotic hydro-jetting and UV sterilization. 5000+ projects completed.",
  },
  "/clients": {
    title: "Our Clients & Case Studies | Clean Tank Services",
    description:
      "Clean Tank Services powers 500+ major installations across India, from institutional and industrial giants to healthcare networks and government bodies.",
  },
  "/process": {
    title: "The 5-Step Tank Cleaning Protocol | Clean Tank Services",
    description:
      "Clean Tank Services' 5-step scientific protocol: water removal, high-pressure jetting, sludge removal, chemical treatment, and UV sterilization for tanks.",
  },
  "/about-us": {
    title: "About Clean Tank Services | Clean Tank Services",
    description:
      "A decade of precision engineering behind Clean Tank Services: ISO 9001:2015 certified, 5000+ projects, 200+ technicians, and operations across 8 states.",
  },
  "/franchise": {
    title: "Franchise Opportunities | Clean Tank Services",
    description:
      "Explore the Clean Tank Services franchise programme: ISO-aligned brand, turnkey equipment, structured training, and territory support for a high-trust business.",
  },
  "/contact": {
    title: "Contact | Clean Tank Services",
    description:
      "Request a Clean Tank Services site audit for residential societies, commercial buildings, hospitals, schools, government facilities, or industrial tanks.",
  },
};

const serviceSegments = [
  "Residential Societies",
  "Commercial Buildings",
  "Hospitals",
  "Schools & Institutions",
  "Government Facilities",
  "Industrial Tanks",
];

const businessId = `${SITE_URL}/#business`;
const websiteId = `${SITE_URL}/#website`;

// Escape `<` so a stringified JSON-LD payload can never break out of the
// surrounding <script> tag.
const escapeJsonLd = (json: string) => json.replace(/</g, "\\u003c");

const buildBusinessNode = () => {
  const { phone, email, hours, address, geo, socialProfiles } =
    businessContactDetails;
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
    openingHoursSpecification:
      businessContactDetails.openingHoursSpecification.map(
        ({ dayOfWeek, opens, closes }) => {
          return {
            "@type": "OpeningHoursSpecification",
            dayOfWeek,
            opens,
            closes,
          };
        },
      ),
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
    hoursAvailable: hours,
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
  const link = siteLinks.find((siteLink) => {
    return siteLink.path === pathname;
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
