import { P } from "@components/html";
import { toParagraphs } from "@utils/paragraphs";

interface ParagraphsProps {
  text: string | null | undefined;
  className?: string;
}

/** CMS plain text as one `P` per paragraph (split at blank lines). */
const Paragraphs = ({ text, className = "text-pretty" }: ParagraphsProps) => {
  const renderParagraph = (paragraph: string) => {
    return (
      <P key={paragraph} $margin="0" className={className}>
        {paragraph}
      </P>
    );
  };

  return toParagraphs(text).map(renderParagraph);
};

export default Paragraphs;
