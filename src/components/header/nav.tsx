"use client";

import { iconButtonStyles } from "@components/button/styles";
import LanguageSwitcher from "@components/language-switcher";
import Link from "@components/link";
import { localePath, type Dictionary, type Locale } from "@i18n";
import { tw } from "@utils/tw";
import { useLenis } from "lenis/react";
import { useSelectedLayoutSegments } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import Solutions from "./solutions";
import { isOnPage, ITEM_TYPE, MARKED } from "./styles";

interface HeaderNavProps {
  locale: Locale;
  logo: ReactNode;
  labels: Dictionary["header"] & {
    language: string;
  };
}

const FOCUSABLE = "a[href], button, summary";
const PAGES = ["process", "about", "contact", "franchise"] as const;

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
 * burger button that stays above the panel. Solutions (solutions.tsx) opens
 * its own panel from `lg` up. The route is read from
 * layout segments, not usePathname, so prerendered pages reached through the
 * proxy's rewrite hydrate without a mismatch.
 */
const HeaderNav = ({ locale, logo, labels }: HeaderNavProps) => {
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

  const renderLink = (page: (typeof PAGES)[number]) => {
    const isPage = isOnPage(path, page);
    return (
      <li key={page}>
        <Link
          href={localePath(locale, `/${page}`)}
          aria-current={isPage ? "page" : undefined}
          onClick={closeMenu}
          className={tw(ITEM_TYPE, isPage ? MARKED : "no-underline")}
        >
          {labels.links[page]}
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
          <Solutions
            locale={locale}
            path={path}
            labels={labels}
            onNavigate={closeMenu}
          />
          {PAGES.map(renderLink)}
        </ul>
        <div className="flex items-center gap-3">
          <LanguageSwitcher
            locale={locale}
            path={path}
            label={labels.language}
            listClassName="left-0 lg:right-0 lg:left-auto"
          />
        </div>
      </div>
    </nav>
  );
};

export default HeaderNav;
