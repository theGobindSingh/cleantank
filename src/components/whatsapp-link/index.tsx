"use client";

import { site } from "@/site";
import Link from "@components/link";
import type { LinkProps } from "@components/link/types";
import type { Dictionary } from "@i18n";
import { whatsappHref } from "@utils/phone";
import { usePathname } from "next/navigation";

interface WhatsappLinkProps extends Omit<LinkProps, "href"> {
  labels: Pick<Dictionary["contact"], "whatsappText" | "pageWhatsappTexts">;
  /** Replaces the page's message; the price calculator sends its figures. */
  text?: string | undefined;
}

/**
 * A WhatsApp chat with the site's number. The message is `text`, else the
 * page's own (`contact.pageWhatsappTexts`, keyed by the URL's last segment,
 * which the English rewrite and a trailing slash leave unchanged), else the
 * general one.
 */
const WhatsappLink = ({ labels, text, ...rest }: WhatsappLinkProps) => {
  const slug = usePathname().split("/").findLast(Boolean) ?? "";
  const texts: Partial<Record<string, string>> = labels.pageWhatsappTexts;
  // hasOwn, so a path like /constructor doesn't read the prototype.
  const pageText = Object.hasOwn(texts, slug) ? texts[slug] : undefined;
  const href = whatsappHref(
    site.whatsapp,
    text ?? pageText ?? labels.whatsappText,
  );
  return <Link href={href} {...rest} />;
};

export default WhatsappLink;
