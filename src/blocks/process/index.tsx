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
 * `process` global. With `detailed` (the process page), the track becomes the
 * steps' index without the benefits, each step follows in full, and the
 * heading stays at H2 size so it doesn't outrank the page's H1.
 */
const ProcessSection = async ({
  heading,
  highlight,
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
    <Section heading={heading} isStatement={!detailed} highlight={highlight}>
      {detailed ? (
        <>
          <nav aria-label={labels.index}>{track}</nav>
          <Details steps={steps} labels={labels} />
        </>
      ) : (
        track
      )}
    </Section>
  );
};

export default ProcessSection;
