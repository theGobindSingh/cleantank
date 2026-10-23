import type { Process, ProcessBlock } from "@/payload-types";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import { H2, H3, P, Span } from "@components/html";
import { getDictionary, type Locale } from "@i18n";
import config from "@payload-config";
import { tw } from "@utils/tw";
import { getPayload } from "payload";
import type { CSSProperties } from "react";
import Reveal from "./reveal";

interface ProcessSectionProps extends ProcessBlock {
  locale: Locale;
}

type Step = Process["steps"][number];

const pad = (value: number) => {
  return String(value).padStart(2, "0");
};

/**
 * The 5-step track on the page ground, with only each step's number, name
 * and line (owner's call). The heading is for screen readers only. The steps
 * come from the `process` global; from `lg` up they run in five columns
 * joined by one line, below that down the page.
 */
const ProcessSection = async ({ heading, locale }: ProcessSectionProps) => {
  const { process: labels } = getDictionary(locale);
  const payload = await getPayload({ config });
  const { steps } = await payload.findGlobal({ slug: "process", locale });

  const renderStep = (step: Step, index: number) => {
    const isLast = index === steps.length - 1;
    return (
      <li
        key={step.id ?? index}
        className="grid grid-cols-[auto_1fr] gap-x-4 lg:flex lg:flex-col lg:gap-4"
      >
        <div
          aria-hidden="true"
          className="flex flex-col items-center lg:flex-row"
        >
          <span
            style={{ "--step": index } as CSSProperties}
            className={tw(
              "flex size-8 shrink-0 items-center justify-center rounded-xs border-2 border-primary font-mono text-(length:--fs-caption) font-semibold text-heading process-node md:size-10",
              isLast && "border-dashed",
            )}
          >
            {pad(index + 1)}
          </span>
          {!isLast && (
            <span className="w-0.5 flex-1 bg-primary lg:h-0.5 lg:w-auto" />
          )}
        </div>
        <div className="flex flex-col gap-2 pb-10 lg:pr-6 lg:pb-0">
          <H3 $size="h4" $margin="0">
            {step.title}
          </H3>
          <P $size="small" className="text-pretty text-fg-muted">
            {step.text}
          </P>
          {step.whereApplicable && (
            <Span
              $size="ref"
              className="font-mono font-medium tracking-widest text-fg-muted uppercase"
            >
              * {labels.whereApplicable}
            </Span>
          )}
        </div>
      </li>
    );
  };

  return (
    <CommonFullWidthWrapper className="py-16 md:py-20 lg:py-24">
      <H2 className="sr-only">{heading}</H2>
      <Reveal>
        <ol className="grid lg:grid-cols-5">{steps.map(renderStep)}</ol>
      </Reveal>
    </CommonFullWidthWrapper>
  );
};

export default ProcessSection;
