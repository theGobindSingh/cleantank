import styled from "@emotion/styled";

type ColorType =
  | "primary"
  | "secondary"
  | "accent"
  | "neutral"
  | "success"
  | "warning"
  | "info"
  | "error"
  | "black"
  | "white"
  | `var(--${string})`;
type Weight = `${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}00` | "1000";

const fontSizes = {
  "4xs": "var(--fs-4xs)",
  "3xs": "var(--fs-3xs)",
  "2xs": "var(--fs-2xs)",
  "1xs": "var(--fs-1xs)",
  s: "var(--fs-s)",
  m: "var(--fs-m)",
  l: "var(--fs-l)",
  "1xl": "var(--fs-1xl)",
  "2xl": "var(--fs-2xl)",
  "3xl": "var(--fs-3xl)",
  "4xl": "var(--fs-4xl)",
};

export interface CommonTextProps {
  $size?: keyof typeof fontSizes;
  $margin?: string;
  $weight?: Weight;
  $lineHeight?: string;
  $color?: ColorType;
  $colorAlpha?: number;
  $colorWeight?: Weight;
  $letterSpacing?: string;
}

const getColor = ({
  $color,
  $colorWeight,
  $colorAlpha,
}: Pick<CommonTextProps, "$color" | "$colorWeight" | "$colorAlpha">) => {
  if (!$color) return "inherit";
  if ($color.includes("var")) {
    return $color;
  }
  if ($color === "black" || $color === "white") {
    return `var(--color-${$color})`;
  }
  if ($colorAlpha) {
    return `rgba(var(--color-${$color}-${$colorWeight ?? "400"}-base), ${$colorAlpha})`;
  }
  return `var(--color-${$color}-${$colorWeight ?? "400"})`;
};

const letterSpacingFn = ({
  $letterSpacing,
}: Pick<CommonTextProps, "$letterSpacing">) => {
  return $letterSpacing ?? "normal";
};

const lineHeightFn = ({
  $lineHeight,
}: Pick<CommonTextProps, "$lineHeight">) => {
  return $lineHeight ?? "normal";
};

const marginFn = ({ $margin }: Pick<CommonTextProps, "$margin">) => {
  return $margin ?? "0";
};

export const H1 = styled.h1<CommonTextProps>`
  font-size: ${({ $size }) => {
    return fontSizes[$size ?? "4xl"];
  }};
  margin: ${({ $margin }) => {
    return $margin ?? "0 0 0.75em 0";
  }};
  font-weight: ${({ $weight }) => {
    return $weight ?? "700";
  }};
  line-height: ${lineHeightFn};
  letter-spacing: ${letterSpacingFn};
  color: ${getColor};
`;

export const H2 = styled.h2<CommonTextProps>`
  font-size: ${({ $size }) => {
    return fontSizes[$size ?? "1xl"];
  }};
  margin: ${({ $margin }) => {
    return $margin ?? "0 0 0.5em 0";
  }};
  font-weight: ${({ $weight }) => {
    return $weight ?? "700";
  }};
  line-height: ${lineHeightFn};
  letter-spacing: ${letterSpacingFn};
  color: ${getColor};
`;

export const H3 = styled.h3<CommonTextProps>`
  font-size: ${({ $size }) => {
    return fontSizes[$size ?? "m"];
  }};
  margin: ${({ $margin }) => {
    return $margin ?? "0 0 0.25em 0";
  }};
  font-weight: ${({ $weight }) => {
    return $weight ?? "500";
  }};
  line-height: ${lineHeightFn};
  letter-spacing: ${letterSpacingFn};
  color: ${getColor};
`;

export const P = styled.p<CommonTextProps>`
  font-size: ${({ $size }) => {
    return fontSizes[$size ?? "2xs"];
  }};
  font-weight: ${({ $weight }) => {
    return $weight ?? "400";
  }};
  margin: ${marginFn};
  line-height: ${lineHeightFn};
  letter-spacing: ${letterSpacingFn};
  color: ${getColor};
`;

export const Span = styled.span<CommonTextProps>`
  font-size: ${({ $size }) => {
    return fontSizes[$size ?? "1xs"];
  }};
  font-weight: ${({ $weight }) => {
    return $weight ?? "400";
  }};
  margin: ${marginFn};
  line-height: ${lineHeightFn};
  letter-spacing: ${letterSpacingFn};
  color: ${getColor};
`;

export const Hr = styled.hr<{ $margin?: string }>`
  border: 1px solid var(--color-gray-100);
  width: 100%;
  margin: ${marginFn};
`;
