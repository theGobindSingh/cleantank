export interface HighlightPart {
  text: string;
  isHighlight: boolean;
}

/** A letter, combining mark or digit, in any script (`\b` only knows ASCII). */
const WORD_CHAR = String.raw`[\p{L}\p{M}\p{N}]`;

const trim = (term: string) => {
  return term.trim();
};

const byLengthDesc = (a: string, b: string) => {
  return b.length - a.length;
};

const escapeRegExp = (term: string) => {
  return term.replace(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`);
};

const isNotEmpty = (part: HighlightPart) => {
  return part.text !== "";
};

/**
 * Splits `text` into plain and highlighted parts. `highlight` is a
 * comma-separated list of words or phrases, matched as whole words and
 * ignoring case, in any script.
 */
export const toHighlightParts = (
  text: string,
  highlight: string | null | undefined,
): HighlightPart[] => {
  const terms = (highlight ?? "").split(",").map(trim).filter(Boolean);
  if (terms.length === 0) return [{ text, isHighlight: false }];

  // longest first, so a phrase wins over a word inside it
  const alternatives = terms.sort(byLengthDesc).map(escapeRegExp).join("|");
  const pattern = new RegExp(
    `(?<!${WORD_CHAR})(${alternatives})(?!${WORD_CHAR})`,
    "giu",
  );

  // with one capture group, split puts the matches at the odd indexes
  const toPart = (part: string, index: number): HighlightPart => {
    return { text: part, isHighlight: index % 2 === 1 };
  };

  return text.split(pattern).map(toPart).filter(isNotEmpty);
};
