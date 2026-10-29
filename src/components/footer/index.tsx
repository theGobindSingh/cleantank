import { shownOffices, site } from "@/site";
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

// The build year; pages are prerendered, so this is fixed per deploy.
const YEAR = new Date().getFullYear();

/**
 * The site-wide navy footer, in ruled cells: brand, ISO, GSTIN, MSME and GeM, site map,
 * contacts, legal links, then the correspondence office, with the copyright
 * under them. Labels come from the dictionaries and facts from src/site.ts,
 * so it renders on error pages too.
 */
const Footer = ({ locale }: FooterProps) => {
  const { footer, header, contact } = getDictionary(locale);

  const sitemap: [string, string][] = [
    ["/", header.links.home],
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
  const isoIssuer = footer.isoIssuer
    .replace("{issuer}", site.iso.issuer)
    .replace("{holder}", site.legalName);

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
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-(length:--fs-small)">
            <dt className="text-fg-muted">{footer.certified}</dt>
            <dd className="flex flex-col">
              <span lang="en">{site.iso.standard}</span>
              <span lang="en" className="font-mono">
                {site.iso.number}
              </span>
              <span className="text-fg-muted">{isoIssuer}</span>
            </dd>
            <dt className="text-fg-muted">GSTIN</dt>
            <dd lang="en" className="font-mono">
              {site.gstin}
            </dd>
            <dt lang="en" className="text-fg-muted">
              MSME
            </dt>
            <dd lang="en" className="font-mono">
              {site.udyam}
            </dd>
            <dt lang="en" className="text-fg-muted">
              GeM
            </dt>
            <dd>{footer.gemSeller}</dd>
          </dl>
        </div>
        <nav aria-label={footer.sitemap} className={tw(CELL, "lg:col-span-2")}>
          <CellHeading>{footer.sitemap}</CellHeading>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-1">
            {sitemap.map(renderLink)}
          </ul>
        </nav>
        <ContactCell labels={contact} />
        <nav
          aria-label={footer.legal}
          className={tw(CELL, "md:col-span-2 lg:col-span-3")}
        >
          <CellHeading>{footer.legal}</CellHeading>
          <ul className="flex flex-col gap-2">
            {legal.map(renderLink)}
            <CookieSettings
              label={footer.cookieSettings}
              className={tw(LIST_LINK, "cursor-pointer")}
            />
          </ul>
        </nav>
        {shownOffices.map(renderOffice)}
      </div>
      <P $size="caption" className="text-fg-muted">
        <span lang="en">
          © {YEAR} {site.legalName} / {site.name}.
        </span>{" "}
        {footer.rights}
      </P>
    </CommonFullWidthWrapper>
  );
};

export default Footer;
