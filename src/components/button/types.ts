import type { ButtonHTMLAttributes } from "react";

export type InteractionVariant = "filled" | "outlined" | "text";
export type InteractionSize = "sm" | "md" | "lg";
/** Accent is a marker; its one button is the value proposition's (owner's call). */
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
