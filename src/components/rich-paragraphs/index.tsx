import { P } from "@components/html";
import type {
  SerializedParagraphNode,
  SerializedTextNode,
} from "@payloadcms/richtext-lexical";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import {
  type JSXConverterArgs,
  type JSXConverters,
  RichText,
} from "@payloadcms/richtext-lexical/react";

interface RichParagraphsProps {
  data: SerializedEditorState;
  className?: string;
}

// Lexical's IS_BOLD format bit.
const BOLD = 1;

const renderText = ({ node }: JSXConverterArgs<SerializedTextNode>) => {
  // Emphasis is weight 600 (docs/DESIGN.md, Typography).
  return node.format & BOLD ? (
    <strong className="font-semibold">{node.text}</strong>
  ) : (
    node.text
  );
};

/**
 * CMS rich text limited to paragraphs and bold, as one `P` per paragraph:
 * the rich-text twin of `@components/paragraphs`. Empty paragraphs are dropped.
 */
const RichParagraphs = ({
  data,
  className = "text-pretty",
}: RichParagraphsProps) => {
  const renderParagraph = ({
    node,
    nodesToJSX,
  }: JSXConverterArgs<SerializedParagraphNode>) => {
    if (node.children.length === 0) return null;
    return (
      <P $margin="0" className={className}>
        {nodesToJSX({ nodes: node.children })}
      </P>
    );
  };

  const converters: JSXConverters = {
    paragraph: renderParagraph,
    text: renderText,
  };

  return <RichText data={data} converters={converters} disableContainer />;
};

export default RichParagraphs;
