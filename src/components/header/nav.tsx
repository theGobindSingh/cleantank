"use client";

import { iconButtonStyles } from "@components/button/styles";
import LanguageSwitcher from "@components/language-switcher";
import Link from "@components/link";
import ThemeToggle from "@components/theme-toggle";
import { localePath, type Dictionary, type Locale } from "@i18n";
import { tw } from "@utils/tw";
import { useLenis } from "lenis/react";
import { MenuIcon, XIcon } from "lucide-react";
import { useSelectedLayoutSegments } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";

interface HeaderNavProps {
  locale: Locale;
  logo: ReactNode;
  /** Keyed by route: `homes` links to /homes. */
  links: Dictionary["header"]["links"];
  labels: Dictionary["header"] & {
    language: string;
    theme: string;
  };
}

const ICON_PROPS = {
  className: "size-5",
  strokeWidth: 1.85,
  strokeLinecap: "square",
  strokeLinejoin: "miter",
  "aria-hidden": true,
} as const;

// Route groups like "(frontend)" and internal ones like "__PAGE__" aren't in the URL.
const isUrlSegment = (segment: string) => {
  return !segment.startsWith("(") && !segment.startsWith("_");
};

/**
 * The header's one nav. The link panel (.site-menu, header.css) is an inline
 * row from `xl` up and a popover sidenav below it. The route is read from
 * layout segments, not usePathname, so prerendered pages reached through the
 * proxy's rewrite hydrate without a mismatch.
 */
const HeaderNav = ({ locale, logo, links, labels }: HeaderNavProps) => {
  const path = `/${useSelectedLayoutSegments().filter(isUrlSegment).join("/")}`;
  const menuRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  // A client navigation keeps the header mounted, so close the sidenav by hand.
  const closeOnNavigate = () => {
    const menu = menuRef.current;
    if (menu?.matches(":popover-open")) menu.hidePopover();
  };
  useEffect(closeOnNavigate, [path]);

  // Lenis drives the page scroll, so pause it while the sidenav is open.
  const pauseScrollWhileOpen = () => {
    const menu = menuRef.current;
    if (!menu) return;
    const handleToggle = (event: ToggleEvent) => {
      if (event.newState === "open") lenis?.stop();
      else lenis?.start();
    };
    const removeListener = () => {
      menu.removeEventListener("toggle", handleToggle);
    };
    menu.addEventListener("toggle", handleToggle);
    return removeListener;
  };
  useEffect(pauseScrollWhileOpen, [lenis]);

  const renderLink = ([key, label]: [string, string]) => {
    const route = `/${key}`;
    const isCurrent = path === route || path.startsWith(`${route}/`);
    return (
      <li key={key}>
        <Link
          href={localePath(locale, route)}
          aria-current={isCurrent ? "page" : undefined}
          className={tw(
            "flex min-h-12 items-center justify-start text-[0.875rem] font-bold tracking-[0.06em] uppercase underline-offset-8",
            isCurrent
              ? "decoration-marker decoration-[3px] hover:decoration-[3px]"
              : "no-underline",
          )}
        >
          {label}
        </Link>
      </li>
    );
  };

  return (
    <nav
      aria-label={labels.nav}
      className="flex min-h-16 items-center justify-between gap-4 py-2"
    >
      {logo}
      <button
        type="button"
        popoverTarget="site-menu"
        aria-label={labels.menu}
        className={tw(iconButtonStyles, "xl:hidden")}
      >
        <MenuIcon {...ICON_PROPS} />
      </button>
      <div
        ref={menuRef}
        id="site-menu"
        popover="auto"
        data-lenis-prevent
        className="site-menu"
      >
        <button
          type="button"
          popoverTarget="site-menu"
          popoverTargetAction="hide"
          aria-label={labels.close}
          className={tw(iconButtonStyles, "self-end xl:hidden")}
        >
          <XIcon {...ICON_PROPS} />
        </button>
        <ul className="flex flex-col xl:flex-row xl:gap-6">
          {Object.entries(links).map(renderLink)}
        </ul>
        <div className="flex items-center gap-3">
          <LanguageSwitcher
            locale={locale}
            path={path}
            label={labels.language}
            listClassName="left-0 xl:right-0 xl:left-auto"
          />
          <ThemeToggle label={labels.theme} />
        </div>
      </div>
    </nav>
  );
};

export default HeaderNav;
