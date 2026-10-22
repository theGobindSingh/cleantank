import { tw } from "@utils/tw";
import type {
  HTMLAttributes,
  JSX,
  PropsWithChildren,
  ReactNode,
  Ref,
} from "react";
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";

export interface FullWidthWrapperProps extends PropsWithChildren {
  /** Classes for the inner content div (layout of the children). */
  className?: string;
  /** The outer element, which is the block itself: "section", "header", "footer"… */
  element?: keyof JSX.IntrinsicElements;
  /** Rendered in the outer element before the content div, e.g. an absolute scrim. */
  beforeContainer?: ReactNode;
  /** Rendered in the outer element after the content div, e.g. a full-bleed image. */
  afterContainer?: ReactNode;
  /** Classes for the outer element: background, position, height, z-index. */
  wrapperClassName?: string;
  /** Centres the content div on both axes (the outer element is a flex box). */
  isContainerCenter?: boolean;
  /** Width of the content div. */
  containerSize?: string;
  /** Cap on the content div's width; the --max-content-width variable overrides it. */
  maxContentWidth?: string;
  /** Attributes for the outer element; data-* too, e.g. data-surface="band" for a navy band. */
  wrapperProps?: HTMLAttributes<HTMLElement> &
    Partial<Record<`data-${string}`, string>>;
}

/**
 * The outermost element of every page block (header, hero, each section,
 * footer). Don't put it inside another <section>: pass `element` instead, so
 * the wrapper is the block. The outer element spans the screen and takes the
 * background; the inner div holds the content at 90% of the width, at most
 * 1800 px. Layers that must span the full width (scrims, full-bleed images)
 * go in `beforeContainer` / `afterContainer`, not in the children.
 *
 * <FullWidthWrapper
 *   element="section"
 *   wrapperProps={{ "data-surface": "band" }}
 *   wrapperClassName="relative py-16"
 *   className="flex flex-col gap-6"
 *   afterContainer={<FullBleedImage />}
 * >
 *   <H2>…</H2>
 * </FullWidthWrapper>
 */
const FullWidthWrapperWithoutRef = (
  {
    containerSize = "90%",
    maxContentWidth = "1800px",
    className,
    children,
    element = "section",
    beforeContainer = null,
    afterContainer = null,
    wrapperClassName,
    isContainerCenter = true,
    wrapperProps = {},
  }: FullWidthWrapperProps,
  ref: Ref<HTMLElement>,
): JSX.Element => {
  const innerElement = jsx("div", {
    style: {
      maxWidth: `var(--max-content-width, ${maxContentWidth})`,
      width: containerSize,
    },
    className,
    children,
  });

  return jsxs(element, {
    className: tw`
    flex
    w-full
    ${isContainerCenter && "justify-center items-center"}
    ${wrapperClassName}
    `,
    ref,
    children: [beforeContainer, innerElement, afterContainer],
    ...wrapperProps,
  });
};

// eslint-disable-next-line @eslint-react/no-forward-ref -- ignore
const FullWidthWrapper = forwardRef<HTMLElement, FullWidthWrapperProps>(
  FullWidthWrapperWithoutRef,
);

FullWidthWrapper.displayName = "FullWidthWrapper";

export default FullWidthWrapper;
