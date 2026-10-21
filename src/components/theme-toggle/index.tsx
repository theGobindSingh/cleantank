"use client";

import { applyTheme, getActiveTheme } from "@utils/theme";
import { MoonIcon, SunIcon } from "lucide-react";

interface ThemeToggleProps {
  label: string;
}

/** Both icons render; the `dark:` variant picks one, so no client state is needed. */
const ThemeToggle = ({ label }: ThemeToggleProps) => {
  const handleToggle = () => {
    applyTheme(getActiveTheme() === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={label}
      className="inline-flex size-10 cursor-pointer items-center justify-center rounded-sm border border-border-control text-fg transition-colors hover:bg-bg-subtle"
    >
      <SunIcon aria-hidden="true" className="hidden size-5 dark:block" />
      <MoonIcon aria-hidden="true" className="size-5 dark:hidden" />
    </button>
  );
};

export default ThemeToggle;
