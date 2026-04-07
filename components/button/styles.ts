import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { shouldForwardProp } from "@styles/global";
import Link from "next/link";
import { ButtonBaseProps } from "./types";

type VariantFnProps = Omit<ButtonBaseProps, "$variant">;

const filledStyles = ({
  $color = "primary",
  $colorWeight = "300",
  $textColor = "accent",
  $textColorWeight = "1000",
}: VariantFnProps) => {
  return css`
    background-color: var(--color-${$color}-${$colorWeight});
    color: var(--color-${$textColor}-${$textColorWeight});
    border: 2px solid var(--color-${$color}-${$colorWeight});
  `;
};

const outlinedStyles = ({
  $color = "primary",
  $colorWeight = "300",
  $textColor,
  $textColorWeight,
}: VariantFnProps) => {
  return css`
    background-color: transparent;
    color: var(
      --color-${$textColor ?? $color}-${$textColorWeight ?? $colorWeight}
    );
    border: 2px solid var(--color-${$color}-${$colorWeight});
  `;
};

const glassStyles = ({
  $color = "primary",
  $colorWeight = "300",
  $textColor = "accent",
  $textColorWeight = "100",
  $withBorder = false,
}: VariantFnProps) => {
  return css`
    background-color: rgba(var(--color-${$color}-${$colorWeight}), 0.15);
    color: var(
      --color-${$textColor ?? $color}-${$textColorWeight ?? $colorWeight}
    );
    border: 2px solid rgba(var(--color-${$color}-${$colorWeight}), 0.3);
    backdrop-filter: blur(10px);
    ${$withBorder &&
    css`
      border: 2px solid var(--color-${$color}-${$colorWeight});
    `}
  `;
};

const textStyles = ({
  $textColor = "text",
  $textColorWeight = "900",
}: VariantFnProps) => {
  return css`
    background-color: transparent;
    border: none;
    padding: 0;
    display: inline;
    color: var(--color-${$textColor}-${$textColorWeight}, inherit);
  `;
};

const sizeStyles = ({ $size = "md" }: ButtonBaseProps) => {
  switch ($size) {
    case "sm":
      return css`
        font-size: var(--fs-3xs, 0.75rem);
        min-height: 2rem;
      `;
    case "md":
      return css`
        font-size: var(--fs-2xs, 0.875rem);
        min-height: 2.5rem;
      `;
    case "lg":
      return css`
        font-size: var(--fs-s, 1rem);
        min-height: 3rem;
      `;
  }
};

const variantStyles = ({ $variant = "filled", ...props }: ButtonBaseProps) => {
  switch ($variant) {
    case "glass":
      return glassStyles(props);
    case "filled":
      return filledStyles(props);
    case "outlined":
      return outlinedStyles(props);
    case "text":
      return textStyles(props);
  }
};

const borderRadiusStyles = ({ $borderRadius = "none" }: ButtonBaseProps) => {
  switch ($borderRadius) {
    case "full":
      return css`
        border-radius: var(--br-full, 999vw);
      `;
    case "sm":
      return css`
        border-radius: var(--space-3, 8px);
      `;
    case "md":
      return css`
        border-radius: var(--space-4, 12px);
      `;
    case "lg":
      return css`
        border-radius: var(--space-5, 16px);
      `;
    case "none":
      return css`
        border-radius: 0;
      `;
    default:
      return css`
        border-radius: ${$borderRadius};
      `;
  }
};

const mainStyles = css`
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 0px 0px rgba(0, 0, 0, 0);

  &[data-down] {
    scale: 0.95;
    box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.5);
  }

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.75;
  }
`;

export const ButtonWrapper = styled("button", { shouldForwardProp })`
  ${mainStyles}
  padding: ${({ $padding = "0.5em 1em" }) => {
    return $padding;
  }};
  font-weight: ${({ $fontWeight = "500" }) => {
    return $fontWeight;
  }};
  ${borderRadiusStyles}
  ${sizeStyles}
  ${variantStyles};
`;

export const LinkButtonWrapper = styled(Link, { shouldForwardProp })`
  ${mainStyles}
  padding: ${({ $padding = "0.5em 1em" }) => {
    return $padding;
  }};
  font-weight: ${({ $fontWeight = "500" }) => {
    return $fontWeight;
  }};
  ${borderRadiusStyles}
  ${sizeStyles}
  ${variantStyles};
  text-decoration: none;
`;
