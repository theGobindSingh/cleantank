import { H3, P, Span } from "@components/html";
import Link from "@components/link";
import { tw } from "@utils/tw";
import { pad, stepId, type Step } from "./step";

interface TrackProps {
  steps: Step[];
  whereApplicable: string;
  /** Link each step's name to its full section on the page. */
  isLinked: boolean;
}

/**
 * The step track: five columns joined by one line from `lg` up, below that
 * down the page.
 */
const Track = ({ steps, whereApplicable, isLinked }: TrackProps) => {
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
            className={tw(
              "flex size-8 shrink-0 items-center justify-center rounded-xs border-2 border-primary font-mono text-(length:--fs-caption) font-semibold text-heading md:size-10",
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
            {isLinked ? (
              <Link href={`#${stepId(index)}`}>{step.title}</Link>
            ) : (
              step.title
            )}
          </H3>
          <P $size="small" className="text-pretty text-fg-muted">
            {step.text}
          </P>
          {step.whereApplicable && (
            <Span
              $size="ref"
              className="font-mono font-medium tracking-widest text-fg-muted uppercase"
            >
              * {whereApplicable}
            </Span>
          )}
        </div>
      </li>
    );
  };

  return <ol className="grid lg:grid-cols-5">{steps.map(renderStep)}</ol>;
};

export default Track;
