import { FullWidthWrapperProps } from "@kami-ui/react-components";
import { PropsWithChildren } from "react";

export interface StandardSectionLayoutProps extends PropsWithChildren {
  chip?: string | undefined;
  title: string;
  description?: string | undefined;
  headingLevel?: "h1" | "h2" | undefined;
  bg?: string | undefined;
  element?: FullWidthWrapperProps["element"] | undefined;
  className?: string | undefined;
}
