import Actions from "@/blocks/actions";
import type { CtaBandBlock } from "@/payload-types";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import { H2, P } from "@components/html";
import type { Locale } from "@i18n";

interface CtaBandProps extends CtaBandBlock {
  locale: Locale;
}

/** One of the page's emphasis bands: a heading, a line and its actions on navy. */
const CtaBand = ({ heading, text, actions, locale }: CtaBandProps) => {
  return (
    <CommonFullWidthWrapper
      wrapperProps={{ "data-surface": "band" }}
      className="flex flex-col gap-6 py-16 md:py-20"
    >
      <H2 $margin="0" className="max-w-[24ch]">
        {heading}
      </H2>
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
