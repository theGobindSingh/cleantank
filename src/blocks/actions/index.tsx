import { site } from "@/site";
import { ACCENT_FILL } from "@components/button/styles";
import Link from "@components/link";
import WhatsappLink from "@components/whatsapp-link";
import { getDictionary, localePath, type Locale } from "@i18n";
import { telHref } from "@utils/phone";
import { tw } from "@utils/tw";
import type { CSSProperties } from "react";

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
  /** With `isAccent`: hover and press go darker (700, 800) instead of to accent 500, which fails with a white label. Only the franchise apply button uses it (James's call, 28 Nov 2026, CT-467). Applies only while `ACCENT_FILL` is `dark-coral`; the coral fill has its own darker states (CT-478). */
  isDarkHover?: boolean;
  /** Replaces the dictionary's WhatsApp message; the price calculator sends its figures. */
  whatsappText?: string | undefined;
}

const DARK_HOVER = {
  "--c-light-hover": "var(--color-accent-700)",
  "--c-light-active": "var(--color-accent-800)",
  "--c-dark-hover": "var(--color-accent-700)",
  "--c-dark-active": "var(--color-accent-800)",
} as CSSProperties;

// `whatsapp` and `call` read the number from src/site.ts, so the CMS never repeats it.
const toHref = (href: string, locale: Locale) => {
  if (href === "call") return telHref(site.phone);
  return href.startsWith("/") ? localePath(locale, href) : href;
};

/** A block's actions: the first filled, the second outlined, the third a text link; buttons go full width on phones. */
const Actions = ({
  actions,
  locale,
  className,
  isAccent,
  isDarkHover,
  whatsappText,
}: ActionsProps) => {
  if (!actions || actions.length === 0) return null;

  const variants = ["filled", "outlined", "text"] as const;

  const renderAction = (action: Action, index: number) => {
    const shared = {
      variant: variants[index] ?? "text",
      color: index === 0 && isAccent ? "accent" : "primary",
      size: "md",
      className: "w-full justify-center md:w-auto",
      style:
        index === 0 && isAccent && isDarkHover && ACCENT_FILL === "dark-coral"
          ? DARK_HOVER
          : undefined,
      children: action.label,
    } as const;
    if (action.href === "whatsapp") {
      return (
        <WhatsappLink
          key={action.id ?? index}
          labels={getDictionary(locale).contact}
          text={whatsappText}
          {...shared}
        />
      );
    }
    return (
      <Link
        key={action.id ?? index}
        href={toHref(action.href, locale)}
        {...shared}
      />
    );
  };

  return (
    <div className={tw("flex flex-wrap gap-4", className)}>
      {actions.map(renderAction)}
    </div>
  );
};

export default Actions;
