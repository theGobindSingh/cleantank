import { site } from "@/site";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import { P, Span } from "@components/html";
import Link from "@components/link";
import { getDictionary, localePath, type Locale } from "@i18n";
import { tw } from "@utils/tw";
import { CELL, CellHeading, ContactCell, LIST_LINK, OfficeCell } from "./cells";
import CookieSettings from "./cookie-settings";

interface FooterProps {
  locale: Locale;
}

// Owner's call: the footer leaves out the registered office address.
const isNotRegisteredOffice = (office: (typeof site.offices)[number]) => {
  return office.label !== "Regd. Office";
};

// The build year; pages are prerendered, so this is fixed per deploy.
const YEAR = new Date().getFullYear();

/**
 * The site-wide navy footer, in ruled cells: brand and ISO line, site map,
 * contacts, legal links, then the correspondence office, with the copyright and GSTIN
 * under them. Labels come from the dictionaries and facts from src/site.ts,
 * so it renders on error pages too.
 */
const Footer = ({ locale }: FooterProps) => {
  const { footer, header, contact } = getDictionary(locale);

  const sitemap: [string, string][] = [
    ["/", footer.links.home],
    ["/homes", header.links.homes],
    ["/organisations", header.links.organisations],
    ["/franchise", header.links.franchise],
    ["/process", header.links.process],
    ["/about", header.links.about],
    ["/about#why-choose-us", footer.links.whyChooseUs],
    ["/about#clients", footer.links.clients],
    ["/contact", header.links.contact],
  ];
  const legal: [string, string][] = [
    ["/privacy", footer.links.privacy],
    ["/terms", footer.links.terms],
  ];
  const iso: [string, string][] = [
    [footer.certified, site.iso.standard],
    [footer.issuer, site.iso.issuer],
    [footer.certificate, site.iso.number],
    [footer.validTo, site.iso.validTo],
  ];

  const renderLink = ([path, label]: [string, string]) => {
    return (
      <li key={path}>
        <Link href={localePath(locale, path)} className={LIST_LINK}>
          {label}
        </Link>
      </li>
    );
  };

  const renderOffice = (office: (typeof site.offices)[number]) => {
    return <OfficeCell key={office.label} office={office} />;
  };

  const renderIsoRow = ([term, value]: [string, string]) => {
    return (
      <div key={term} className="contents">
        <dt className="text-fg-muted">{term}</dt>
        <dd lang="en">{value}</dd>
      </div>
    );
  };

  return (
    <CommonFullWidthWrapper
      element="footer"
      wrapperProps={{ "data-surface": "band" }}
      className="flex flex-col gap-6 py-12 lg:py-16"
    >
      <div className="grid gap-px overflow-hidden rounded-xs border border-border bg-border md:grid-cols-2 lg:grid-cols-12">
        <div className={tw(CELL, "md:col-span-2 lg:col-span-4")}>
          <div lang="en" className="flex flex-col gap-1">
            <Span
              $size="h4"
              $weight="700"
              $lineHeight="1"
              className="uppercase"
            >
              {site.name}
            </Span>
            <Span $size="caption" className="text-fg-muted">
              {site.descriptor}
            </Span>
          </div>
          <P lang="en" $size="small">
            {site.endorsement}
          </P>
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-(length:--fs-small)">
            {iso.map(renderIsoRow)}
          </dl>
        </div>
        <nav aria-label={footer.sitemap} className={tw(CELL, "lg:col-span-2")}>
          <CellHeading>{footer.sitemap}</CellHeading>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-1">
            {sitemap.map(renderLink)}
          </ul>
        </nav>
        <ContactCell labels={contact} />
        <nav aria-label={footer.legal} className={tw(CELL, "lg:col-span-3")}>
          <CellHeading>{footer.legal}</CellHeading>
          <ul className="flex flex-col gap-2">
            {legal.map(renderLink)}
            <CookieSettings
              label={footer.cookieSettings}
              className={tw(LIST_LINK, "cursor-pointer")}
            />
          </ul>
        </nav>
        {site.offices.filter(isNotRegisteredOffice).map(renderOffice)}
      </div>
      <div className="flex flex-col gap-2 text-(length:--fs-caption) text-fg-muted md:flex-row md:justify-between">
        <P $size="caption">
          <span lang="en">
            © {YEAR} {site.legalName} / {site.name}.
          </span>{" "}
          {footer.rights}
        </P>
        <P $size="caption" className="font-mono">
          GSTIN {site.gstin}
        </P>
      </div>
    </CommonFullWidthWrapper>
  );
};

export default Footer;
