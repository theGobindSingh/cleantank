import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import { H1, P } from "@components/html";
import type { PropsWithChildren } from "react";

interface StatusPageProps extends PropsWithChildren {
  code: string;
  title: string;
  description: string;
}

/**
 * The message of 404 and error pages, between the header and footer.
 * `children` holds the actions.
 */
const StatusPage = ({
  code,
  title,
  description,
  children,
}: StatusPageProps) => {
  return (
    <CommonFullWidthWrapper
      element="main"
      className="flex flex-col items-start gap-6 py-24"
    >
      <p className="font-mono text-sm tracking-widest text-marker-text uppercase">
        {code}
      </p>
      <H1 $margin="0">{title}</H1>
      <P $size="body-l" className="max-w-[60ch] text-fg-muted">
        {description}
      </P>
      <div className="flex flex-wrap gap-3">{children}</div>
    </CommonFullWidthWrapper>
  );
};

export default StatusPage;
