import Actions from "@/blocks/actions";
import type { PageIntroBlock } from "@/payload-types";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import { P } from "@components/html";
import SectionHeadline from "@components/section-headline";
import type { Locale } from "@i18n";

interface PageIntroProps extends Pick<
  PageIntroBlock,
  "heading" | "highlight" | "text" | "actions"
> {
  locale: Locale;
}

/**
 * An inner page's H1 in the two-line section-header style, then one line and
 * its actions. The Level Line sits under the H1 only when it has no highlight,
 * since a highlighted heading already carries the coral.
 * No bottom padding: the next section on the same white ground supplies the gap.
 */
const PageIntro = ({
  heading,
  highlight,
  text,
  actions,
  locale,
}: PageIntroProps) => {
  return (
    <CommonFullWidthWrapper className="flex flex-col gap-6 pt-8 md:pt-10 lg:pt-12">
      <div className="flex flex-col gap-3">
        <SectionHeadline level={1} heading={heading} highlight={highlight} />
        {!highlight?.trim() && (
          <span aria-hidden="true" className="block h-[3px] w-12 bg-marker" />
        )}
      </div>
      {text && (
        <P $size="body-l" className="max-w-[60ch] text-pretty text-fg-muted">
          {text}
        </P>
      )}
      <Actions actions={actions} locale={locale} className="pt-2" />
    </CommonFullWidthWrapper>
  );
};

export default PageIntro;
