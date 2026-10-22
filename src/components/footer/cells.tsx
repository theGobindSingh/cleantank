import { site } from "@/site";
import { H2, P } from "@components/html";
import Link from "@components/link";
import type { Dictionary } from "@i18n";
import { formatPhone } from "@utils/phone";
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
      <Link href={`tel:+${office.phone}`} className={LIST_LINK}>
        {formatPhone(office.phone)}
      </Link>
    </address>
  );
};

/** Call, WhatsApp and email from src/site.ts. */
export const ContactCell = ({ labels }: { labels: Dictionary["contact"] }) => {
  const rows: [string, string, string][] = [
    [labels.call, `tel:+${site.phone}`, formatPhone(site.phone)],
    [
      labels.whatsapp,
      `https://wa.me/${site.whatsapp}`,
      formatPhone(site.whatsapp),
    ],
    [labels.email, `mailto:${site.email}`, site.email],
  ];

  const renderRow = ([term, href, value]: [string, string, string]) => {
    return (
      <div key={term}>
        <dt className="text-fg-muted">{term}</dt>
        <dd>
          <Link href={href} className={LIST_LINK}>
            {value}
          </Link>
        </dd>
      </div>
    );
  };

  return (
    <address className={tw(CELL, "not-italic lg:col-span-3")}>
      <CellHeading>{labels.title}</CellHeading>
      <dl className="flex flex-col gap-3 text-(length:--fs-small)">
        {rows.map(renderRow)}
      </dl>
    </address>
  );
};
