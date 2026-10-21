"use client";

import { iconButtonStyles } from "@components/button/styles";
import { applyTheme, getActiveTheme } from "@utils/theme";
import { MoonIcon, SunIcon } from "lucide-react";

interface ThemeToggleProps {
  label: string;
}

const ICON_PROPS = {
  "aria-hidden": true,
  strokeWidth: 1.85,
  strokeLinecap: "square",
  strokeLinejoin: "miter",
} as const;

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
      className={iconButtonStyles}
    >
      <SunIcon {...ICON_PROPS} className="hidden size-5 dark:block" />
      <MoonIcon {...ICON_PROPS} className="size-5 dark:hidden" />
    </button>
  );
};

export default ThemeToggle;
