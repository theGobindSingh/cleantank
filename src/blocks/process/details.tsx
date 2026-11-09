import { H3, P, Span } from "@components/html";
import { pad } from "@utils/pad";
import Image from "next/image";
import { stepId, type Step } from "./step";

interface DetailsLabels {
  step: string;
  purpose: string;
  equipment: string;
  whereApplicable: string;
}

interface DetailsProps {
  steps: Step[];
  labels: DetailsLabels;
}

const LABEL_CLASS =
  "font-mono text-(length:--fs-caption) font-medium tracking-widest text-fg-muted uppercase";

/**
 * Each step in full, as a ruled list: a spec block in a fixed order (what we
 * do, why it matters, equipment) with its photo on the right from `lg` up and
 * after the text below that.
 */
const Details = ({ steps, labels }: DetailsProps) => {
  const renderStep = (step: Step, index: number) => {
    const image =
      typeof step.image === "number" || !step.image.url ? null : step.image;
    return (
      <li
        key={step.id ?? index}
        id={stepId(index)}
        className="grid scroll-mt-6 gap-6 border-t border-border pt-10 md:gap-10 lg:grid-cols-12"
      >
        <div className="flex flex-col gap-4 lg:col-span-6">
          <Span
            $size="ref"
            className="font-mono font-medium tracking-widest text-fg-muted uppercase"
          >
            {labels.step} {pad(index + 1)}
          </Span>
          <H3 $margin="0">{step.title}</H3>
          <P $size="body-l" className="max-w-[60ch] text-pretty">
            {step.text}
          </P>
          {(Boolean(step.purpose) || Boolean(step.equipment)) && (
            <dl className="flex max-w-[60ch] flex-col gap-4 pt-2">
              {step.purpose && (
                <div className="flex flex-col gap-1">
                  <dt className={LABEL_CLASS}>{labels.purpose}</dt>
                  <dd className="text-pretty">{step.purpose}</dd>
                </div>
              )}
              {step.equipment && (
                <div className="flex flex-col gap-1">
                  <dt className={LABEL_CLASS}>{labels.equipment}</dt>
                  <dd>{step.equipment}</dd>
                </div>
              )}
            </dl>
          )}
          {step.whereApplicable && (
            <Span
              $size="ref"
              className="font-mono font-medium tracking-widest text-fg-muted uppercase"
            >
              * {labels.whereApplicable}
            </Span>
          )}
        </div>
        {image?.url && (
          <div className="relative aspect-3/2 overflow-hidden rounded-sm outline-1 -outline-offset-1 outline-grey-200 lg:col-span-5 lg:col-start-8 lg:row-start-1">
            <Image
              src={image.url}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        )}
      </li>
    );
  };

  return (
    <ol className="flex flex-col gap-10 md:gap-16">{steps.map(renderStep)}</ol>
  );
};

export default Details;
