import { shownOffices, site } from "@/site";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import { H1, H2, H3, P } from "@components/html";
import Link from "@components/link";
import { getDictionary, localeAlternates, localePath, toLocale } from "@i18n";
import { formatPhone, whatsappHref } from "@utils/phone";
import type { LucideIcon } from "lucide-react";
import { MailIcon, MessageCircleIcon, PhoneIcon } from "lucide-react";
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

interface Channel {
  label: string;
  hint: string;
  href: string;
  value: string;
  Icon: LucideIcon;
}

type Office = (typeof site.offices)[number];

const LABEL =
  "flex items-center gap-2 font-mono tracking-[0.08em] text-fg-muted uppercase";

const renderChannel = ({ label, hint, href, value, Icon }: Channel) => {
  return (
    <li
      key={label}
      className="relative flex flex-col gap-3 bg-surface p-6 outline-1 -outline-offset-1 outline-transparent has-[a:hover]:outline-border-strong md:p-10"
    >
      <P $size="caption" $margin="0" className={LABEL}>
        <Icon
          aria-hidden="true"
          className="size-5"
          strokeWidth={1.85}
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        {label}
      </P>
      {/* the link's ::after covers the cell, so the whole card is clickable */}
      <Link
        href={href}
        lang="en"
        className="self-start text-(length:--fs-h4) font-semibold break-all after:absolute after:inset-0 after:content-['']"
      >
        {value}
      </Link>
      <P className="text-pretty text-fg-muted">{hint}</P>
    </li>
  );
};

const renderOffice = (office: Office) => {
  return (
    <address
      key={office.label}
      lang="en"
      className="flex flex-col gap-3 bg-surface p-6 not-italic md:p-10"
    >
      <H3 $size="caption" $margin="0" className={LABEL}>
        {office.label}
      </H3>
      <P className="max-w-[40ch] text-pretty">{office.address}</P>
      <Link href={`tel:+${office.phone}`} className="self-start">
        {formatPhone(office.phone)}
      </Link>
    </address>
  );
};

/**
 * Holding contact page: the contacts from src/site.ts. The enquiry forms come
 * with the audience pages (docs/PRODUCT.md).
 */
const ContactPage = async ({ params }: PageProps<"/[lang]/contact">) => {
  const locale = toLocale((await params).lang);
  const { contact } = getDictionary(locale);

  const channels: Channel[] = [
    {
      label: contact.call,
      hint: contact.callHint,
      href: `tel:+${site.phone}`,
      value: formatPhone(site.phone),
      Icon: PhoneIcon,
    },
    {
      label: contact.whatsapp,
      hint: contact.whatsappHint,
      href: whatsappHref(site.whatsapp, contact.whatsappText),
      value: formatPhone(site.whatsapp),
      Icon: MessageCircleIcon,
    },
    {
      label: contact.email,
      hint: contact.emailHint,
      href: `mailto:${site.email}`,
      value: site.email,
      Icon: MailIcon,
    },
  ];

  return (
    <main>
      <CommonFullWidthWrapper className="flex flex-col gap-10 py-16 md:gap-12 md:py-20 lg:py-24">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <H1 $margin="0">{contact.title}</H1>
            <span aria-hidden="true" className="block h-[3px] w-12 bg-marker" />
          </div>
          <P $size="body-l" className="max-w-[60ch] text-pretty text-fg-muted">
            {contact.intro}
          </P>
        </div>
        <ul className="grid gap-px overflow-hidden rounded-xs border border-border bg-border lg:grid-cols-3">
          {channels.map(renderChannel)}
        </ul>
      </CommonFullWidthWrapper>
      <CommonFullWidthWrapper
        wrapperClassName="border-t border-border bg-bg-subtle"
        className="flex flex-col gap-10 py-16 md:gap-12 md:py-20 lg:py-24"
      >
        <H2 $margin="0">{contact.offices}</H2>
        <div className="grid gap-px overflow-hidden rounded-xs border border-border bg-border">
          {shownOffices.map(renderOffice)}
        </div>
      </CommonFullWidthWrapper>
    </main>
  );
};

export default ContactPage;
