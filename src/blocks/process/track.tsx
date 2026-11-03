import { H3, P, Span } from "@components/html";
import Link from "@components/link";
import StepMarker from "@components/step-marker";
import { stepId, type Step } from "./step";

interface TrackProps {
  steps: Step[];
  whereApplicable: string;
  /** Link each step's name to its full section on the page. */
  isLinked: boolean;
}

/**
 * The step track: five columns joined by one line from `lg` up, with each
 * step's name, line and benefit on shared rows so they line up across the
 * columns; below that down the page. A linked track is an index, so it leaves
 * the benefits to the full steps it links to.
 */
const Track = ({ steps, whereApplicable, isLinked }: TrackProps) => {
  const renderStep = (step: Step, index: number) => {
    const isLast = index === steps.length - 1;
    return (
      <li
        key={step.id ?? index}
        className="grid grid-cols-[auto_1fr] gap-x-4 lg:row-span-4 lg:grid-cols-1 lg:grid-rows-subgrid"
      >
        <StepMarker
          number={index + 1}
          isLast={isLast}
          isDashed={isLast}
          isRowAtLg
        />
        <div className="flex flex-col gap-2 pb-10 lg:contents lg:*:pr-6">
          <H3 $size="h4" $margin="0">
            {isLinked ? (
              <Link href={`#${stepId(index)}`}>{step.title}</Link>
            ) : (
              step.title
            )}
          </H3>
          <P className="text-pretty text-fg-muted">{step.text}</P>
          <div className="flex flex-col gap-2">
            {!isLinked && step.benefit && (
              <P
                $weight="600"
                className="border-t border-border pt-3 text-pretty text-heading"
              >
                {step.benefit}
              </P>
            )}
            {step.whereApplicable && (
              <Span
                $size="ref"
                className="font-mono font-medium tracking-widest text-fg-muted uppercase"
              >
                * {whereApplicable}
              </Span>
            )}
          </div>
        </div>
      </li>
    );
  };

  return (
    <ol className="grid lg:grid-cols-5 lg:gap-y-3">{steps.map(renderStep)}</ol>
  );
};

export default Track;
