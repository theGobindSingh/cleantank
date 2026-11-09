import PageIntro from "@/blocks/page-intro";
import { shownOffices, site } from "@/site";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import { H3, P } from "@components/html";
import { iconProps } from "@components/icon";
import Link from "@components/link";
import Section from "@components/section";
import { getDictionary, pageAlternates, toLocale } from "@i18n";
import { formatPhone, telHref, whatsappHref } from "@utils/phone";
import type { LucideIcon } from "lucide-react";
import {
  HandshakeIcon,
  MailIcon,
  MessageCircleIcon,
  PhoneIcon,
} from "lucide-react";
import type { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: PageProps<"/[lang]/contact">): Promise<Metadata> => {
  const locale = toLocale((await params).lang);
  return {
    title: getDictionary(locale).contact.title,
    alternates: pageAlternates(locale, "/contact"),
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
        <Icon {...iconProps} className="size-5" />
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
      <Link href={telHref(office.phone)} className="self-start">
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
      href: telHref(site.phone),
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
    {
      label: contact.franchise,
      hint: contact.franchiseHint,
      href: telHref(site.franchisePhone),
      value: formatPhone(site.franchisePhone),
      Icon: HandshakeIcon,
    },
  ];

  return (
    <main>
      <PageIntro heading={contact.title} text={contact.intro} locale={locale} />
      <CommonFullWidthWrapper className="pt-6 pb-8 md:pb-10 lg:pb-12">
        <ul className="grid gap-px overflow-hidden rounded-xs border border-border bg-border md:grid-cols-2">
          {channels.map(renderChannel)}
        </ul>
      </CommonFullWidthWrapper>
      <Section
        heading={contact.offices}
        isSubtle
        wrapperClassName="border-t border-border"
      >
        <div className="grid gap-px overflow-hidden rounded-xs border border-border bg-border">
          {shownOffices.map(renderOffice)}
        </div>
      </Section>
    </main>
  );
};

export default ContactPage;
