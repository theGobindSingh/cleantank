import { FullWidthWrapperProps } from "@kami-ui/react-components";
import { PropsWithChildren } from "react";

export interface HomeSectionLayoutProps extends PropsWithChildren {
  chip?: string | undefined;
  title: string;
  description?: string | undefined;
  bg?: string | undefined;
  element?: FullWidthWrapperProps["element"] | undefined;
  className?: string | undefined;
}
