"use client";

import Link from "@components/link";
import {
  localeCookie,
  localeNames,
  localePath,
  locales,
  type Locale,
} from "@i18n";
import { tw } from "@utils/tw";
import { ChevronDownIcon, LanguagesIcon } from "lucide-react";
import { useEffect, useRef } from "react";

interface LanguageSwitcherProps {
  locale: Locale;
  /** The current page's path without a language prefix, e.g. "/" or "/amc". */
  path: string;
  label: string;
  /** Where the list opens, e.g. "right-0" to line it up with the button's right edge. */
  listClassName?: string | undefined;
}

const ICON_PROPS = {
  "aria-hidden": true,
  strokeWidth: 2,
  strokeLinecap: "square",
  strokeLinejoin: "miter",
} as const;

/**
 * A dropdown of EN / हिंदी / ਪੰਜਾਬੀ, each named in its own script. No flags.
 * Built on <details>, so it opens without JS; the effect only adds closing on
 * Escape and on a click elsewhere. Each link carries `?lang=`, so the proxy
 * remembers the choice and stops auto-detecting the language.
 * `native`: a client navigation would re-render the root layout (its `lang`
 * and theme script) in the browser.
 */
const LanguageSwitcher = ({
  locale,
  path,
  label,
  listClassName = "left-0",
}: LanguageSwitcherProps) => {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const closeFromOutside = () => {
    const handlePointerDown = (event: PointerEvent) => {
      const details = detailsRef.current;
      if (details?.open && !details.contains(event.target as Node)) {
        details.open = false;
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      const details = detailsRef.current;
      if (event.key !== "Escape" || !details?.open) return;
      details.open = false;
      details.querySelector("summary")?.focus();
    };
    const removeListeners = () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return removeListeners;
  };
  useEffect(closeFromOutside, []);

  const renderOption = (option: Locale) => {
    const isCurrent = option === locale;
    return (
      <li key={option}>
        <Link
          native
          href={`${localePath(option, path)}?${localeCookie}=${option}`}
          lang={option}
          hrefLang={option}
          aria-current={isCurrent ? "true" : undefined}
          className={tw(
            "flex min-h-11 items-center justify-start px-4 no-underline hover:underline",
            isCurrent ? "font-bold" : "font-normal",
          )}
        >
          {localeNames[option]}
        </Link>
      </li>
    );
  };

  return (
    <details ref={detailsRef} className="group relative">
      <summary
        aria-label={`${label}: ${localeNames[locale]}`}
        className="relative flex h-9 cursor-pointer list-none items-center gap-1.5 rounded-sm border border-border-control px-2 text-fg before:absolute before:-inset-1 before:content-[''] hover:border-border-strong [&::-webkit-details-marker]:hidden"
      >
        <LanguagesIcon {...ICON_PROPS} className="size-4" />
        <span lang={locale}>{localeNames[locale]}</span>
        <ChevronDownIcon
          {...ICON_PROPS}
          className="size-4 group-open:rotate-180"
        />
      </summary>
      {/* its own band, so it reads the same on a white page and in the header */}
      <ul
        data-surface="band"
        className={tw(
          "absolute top-full z-10 mt-2 flex min-w-36 flex-col rounded-sm border border-border py-1",
          listClassName,
        )}
      >
        {locales.map(renderOption)}
      </ul>
    </details>
  );
};

export default LanguageSwitcher;
