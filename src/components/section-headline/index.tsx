import Highlight from "@components/highlight";
import { H1, H2 } from "@components/html";
import { splitInTwo } from "@utils/split-in-two";

interface SectionHeadlineProps {
  heading: string;
  /** Comma-separated words or phrases of `heading` to show in accent 500. */
  highlight?: string | null | undefined;
  /** Heading level to render: 2 (default) or 1 for a page's own H1. */
  level?: 1 | 2;
}

/**
 * The standard section header: an H2 (or an H1 with `level={1}`, as in the
 * page intro) at the `statement` size, in two lines split at the space that
 * best halves its width, each its own block so the heading is exactly as wide
 * as its longer line.
 */
const SectionHeadline = ({
  heading,
  highlight,
  level = 2,
}: SectionHeadlineProps) => {
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

  const lines = splitInTwo(heading).map(renderLine);
  // a class, not $lineHeight, so the Hindi and Punjabi heading leading in defaults.css wins
  const lineClass = "leading-[0.85] wrap-break-word";

  if (level === 1) {
    return (
      <H1 $size="statement" $margin="0" className={lineClass}>
        {lines}
      </H1>
    );
  }

  return (
    <H2 $size="statement" $margin="0 0 0.25em 0" className={lineClass}>
      {lines}
    </H2>
  );
};

export default SectionHeadline;
