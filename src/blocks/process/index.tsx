import type { ProcessBlock } from "@/payload-types";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import { H2 } from "@components/html";
import { getDictionary, type Locale } from "@i18n";
import config from "@payload-config";
import { getPayload } from "payload";
import Details from "./details";
import Track from "./track";

interface ProcessSectionProps extends ProcessBlock {
  locale: Locale;
}

/**
 * The 5-step track on the page ground, with only each step's number, name
 * and line (owner's call), under a visible heading. The steps come from the
 * `process` global. With `detailed` (the process page), the track becomes the
 * steps' index and each step follows in full.
 */
const ProcessSection = async ({
  heading,
  detailed,
  locale,
}: ProcessSectionProps) => {
  const { process: labels } = getDictionary(locale);
  const payload = await getPayload({ config });
  const { steps } = await payload.findGlobal({ slug: "process", locale });
  const track = (
    <Track
      steps={steps}
      whereApplicable={labels.whereApplicable}
      isLinked={Boolean(detailed)}
    />
  );

  return (
    <CommonFullWidthWrapper className="flex flex-col gap-10 py-16 md:gap-12 md:py-20 lg:py-24">
      <H2 $margin="0">{heading}</H2>
      {detailed ? (
        <>
          <nav aria-label={labels.index}>{track}</nav>
          <Details steps={steps} labels={labels} />
        </>
      ) : (
        track
      )}
    </CommonFullWidthWrapper>
  );
};

export default ProcessSection;
