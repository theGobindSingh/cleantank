"use client";

import { iconProps } from "@components/icon";
import Link from "@components/link";
import { localePath, type Dictionary, type Locale } from "@i18n";
import { tw } from "@utils/tw";
import { ChevronDownIcon } from "lucide-react";
import { useEffect, useRef, useState, type FocusEvent } from "react";
import { isOnPage, ITEM_TYPE, MARKED } from "./styles";

const SOLUTIONS = ["homes", "organisations"] as const;

interface SolutionsProps {
  locale: Locale;
  /** The current path without a language prefix. */
  path: string;
  labels: Dictionary["header"];
  /** Called when a link is followed, to close the sidenav. */
  onNavigate: () => void;
}

/**
 * The Solutions item: Homes and Organisations. From `lg` up a disclosure
 * (WAI-ARIA APG Disclosure Navigation Menu): a button toggles the list,
 * Escape, a click outside, tabbing out or a route change close it. Below `lg`
 * the button is hidden and the list sits open under a plain label
 * (.site-solutions, header.css). The links are always in the HTML.
 */
const Solutions = ({ locale, path, labels, onNavigate }: SolutionsProps) => {
  // The path it was opened on, so a route change closes it.
  const [openPath, setOpenPath] = useState<string | null>(null);
  const isOpen = openPath === path;
  const itemRef = useRef<HTMLLIElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isOnSolution = (page: string) => {
    return isOnPage(path, page);
  };

  const toggle = () => {
    setOpenPath(isOpen ? null : path);
  };
  const close = () => {
    setOpenPath(null);
  };
  const followLink = () => {
    close();
    onNavigate();
  };
  // Tabbing out closes it; a click elsewhere moves no focus and is left to pointerdown.
  const closeOnFocusOut = (event: FocusEvent<HTMLLIElement>) => {
    const next = event.relatedTarget;
    if (next && !event.currentTarget.contains(next)) close();
  };

  const closeFromOutside = () => {
    if (!isOpen) return;
    const handlePointerDown = (event: PointerEvent) => {
      if (!itemRef.current?.contains(event.target as Node)) close();
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      close();
      buttonRef.current?.focus();
    };
    const removeListeners = () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return removeListeners;
  };
  useEffect(closeFromOutside, [isOpen]);

  const renderSolution = (page: (typeof SOLUTIONS)[number]) => {
    const isCurrent = isOnSolution(page);
    return (
      <li key={page}>
        <Link
          href={localePath(locale, `/${page}`)}
          aria-current={isCurrent ? "page" : undefined}
          onClick={followLink}
          className="group flex min-h-12 flex-col items-start justify-center gap-0.5 no-underline lg:px-4 lg:py-2"
        >
          <span
            className={tw(
              "text-[0.875rem] font-bold tracking-[0.06em] uppercase underline-offset-8",
              isCurrent ? MARKED : "group-hover:underline",
            )}
          >
            {labels.links[page]}
          </span>
          <span className="text-[0.875rem] text-fg-muted max-lg:hidden">
            {labels.hints[page]}
          </span>
        </Link>
      </li>
    );
  };

  return (
    <li ref={itemRef} onBlur={closeOnFocusOut} className="relative">
      {/* the sidenav's group label; from lg up the button takes over */}
      <span
        id="site-solutions-label"
        className={tw(ITEM_TYPE, "text-fg-muted lg:hidden")}
      >
        {labels.solutions}
      </span>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls="site-solutions"
        onClick={toggle}
        className={tw(
          ITEM_TYPE,
          "group hidden cursor-pointer gap-1 lg:flex",
          SOLUTIONS.some(isOnSolution) && MARKED,
        )}
      >
        {labels.solutions}
        <ChevronDownIcon
          {...iconProps}
          strokeWidth={2}
          className="size-4 group-aria-expanded:rotate-180"
        />
      </button>
      <ul
        id="site-solutions"
        aria-labelledby="site-solutions-label"
        data-open={isOpen || undefined}
        data-surface="band"
        className="site-solutions"
      >
        {SOLUTIONS.map(renderSolution)}
      </ul>
    </li>
  );
};

export default Solutions;
