import Actions from "@/blocks/actions";
import type { CtaBandBlock } from "@/payload-types";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import { P } from "@components/html";
import SectionHeadline from "@components/section-headline";
import type { Locale } from "@i18n";

interface CtaBandProps extends CtaBandBlock {
  locale: Locale;
}

/** One of the page's emphasis bands: the standard two-line heading, a line and its actions on navy. */
const CtaBand = ({
  heading,
  highlight,
  text,
  actions,
  locale,
}: CtaBandProps) => {
  return (
    <CommonFullWidthWrapper
      wrapperProps={{ "data-surface": "band" }}
      className="flex flex-col gap-4 py-8 md:py-10 lg:py-12"
    >
      <SectionHeadline heading={heading} highlight={highlight} />
      {text && (
        <P $size="body-l" className="max-w-[60ch] text-pretty">
          {text}
        </P>
      )}
      <Actions actions={actions} locale={locale} className="pt-2" />
    </CommonFullWidthWrapper>
  );
};

export default CtaBand;
