const segmenter = new Intl.Segmenter();

const toSegment = ({ segment }: Intl.SegmentData) => {
  return segment;
};

/**
 * Splits `text` at the space nearest its middle, so it can be set as two even
 * lines; text with no space comes back whole. It counts graphemes, not code
 * units, so Hindi and Punjabi vowel signs don't skew the middle.
 */
export const splitInTwo = (text: string): string[] => {
  const graphemes = [...segmenter.segment(text)].map(toSegment);
  const middle = graphemes.length / 2;
  let best = -1;
  for (const [index, grapheme] of graphemes.entries()) {
    const isCloser =
      best === -1 || Math.abs(index - middle) < Math.abs(best - middle);
    if (grapheme === " " && isCloser) best = index;
  }
  if (best === -1) return [text];
  return [
    graphemes.slice(0, best).join(""),
    graphemes.slice(best + 1).join(""),
  ];
};
