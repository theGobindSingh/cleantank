import { tw } from "@utils/tw";
import {
  createElement,
  type CSSProperties,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
  type Ref,
} from "react";

// data-* attributes too, e.g. data-surface="band" for a navy band
type WrapperElementProps = HTMLAttributes<HTMLElement> &
  Partial<Record<`data-${string}`, string>>;

export interface CommonFullWidthWrapperProps {
  children?: ReactNode;
  className?: string;
  element?: ElementType;
  wrapperCss?: CSSProperties;
  wrapperProps?: WrapperElementProps;
  bg?: string;
  ref?: Ref<HTMLElement>;
}

type WrapperStyle = CSSProperties;

const CommonFullWidthWrapper = ({
  children,
  className,
  element = "section",
  wrapperCss,
  wrapperProps,
  bg,
  ref,
}: CommonFullWidthWrapperProps) => {
  const {
    className: wrapperClassName,
    style: wrapperStyle,
    ...restWrapperProps
  } = wrapperProps ?? {};

  const mergedWrapperStyle: WrapperStyle = bg
    ? {
        width: "100%",
        background: bg,
        ...wrapperCss,
        ...wrapperStyle,
      }
    : {
        width: "100%",
        ...wrapperCss,
        ...wrapperStyle,
      };

  return (
    <div
      className={tw(className, wrapperClassName)}
      style={mergedWrapperStyle}
      {...restWrapperProps}
    >
      {createElement(
        element,
        {
          ref,
          // docs/DESIGN.md, Layout: content never wider than 1200 px
          className: "mx-auto w-[85%] max-w-[1200px] max-[1024px]:w-[90%]",
        },
        children,
      )}
    </div>
  );
};

CommonFullWidthWrapper.displayName = "CommonFullWidthWrapper";

export default CommonFullWidthWrapper;
