import Actions from "@/blocks/actions";
import type { PageIntroBlock } from "@/payload-types";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import { H1, P } from "@components/html";
import type { Locale } from "@i18n";

interface PageIntroProps extends PageIntroBlock {
  locale: Locale;
}

/**
 * An inner page's H1 with the Level Line under it, one line and its actions.
 * No bottom padding: the next section on the same white ground supplies the gap.
 */
const PageIntro = ({ heading, text, actions, locale }: PageIntroProps) => {
  return (
    <CommonFullWidthWrapper className="flex flex-col gap-6 pt-16 md:pt-20 lg:pt-24">
      <div className="flex flex-col gap-3">
        <H1 $margin="0" className="max-w-[20ch]">
          {heading}
        </H1>
        <span aria-hidden="true" className="block h-[3px] w-12 bg-marker" />
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
