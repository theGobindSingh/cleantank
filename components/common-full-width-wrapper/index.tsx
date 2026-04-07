import {
  containerSize,
  containerStyles,
  wrapperStyles,
} from "@components/common-full-width-wrapper/styles";
import { Interpolation, Theme } from "@emotion/react";
import {
  FullWidthWrapper,
  FullWidthWrapperProps,
} from "@kami-ui/react-components";
import { forwardRef, PropsWithChildren, Ref, useMemo } from "react";

interface CommonFullWidthWrapperProps {
  className?: string;
  element?: FullWidthWrapperProps["element"];
  wrapperCss?: Interpolation<Theme>;
  wrapperProps?: FullWidthWrapperProps["wrapperProps"];
  bg?: string;
  secondContainer?: FullWidthWrapperProps["secondContainer"];
}

const CommonFullWidthWrapperWithoutRef = (
  {
    className,
    children,
    element = "section",
    wrapperCss,
    wrapperProps,
    bg,
    secondContainer,
  }: PropsWithChildren<CommonFullWidthWrapperProps>,
  ref: Ref<HTMLElement>,
) => {
  const mergedWrapperCss = useMemo((): any => {
    return [wrapperStyles(bg), wrapperCss];
  }, [bg, wrapperCss]);
  return (
    <FullWidthWrapper
      wrapperProps={wrapperProps!}
      className={className}
      css={containerStyles}
      wrapperCss={mergedWrapperCss}
      containerSize={containerSize}
      element={element}
      ref={ref}
      secondContainer={secondContainer}
    >
      {children}
    </FullWidthWrapper>
  );
};

const CommonFullWidthWrapper = forwardRef(CommonFullWidthWrapperWithoutRef);
export default CommonFullWidthWrapper;
