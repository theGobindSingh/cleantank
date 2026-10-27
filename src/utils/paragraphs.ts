const trim = (paragraph: string) => {
  return paragraph.trim();
};

/** Splits CMS plain text into paragraphs at blank lines, dropping empty ones. */
export const toParagraphs = (text: string | null | undefined): string[] => {
  if (!text) return [];
  return text
    .split(/\n\s*\n/)
    .map(trim)
    .filter(Boolean);
};
