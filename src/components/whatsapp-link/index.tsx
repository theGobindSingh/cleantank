"use client";

import { site } from "@/site";
import Link from "@components/link";
import type { LinkProps } from "@components/link/types";
import type { Dictionary } from "@i18n";
import { whatsappHref } from "@utils/phone";
import { usePathname } from "next/navigation";

interface WhatsappLinkProps extends Omit<LinkProps, "href"> {
  labels: Pick<Dictionary["contact"], "whatsappText" | "pageWhatsappTexts">;
}

/**
 * A WhatsApp chat with the site's number for the layout's contact bar and
 * footer, which don't know the page: it reads the slug from the URL and uses
 * that page's own message (`contact.pageWhatsappTexts`), else the general one.
 */
const WhatsappLink = ({ labels, ...rest }: WhatsappLinkProps) => {
  const slug = usePathname().split("/").at(-1) ?? "";
  const texts: Partial<Record<string, string>> = labels.pageWhatsappTexts;
  const href = whatsappHref(site.whatsapp, texts[slug] ?? labels.whatsappText);
  return <Link href={href} {...rest} />;
};

export default WhatsappLink;
