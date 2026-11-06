/** Marks drawn above or below a letter (most Hindi and Punjabi vowel signs, bindis) add no width. */
const nonSpacingMark = /\p{Mn}/u;

const takesRoom = (char: string) => {
  return !nonSpacingMark.test(char);
};

/**
 * Splits `text` at the space that best halves its width, so it can be set as
 * two even lines; text with no space comes back whole. Width is the count of
 * code points that take up room on the line, which tracks how wide Hindi and
 * Punjabi words render far better than a grapheme count.
 */
export const splitInTwo = (text: string): string[] => {
  const chars = [...text];
  const total = chars.filter(takesRoom).length;
  let best = -1;
  let bestGap = Infinity;
  let width = 0;
  for (const [index, char] of chars.entries()) {
    const gap = Math.abs(width - (total - width - 1));
    if (char === " " && gap < bestGap) {
      best = index;
      bestGap = gap;
    }
    if (takesRoom(char)) width++;
  }
  if (best === -1) return [text];
  return [chars.slice(0, best).join(""), chars.slice(best + 1).join("")];
};
