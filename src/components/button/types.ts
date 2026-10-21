import type { ButtonHTMLAttributes } from "react";

export type InteractionVariant = "filled" | "outlined" | "text";
export type InteractionSize = "sm" | "md" | "lg";
/** Accent is a marker only, never a button, so it isn't offered here. */
export type ColorFamily =
  "primary" | "grey" | "success" | "caution" | "info" | "error";

export interface InteractionProps {
  variant?: InteractionVariant | undefined;
  size?: InteractionSize | undefined;
  color?: ColorFamily | undefined;
}

export interface ButtonProps
  extends
    InteractionProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {}
