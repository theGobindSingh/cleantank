import { tw } from "@utils/tw";
import type { CSSProperties } from "react";
import type { ColorFamily, InteractionSize, InteractionVariant } from "./types";

// Tailwind only generates classes it finds as literal strings, so these maps
// must stay literal (no template-string class names).
const variantClassName: Record<InteractionVariant, string> = {
  filled: "btn-filled",
  outlined: "btn-outlined",
  text: "btn-text",
};

const sizeClassName: Record<InteractionSize, string> = {
  sm: "btn-sm",
  md: "",
  lg: "btn-lg",
};

interface InteractionStyleOptions {
  variant: InteractionVariant;
  size: InteractionSize;
  className?: string | undefined;
}

export const interactionStyles = ({
  variant,
  size,
  className,
}: InteractionStyleOptions): string => {
  const sizeClass = variant !== "text" && sizeClassName[size];
  return tw("btn", variantClassName[variant], sizeClass, className);
};

/**
 * Primary keeps the defaults in button.css, which follow dark mode and navy
 * bands. Other families pass both sets of stops; button.css picks one by mode:
 * 700 / 600 / 800 with a white label on light grounds, 300 / 200 / 100 with a
 * navy label in dark mode and bands. Accent is the one exception: 600 / 700 / 800
 * with a white label everywhere.
 */
export const colorStyleVars = (color: ColorFamily): CSSProperties => {
  if (color === "primary") return {};
  if (color === "accent") {
    // owner's call: accent 600 fill, white label, same in every mode
    return {
      "--c-light": "var(--color-accent-600)",
      "--c-light-hover": "var(--color-accent-700)",
      "--c-light-active": "var(--color-accent-800)",
      "--c-light-on": "var(--color-white)",
      "--c-dark": "var(--color-accent-600)",
      "--c-dark-hover": "var(--color-accent-700)",
      "--c-dark-active": "var(--color-accent-800)",
      "--c-dark-on": "var(--color-white)",
    } as CSSProperties;
  }
  return {
    "--c-light": `var(--color-${color}-700)`,
    "--c-light-hover": `var(--color-${color}-600)`,
    "--c-light-active": `var(--color-${color}-800)`,
    "--c-light-on": "var(--color-white)",
    "--c-dark": `var(--color-${color}-300)`,
    "--c-dark-hover": `var(--color-${color}-200)`,
    "--c-dark-active": `var(--color-${color}-100)`,
    "--c-dark-on": "var(--color-white)",
  } as CSSProperties;
};

/**
 * A square icon-only control (menu, close, theme): 36 px to the eye, with a
 * transparent 4 px ring that keeps the hit area at 44 px.
 */
export const iconButtonStyles = tw`relative inline-flex size-9 cursor-pointer items-center justify-center rounded-sm border border-border-control text-fg before:absolute before:-inset-1 before:content-[''] hover:border-border-strong`;
