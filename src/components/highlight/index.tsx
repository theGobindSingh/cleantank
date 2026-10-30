import { toHighlightParts, type HighlightPart } from "@utils/highlight";

interface HighlightProps {
  text: string;
  /** Comma-separated words or phrases of `text` to wrap in a span. */
  highlight: string | null | undefined;
  /** The highlighted words' class, such as their accent color. */
  className: string;
}

/** `text` with the words listed in `highlight` in spans, for use inside a heading. */
const Highlight = ({ text, highlight, className }: HighlightProps) => {
  const renderPart = (
    { text: part, isHighlight }: HighlightPart,
    index: number,
  ) => {
    return isHighlight ? (
      <span key={index} className={className}>
        {part}
      </span>
    ) : (
      part
    );
  };

  return toHighlightParts(text, highlight).map(renderPart);
};

export default Highlight;
