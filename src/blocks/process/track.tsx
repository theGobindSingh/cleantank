import { H3, P, Span } from "@components/html";
import StepMarker from "@components/step-marker";
import { tw } from "@utils/tw";
import type { Step } from "./step";

interface TrackProps {
  steps: Step[];
  whereApplicable: string;
  /** Keep the vertical layout at every width, in the left half from `lg` up. */
  isStacked?: boolean;
}

/**
 * The step track: five columns joined by one line from `lg` up, with each
 * step's name, line and benefit on shared rows so they line up across the
 * columns; below that down the page. With `isStacked` it stays vertical at
 * every width and takes the left half of the page grid from `lg` up, leaving
 * the right half empty.
 */
const Track = ({ steps, whereApplicable, isStacked = false }: TrackProps) => {
  const renderStep = (step: Step, index: number) => {
    const isLast = index === steps.length - 1;
    return (
      <li
        key={step.id ?? index}
        className={tw(
          "grid grid-cols-[auto_1fr] gap-x-4",
          isStacked
            ? "lg:col-span-6 lg:col-start-1"
            : "lg:row-span-4 lg:grid-cols-1 lg:grid-rows-subgrid",
        )}
      >
        <StepMarker
          number={index + 1}
          isLast={isLast}
          isDashed={isLast}
          isRowAtLg={!isStacked}
        />
        <div
          className={tw(
            "flex flex-col gap-2 pb-10",
            !isStacked && "lg:contents lg:*:pr-6",
          )}
        >
          <H3 $size="h4" $margin="0">
            {step.title}
          </H3>
          <P className="text-pretty text-fg-muted">{step.text}</P>
          <div className="flex flex-col gap-2">
            {step.benefit && (
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
    <ol
      className={tw(
        "grid",
        isStacked ? "lg:grid-cols-12 lg:gap-x-10" : "lg:grid-cols-5 lg:gap-y-3",
      )}
    >
      {steps.map(renderStep)}
    </ol>
  );
};

export default Track;
