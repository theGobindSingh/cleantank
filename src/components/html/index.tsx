import { tw } from "@utils/tw";
import Text from "./text";
import type { HrProps, TextProps } from "./types";

export const H1 = (props: TextProps) => {
  return (
    <Text
      {...props}
      as="h1"
      defaults={{ size: "h1", weight: "700", margin: "0 0 0.75em 0" }}
    />
  );
};

export const H2 = (props: TextProps) => {
  return (
    <Text
      {...props}
      as="h2"
      defaults={{ size: "h2", weight: "700", margin: "0 0 0.5em 0" }}
    />
  );
};

export const H3 = (props: TextProps) => {
  return (
    <Text
      {...props}
      as="h3"
      defaults={{ size: "h3", weight: "700", margin: "0 0 0.25em 0" }}
    />
  );
};

export const P = (props: TextProps) => {
  return (
    <Text
      {...props}
      as="p"
      defaults={{ size: "body", weight: "400", margin: "0" }}
    />
  );
};

export const Span = (props: TextProps) => {
  return (
    <Text
      {...props}
      as="span"
      defaults={{ size: "body", weight: "400", margin: "0" }}
    />
  );
};

export const Hr = ({ className, $margin, style, ...rest }: HrProps) => {
  return (
    <hr
      className={tw("w-full border-0", className)}
      style={{
        margin: $margin ?? "0",
        borderTop: "1px solid var(--color-border)",
        ...style,
      }}
      {...rest}
    />
  );
};
