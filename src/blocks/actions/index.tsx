import { site } from "@/site";
import Link from "@components/link";
import { getDictionary, localePath, type Locale } from "@i18n";
import { telHref, whatsappHref } from "@utils/phone";
import { tw } from "@utils/tw";

export interface Action {
  id?: string | null;
  label: string;
  href: string;
}

interface ActionsProps {
  actions: Action[] | null | undefined;
  locale: Locale;
  className?: string;
  /** Fills the first button in accent; only the price list uses it (user's call, 4 Nov 2026). */
  isAccent?: boolean;
  /** Replaces the dictionary's WhatsApp message; the price calculator sends its figures. */
  whatsappText?: string | undefined;
}

// `whatsapp` and `call` read the number from src/site.ts, so the CMS never repeats it.
const toHref = (href: string, locale: Locale, whatsappText?: string) => {
  if (href === "whatsapp") {
    return whatsappHref(
      site.whatsapp,
      whatsappText ?? getDictionary(locale).contact.whatsappText,
    );
  }
  if (href === "call") return telHref(site.phone);
  return href.startsWith("/") ? localePath(locale, href) : href;
};

/** A block's buttons: the first filled, the second outlined, full width on phones. */
const Actions = ({
  actions,
  locale,
  className,
  isAccent,
  whatsappText,
}: ActionsProps) => {
  if (!actions || actions.length === 0) return null;

  const renderAction = (action: Action, index: number) => {
    const href = toHref(action.href, locale, whatsappText);
    return (
      <Link
        key={action.id ?? index}
        href={href}
        variant={index === 0 ? "filled" : "outlined"}
        color={index === 0 && isAccent ? "accent" : "primary"}
        size="md"
        className="w-full justify-center md:w-auto"
      >
        {action.label}
      </Link>
    );
  };

  return (
    <div className={tw("flex flex-wrap gap-4", className)}>
      {actions.map(renderAction)}
    </div>
  );
};

export default Actions;
