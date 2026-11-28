import type { ButtonHTMLAttributes } from "react";

export type InteractionVariant = "filled" | "outlined" | "text";
export type InteractionSize = "sm" | "md" | "lg";
/** Accent is a marker; it fills only the value prop, price list and franchise apply buttons (docs/DESIGN.md, Buttons). */
export type ColorFamily =
  "primary" | "accent" | "grey" | "success" | "caution" | "info" | "error";

export interface InteractionProps {
  variant?: InteractionVariant | undefined;
  size?: InteractionSize | undefined;
  color?: ColorFamily | undefined;
}

export interface ButtonProps
  extends
    InteractionProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {}
