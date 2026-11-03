import { pad } from "@utils/pad";
import { tw } from "@utils/tw";

interface StepMarkerProps {
  /** The 1-based number shown in the node. */
  number: number;
  /** The last node has no connector after it. */
  isLast: boolean;
  /** A dashed node, for a step done only where applicable. */
  isDashed?: boolean;
  /** Run the connector sideways from `lg` up, as in the process track. */
  isRowAtLg?: boolean;
}

/**
 * A step track's node and the 2 px connector to the next one: a square node
 * with a mono numeral, 32 px and 40 px from `md`. Decorative, since the list
 * it sits in already numbers its items.
 */
const StepMarker = ({
  number,
  isLast,
  isDashed = false,
  isRowAtLg = false,
}: StepMarkerProps) => {
  return (
    <div
      aria-hidden="true"
      className={tw("flex flex-col items-center", isRowAtLg && "lg:flex-row")}
    >
      <span
        className={tw(
          "flex size-8 shrink-0 items-center justify-center rounded-xs border-2 border-primary font-mono text-(length:--fs-caption) font-semibold text-heading md:size-10",
          isDashed && "border-dashed",
        )}
      >
        {pad(number)}
      </span>
      {!isLast && (
        <span
          className={tw(
            "w-0.5 flex-1 bg-primary",
            isRowAtLg && "lg:h-0.5 lg:w-auto",
          )}
        />
      )}
    </div>
  );
};

export default StepMarker;
