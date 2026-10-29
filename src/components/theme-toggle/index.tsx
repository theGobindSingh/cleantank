"use client";

import { iconButtonStyles } from "@components/button/styles";
import { iconProps } from "@components/icon";
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
      className={iconButtonStyles}
    >
      <SunIcon {...iconProps} className="hidden size-5 dark:block" />
      <MoonIcon {...iconProps} className="size-5 dark:hidden" />
    </button>
  );
};

export default ThemeToggle;
