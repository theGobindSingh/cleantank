import type { Dictionary } from "@i18n";
import { tw } from "@utils/tw";
import { useId } from "react";
import type { Step } from "./labels";

interface StepsProps {
  steps: Step[];
  /** The cell the visitor's tank count reaches, or -1 for none. */
  reached: number;
  labels: Dictionary["prices"];
}

/** The multi-tank discounts as ruled cells, the one the visitor reaches outlined in accent. */
const Steps = ({ steps, reached, labels }: StepsProps) => {
  const id = useId();
  const renderStep = (step: Step, index: number) => {
    const isReached = index === reached;
    return (
      <li
        key={step.tanks}
        aria-current={isReached ? "step" : undefined}
        className={tw(
          "flex min-w-0 flex-col gap-0.5 bg-surface px-2.5 pt-2 pb-2.5 wrap-break-word",
          // drawn inside the cell, so nothing moves when the step changes
          isReached && "outline-2 -outline-offset-2 outline-accent-600",
        )}
      >
        <span className="font-mono text-(length:--fs-caption) font-medium tracking-[0.08em] text-fg-muted uppercase">
          {step.tanks}
        </span>
        <span className="text-(length:--fs-small) font-semibold text-heading">
          {step.off}
        </span>
        {isReached && <span className="sr-only">{labels.reached}</span>}
      </li>
    );
  };
  return (
    <div className="flex flex-col gap-2">
      <p
        id={id}
        className="font-mono text-(length:--fs-caption) font-medium tracking-[0.08em] uppercase"
      >
        {labels.steps}
      </p>
      <ol
        aria-labelledby={id}
        className="grid auto-cols-fr grid-flow-col gap-px border border-border bg-border"
      >
        {steps.map(renderStep)}
      </ol>
    </div>
  );
};

export default Steps;
