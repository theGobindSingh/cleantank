import styled from "@emotion/styled";
import type { ColorsObject } from "@kami-ui/types";
import { shouldForwardProp } from "@styles/global";
import { PropsWithChildren } from "react";

export interface ChipProps {
  className?: string;
  $backgroundColor?: keyof ColorsObject;
  $backgroundColorWeight?: `${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}00` | "1000";
  $textColor?: keyof ColorsObject;
  $textColorWeight?: `${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}00` | "1000";
}

type ChipWrapperProps = Omit<ChipProps, "text">;
const ChipWrapper = styled("div", { shouldForwardProp })<ChipWrapperProps>`
  display: inline-block;
  padding: 0.25em 0.75em;
  font-size: var(--fs-3xs, 0.75rem);
  background-color: ${({
    $backgroundColor = "primary",
    $backgroundColorWeight = "300",
  }) => {
    return `var(--color-${$backgroundColor}-${$backgroundColorWeight})`;
  }};
  color: ${({ $textColor = "accent", $textColorWeight = "1000" }) => {
    return `var(--color-${$textColor}-${$textColorWeight})`;
  }};
  font-weight: 500;
  font-family: var(--font-mono);
`;

const Chip = ({ children, ...props }: PropsWithChildren<ChipProps>) => {
  return <ChipWrapper {...props}>{children}</ChipWrapper>;
};

export default Chip;
