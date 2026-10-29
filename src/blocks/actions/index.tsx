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
}

// `whatsapp` and `call` read the number from src/site.ts, so the CMS never repeats it.
const toHref = (href: string, locale: Locale): string => {
  if (href === "whatsapp") {
    return whatsappHref(
      site.whatsapp,
      getDictionary(locale).contact.whatsappText,
    );
  }
  if (href === "call") return telHref(site.phone);
  return href.startsWith("/") ? localePath(locale, href) : href;
};

/** A block's buttons: the first filled, the second outlined, full width on phones. */
const Actions = ({ actions, locale, className }: ActionsProps) => {
  if (!actions || actions.length === 0) return null;

  const renderAction = (action: Action, index: number) => {
    const href = toHref(action.href, locale);
    return (
      <Link
        key={action.id ?? index}
        href={href}
        variant={index === 0 ? "filled" : "outlined"}
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
