import {
  FocusEvent,
  forwardRef,
  MouseEventHandler,
  Ref,
  TouchEventHandler,
} from "react";
import { ButtonWrapper, LinkButtonWrapper } from "./styles";
import { ButtonProps } from "./types";

const ButtonWithoutRef = (
  {
    children,
    href,
    type = "button",
    $variant = "filled",
    onMouseDown: onMouseDownProp,
    onTouchStart: onTouchStartProp,
    onMouseUp: onMouseUpProp,
    onTouchEnd: onTouchEndProp,
    onBlur: onBlurProp,
    ...props
  }: ButtonProps,
  ref: Ref<HTMLButtonElement | HTMLAnchorElement>,
) => {
  const onMouseDown: MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  > = (e) => {
    e.currentTarget.setAttribute("data-down", "true");
    onMouseDownProp?.(e as never);
  };
  const onTouchStart: TouchEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  > = (e) => {
    e.currentTarget.setAttribute("data-down", "true");
    onTouchStartProp?.(e as never);
  };
  const onMouseUp: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = (
    e,
  ) => {
    e.currentTarget.removeAttribute("data-down");
    onMouseUpProp?.(e as never);
  };
  const onTouchEnd: TouchEventHandler<HTMLButtonElement | HTMLAnchorElement> = (
    e,
  ) => {
    e.currentTarget.removeAttribute("data-down");
    onTouchEndProp?.(e as never);
  };
  const onBlur = (e: FocusEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.currentTarget.removeAttribute("data-down");
    onBlurProp?.(e as never);
  };
  const Component = href ? LinkButtonWrapper : ButtonWrapper;
  return (
    <Component
      href={href}
      type={type}
      ref={ref}
      $variant={$variant}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onMouseUp={onMouseUp}
      onTouchEnd={onTouchEnd}
      onBlur={onBlur}
      {...(props as any)}
    >
      {children}
    </Component>
  );
};

const Button = forwardRef(ButtonWithoutRef);
Button.displayName = "Button";
export default Button;

export type * from "./types";
