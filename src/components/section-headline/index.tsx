import Highlight from "@components/highlight";
import { H2 } from "@components/html";
import { splitInTwo } from "@utils/split-in-two";

interface SectionHeadlineProps {
  heading: string;
  /** Comma-separated words or phrases of `heading` to show in accent 500. */
  highlight?: string | null | undefined;
}

/**
 * The standard section header: an H2 at the `statement` size, in two lines
 * split at the space that best halves its width, each its own block so the
 * heading is exactly as wide as its longer line.
 */
const SectionHeadline = ({ heading, highlight }: SectionHeadlineProps) => {
  const renderLine = (line: string, index: number) => {
    return (
      <span key={line} className="block">
        {index > 0 && " "}
        <Highlight
          text={line}
          highlight={highlight}
          className="text-accent-500"
        />
      </span>
    );
  };

  return (
    <H2
      $size="statement"
      $margin="0 0 0.25em 0"
      // a class, not $lineHeight, so the Hindi and Punjabi heading leading in defaults.css wins
      className="leading-[0.85] wrap-break-word"
    >
      {splitInTwo(heading).map(renderLine)}
    </H2>
  );
};

export default SectionHeadline;
