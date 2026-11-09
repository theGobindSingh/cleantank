import Actions from "@/blocks/actions";
import type { ProcessBlock } from "@/payload-types";
import Section from "@components/section";
import { getDictionary, type Locale } from "@i18n";
import config from "@payload-config";
import { getPayload } from "payload";
import Details from "./details";
import Track from "./track";

interface ProcessSectionProps extends ProcessBlock {
  locale: Locale;
}

/**
 * The 5-step track on the page ground, with each step's number, name, line
 * and benefit, under the standard statement headline. The steps come from the
 * `process` global. The track looks the same everywhere; with `detailed` (the
 * process page) each step follows it in full. Optional buttons close the
 * section, bottom left.
 */
const ProcessSection = async ({
  heading,
  highlight,
  detailed,
  actions,
  locale,
}: ProcessSectionProps) => {
  const { process: labels } = getDictionary(locale);
  const payload = await getPayload({ config });
  const { steps } = await payload.findGlobal({ slug: "process", locale });
  return (
    <Section heading={heading} highlight={highlight}>
      <Track steps={steps} whereApplicable={labels.whereApplicable} />
      {detailed && <Details steps={steps} labels={labels} />}
      <Actions actions={actions} locale={locale} />
    </Section>
  );
};

export default ProcessSection;
