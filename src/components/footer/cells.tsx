import { site } from "@/site";
import { H2, P } from "@components/html";
import Link from "@components/link";
import WhatsappLink from "@components/whatsapp-link";
import type { Dictionary } from "@i18n";
import { formatPhone, telHref } from "@utils/phone";
import { tw } from "@utils/tw";
import type { ReactNode } from "react";

type Office = (typeof site.offices)[number];

/** A ruled cell of the footer grid. */
export const CELL = "flex flex-col gap-4 bg-(--color-band) p-6 lg:p-8";
export const LIST_LINK =
  "text-left text-(length:--fs-small) no-underline hover:underline";

export const CellHeading = ({ children }: { children: ReactNode }) => {
  return (
    <H2
      $size="ref"
      $margin="0"
      className="font-mono tracking-[0.08em] text-fg-muted uppercase"
    >
      {children}
    </H2>
  );
};

export const OfficeCell = ({ office }: { office: Office }) => {
  return (
    <address
      lang="en"
      className={tw(CELL, "not-italic md:col-span-2 lg:col-span-12")}
    >
      <CellHeading>{office.label}</CellHeading>
      <P $size="small">{office.address}</P>
      <Link href={telHref(office.phone)} className={LIST_LINK}>
        {formatPhone(office.phone)}
      </Link>
    </address>
  );
};

const Row = ({ term, children }: { term: string; children: ReactNode }) => {
  return (
    <div>
      <dt className="text-fg-muted">{term}</dt>
      <dd>{children}</dd>
    </div>
  );
};

/** Call, WhatsApp and email from src/site.ts. */
export const ContactCell = ({ labels }: { labels: Dictionary["contact"] }) => {
  return (
    <address className={tw(CELL, "not-italic lg:col-span-3")}>
      <CellHeading>{labels.title}</CellHeading>
      <dl className="flex flex-col gap-3 text-(length:--fs-small)">
        <Row term={labels.call}>
          <Link href={telHref(site.phone)} className={LIST_LINK}>
            {formatPhone(site.phone)}
          </Link>
        </Row>
        <Row term={labels.whatsapp}>
          <WhatsappLink labels={labels} className={LIST_LINK}>
            {formatPhone(site.whatsapp)}
          </WhatsappLink>
        </Row>
        <Row term={labels.email}>
          <Link href={`mailto:${site.email}`} className={LIST_LINK}>
            {site.email}
          </Link>
        </Row>
      </dl>
    </address>
  );
};
