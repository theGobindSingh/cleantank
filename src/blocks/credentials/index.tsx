import type { CredentialsBlock } from "@/payload-types";
import { site } from "@/site";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import { H2, P } from "@components/html";
import Link from "@components/link";
import { getDictionary, type Locale } from "@i18n";
import type { ReactNode } from "react";
import DocumentDialog from "./document-dialog";

interface CredentialsProps extends CredentialsBlock {
  locale: Locale;
}

interface Row {
  label: string;
  value: string;
  // Set when the value stays English on every language: names, numbers.
  isEnglish?: boolean;
  extra?: ReactNode;
}

/**
 * A stone section with a spec sheet of registrations: a strong rule on top,
 * then one ruled row per entry, the mono label beside its value from `md` up.
 * The facts come from src/site.ts, shared with the footer; only the heading
 * and line are in Payload.
 */
const Credentials = ({ heading, text, locale }: CredentialsProps) => {
  const { credentials: labels } = getDictionary(locale);
  const { iso } = site;

  const validTo = new Intl.DateTimeFormat(`${locale}-IN`, {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(iso.validTo));
  const isoExtra = (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
      <Link href={iso.verifyUrl}>
        {labels.verify.replace("{host}", new URL(iso.verifyUrl).host)}
      </Link>
      {iso.certificate && (
        <DocumentDialog
          {...iso.certificate}
          alt={labels.certificateAlt
            .replace("{standard}", iso.standard)
            .replace("{holder}", site.legalName)}
          openLabel={labels.view}
          closeLabel={labels.close}
        />
      )}
    </div>
  );

  const rows: Row[] = [
    {
      label: labels.firm,
      value: labels.firmValue.replace("{name}", site.legalName),
    },
    {
      label: labels.iso,
      value: labels.isoValue
        .replace("{standard}", iso.standard)
        .replace("{issuer}", iso.issuer)
        .replace("{number}", iso.number)
        .replace("{validTo}", validTo),
      extra: isoExtra,
    },
    { label: "GSTIN", value: site.gstin, isEnglish: true },
    { label: labels.msme, value: site.udyam, isEnglish: true },
    { label: labels.gem, value: labels.gemValue },
    {
      label: labels.other,
      value: site.otherRegistrations,
      isEnglish: true,
    },
  ];

  const renderRow = (row: Row) => {
    return (
      <div
        key={row.label}
        className="grid gap-2 border-b border-border py-6 md:grid-cols-12 md:gap-6"
      >
        <dt className="font-mono text-(length:--fs-caption) font-medium tracking-widest text-fg-muted uppercase md:col-span-4 md:pt-1">
          {row.label}
        </dt>
        <dd className="flex flex-col items-start gap-3 md:col-span-8">
          <span
            lang={row.isEnglish ? "en" : undefined}
            className="font-semibold text-pretty tabular-nums"
          >
            {row.value}
          </span>
          {row.extra}
        </dd>
      </div>
    );
  };

  return (
    <CommonFullWidthWrapper
      wrapperClassName="bg-bg-subtle"
      className="flex flex-col gap-10 py-16 md:gap-12 md:py-20 lg:py-24"
    >
      <div className="flex flex-col gap-4">
        <H2 $margin="0">{heading}</H2>
        {text && (
          <P className="max-w-[60ch] text-pretty text-fg-muted">{text}</P>
        )}
      </div>
      <dl className="max-w-5xl border-t-2 border-border-strong">
        {rows.map(renderRow)}
      </dl>
    </CommonFullWidthWrapper>
  );
};

export default Credentials;
