import { ColorsObject } from "@kami-ui/types";
import { LinkProps } from "next/link";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
  RefAttributes,
} from "react";

export type ButtonVariant = "filled" | "outlined" | "glass" | "text";

export type ButtonColors = keyof Omit<
  ColorsObject,
  "white" | "black" | "text" | "background"
>;

export type TextColors = keyof Omit<
  ColorsObject,
  "white" | "black" | "background"
>;

type Weight = `${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}00` | "1000";

export type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};

type CustomLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps<any>
> &
  LinkProps<any> & {
    children?: ReactNode | undefined;
  } & RefAttributes<HTMLAnchorElement>;

export type ButtonAsLink = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> &
  CustomLinkProps & {
    href: CustomLinkProps["href"];
  };

export type ButtonProps =
  | (ButtonAsButton & ButtonBaseProps)
  | (ButtonAsLink & ButtonBaseProps);

export interface ButtonBaseProps<ColorWeight = Weight, FontWeight = Weight> {
  type?: "button" | "submit" | "reset";
  $variant?: ButtonVariant;
  $color?: ButtonColors;
  $size?: "sm" | "md" | "lg";
  $padding?: string;
  $borderRadius?: ("full" | "lg" | "md" | "sm" | "none") | (string & {});
  $colorWeight?: ColorWeight;
  $fontWeight?: FontWeight;
  $textColor?: TextColors;
  $textColorWeight?: ColorWeight;
  /** To be used only for glass variant */
  $withBorder?: boolean;
}
