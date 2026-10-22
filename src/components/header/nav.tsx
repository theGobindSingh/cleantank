"use client";

import { iconButtonStyles } from "@components/button/styles";
import LanguageSwitcher from "@components/language-switcher";
import Link from "@components/link";
import ThemeToggle from "@components/theme-toggle";
import { localePath, type Dictionary, type Locale } from "@i18n";
import { tw } from "@utils/tw";
import { useLenis } from "lenis/react";
import { useSelectedLayoutSegments } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";

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

const FOCUSABLE = "a[href], button, summary";

// Controls inside a closed language dropdown can't take focus.
const isShown = (element: HTMLElement | null): element is HTMLElement => {
  return element?.checkVisibility() ?? false;
};

// Route groups like "(frontend)" and internal ones like "__PAGE__" aren't in the URL.
const isUrlSegment = (segment: string) => {
  return !segment.startsWith("(") && !segment.startsWith("_");
};

/**
 * The header's one nav. The link panel (.site-menu, header.css) is an inline
 * row from `lg` up and a sidenav below it, opened and closed by one animated
 * burger button that stays above the panel. The route is read from
 * layout segments, not usePathname, so prerendered pages reached through the
 * proxy's rewrite hydrate without a mismatch.
 */
const HeaderNav = ({ locale, logo, links, labels }: HeaderNavProps) => {
  const path = `/${useSelectedLayoutSegments().filter(isUrlSegment).join("/")}`;
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Escape closes and Tab cycles between the burger and the panel's controls,
  // as in a modal. Lenis drives the page scroll, so pause it while open.
  const holdWhileOpen = () => {
    if (!isOpen) return;
    const keepFocusInside = (event: KeyboardEvent) => {
      const controls = [
        buttonRef.current,
        ...(menuRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? []),
      ].filter(isShown);
      const first = controls.at(0);
      const last = controls.at(-1);
      const edge = event.shiftKey ? first : last;
      if (document.activeElement !== edge) return;
      event.preventDefault();
      (event.shiftKey ? last : first)?.focus();
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab") keepFocusInside(event);
      if (event.key !== "Escape") return;
      setIsOpen(false);
      buttonRef.current?.focus();
    };
    const release = () => {
      document.removeEventListener("keydown", handleKeyDown);
      lenis?.start();
    };
    document.addEventListener("keydown", handleKeyDown);
    lenis?.stop();
    return release;
  };
  useEffect(holdWhileOpen, [isOpen, lenis]);

  const renderLink = ([key, label]: [string, string]) => {
    const route = `/${key}`;
    const isCurrent = path === route || path.startsWith(`${route}/`);
    return (
      <li key={key}>
        <Link
          href={localePath(locale, route)}
          aria-current={isCurrent ? "page" : undefined}
          onClick={closeMenu}
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
      className="flex h-16 items-center justify-between gap-4"
    >
      {logo}
      <button
        ref={buttonRef}
        type="button"
        aria-label={labels.menu}
        aria-expanded={isOpen}
        aria-controls="site-menu"
        onClick={toggleMenu}
        className={tw(iconButtonStyles, "relative z-2 lg:hidden")}
      >
        <svg
          viewBox="35 35 30 30"
          aria-hidden="true"
          className="size-5 overflow-visible burger"
        >
          <path d="M0 40h62c13 0 6 28-4 18L35 35" />
          <path d="M0 50h70" />
          <path d="M0 60h62c13 0 6-28-4-18L35 65" />
        </svg>
      </button>
      <div
        aria-hidden="true"
        data-open={isOpen || undefined}
        onClick={closeMenu}
        className="site-menu-scrim"
      />
      <div
        ref={menuRef}
        id="site-menu"
        data-open={isOpen || undefined}
        data-lenis-prevent
        className="site-menu"
      >
        <ul className="flex flex-col lg:flex-row lg:gap-5">
          {Object.entries(links).map(renderLink)}
        </ul>
        <div className="flex items-center gap-3">
          <LanguageSwitcher
            locale={locale}
            path={path}
            label={labels.language}
            listClassName="left-0 lg:right-0 lg:left-auto"
          />
          <ThemeToggle label={labels.theme} />
        </div>
      </div>
    </nav>
  );
};

export default HeaderNav;
