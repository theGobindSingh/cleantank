import { site } from "@/site";
import { H1, H2, P } from "@components/html";
import Link from "@components/link";
import { getDictionary, localeAlternates, localePath, toLocale } from "@i18n";
import { formatPhone } from "@utils/phone";
import type { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: PageProps<"/[lang]/contact">): Promise<Metadata> => {
  const locale = toLocale((await params).lang);
  return {
    title: getDictionary(locale).contact.title,
    alternates: {
      canonical: localePath(locale, "/contact"),
      languages: localeAlternates("/contact"),
    },
  };
};

type Office = (typeof site.offices)[number];

const renderOffice = (office: Office) => {
  return (
    <div key={office.label} lang="en" className="flex flex-col gap-1">
      <P $weight="600">{office.label}</P>
      <P className="text-fg-muted">{office.address}</P>
      <P>
        <Link href={`tel:+${office.phone}`}>{formatPhone(office.phone)}</Link>
      </P>
    </div>
  );
};

/**
 * Holding contact page: the contacts from src/site.ts. The enquiry forms come
 * with the audience pages (docs/PRODUCT.md).
 */
const ContactPage = async ({ params }: PageProps<"/[lang]/contact">) => {
  const locale = toLocale((await params).lang);
  const { contact } = getDictionary(locale);

  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-12 px-4 py-16">
      <div className="flex flex-col gap-4">
        <H1 $margin="0">{contact.title}</H1>
        <ul className="flex flex-col gap-2">
          <li>
            {contact.call}:{" "}
            <Link href={`tel:+${site.phone}`}>{formatPhone(site.phone)}</Link>
          </li>
          <li>
            {contact.whatsapp}:{" "}
            <Link href={`https://wa.me/${site.whatsapp}`}>
              {formatPhone(site.whatsapp)}
            </Link>
          </li>
          <li>
            {contact.email}:{" "}
            <Link href={`mailto:${site.email}`}>{site.email}</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-6">
        <H2 $margin="0">{contact.offices}</H2>
        {site.offices.map(renderOffice)}
      </div>
    </main>
  );
};

export default ContactPage;
