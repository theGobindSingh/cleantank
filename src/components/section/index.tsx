import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import { H2, P } from "@components/html";
import SectionHeadline from "@components/section-headline";
import { tw } from "@utils/tw";
import type { ReactNode } from "react";

interface SectionProps {
  heading: string;
  /** Set the heading as the standard statement headline. */
  isStatement?: boolean | null | undefined;
  /** With `isStatement`, the words of the heading to show in accent 500. */
  highlight?: string | null | undefined;
  /** One line under the heading, in `fg-muted`. */
  text?: string | null | undefined;
  /** Stone ground (`bg-subtle`) instead of white. */
  isSubtle?: boolean | null | undefined;
  /** The section's id, so links like /about#clients land on it. */
  anchor?: string | null | undefined;
  wrapperClassName?: string | undefined;
  children: ReactNode;
}

/** A page section: the H2 and an optional line, then the content, with the standard spacing. */
const Section = ({
  heading,
  isStatement,
  highlight,
  text,
  isSubtle,
  anchor,
  wrapperClassName,
  children,
}: SectionProps) => {
  return (
    <CommonFullWidthWrapper
      wrapperClassName={tw(isSubtle && "bg-bg-subtle", wrapperClassName)}
      wrapperProps={anchor ? { id: anchor } : {}}
      className="flex flex-col gap-10 py-16 md:gap-12 md:py-20 lg:py-24"
    >
      <div className="flex flex-col gap-4">
        {isStatement ? (
          <SectionHeadline heading={heading} highlight={highlight} />
        ) : (
          <H2 $margin="0">{heading}</H2>
        )}
        {text && (
          <P className="max-w-[60ch] text-pretty text-fg-muted">{text}</P>
        )}
      </div>
      {children}
    </CommonFullWidthWrapper>
  );
};

export default Section;
