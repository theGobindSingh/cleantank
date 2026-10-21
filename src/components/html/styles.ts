import type { CSSProperties } from "react";
import type {
  ColorStop,
  ColorToken,
  CommonTextProps,
  TextDefaults,
} from "./types";

// Unset props return undefined, so the base styles in defaults.css apply
// (heading color, line height and tracking).
const resolveColor = (
  color?: ColorToken,
  stop?: ColorStop,
): string | undefined => {
  if (!color) return undefined;
  if (color === "white") return "var(--color-white)";
  return `var(--color-${color}-${stop ?? "400"})`;
};

export const resolveTextStyles = (
  props: Omit<CommonTextProps, "children" | "className">,
  defaults: TextDefaults,
): CSSProperties => {
  return {
    color: resolveColor(props.$color, props.$colorWeight),
    fontSize: `var(--fs-${props.$size ?? defaults.size})`,
    fontWeight: props.$weight ?? defaults.weight,
    margin: props.$margin ?? defaults.margin,
    lineHeight: props.$lineHeight,
    letterSpacing: props.$letterSpacing,
    ...props.style,
  };
};
