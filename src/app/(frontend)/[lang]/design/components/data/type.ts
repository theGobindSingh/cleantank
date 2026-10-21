import type { TextSizeToken } from "@components/html/types";

export interface ScaleStep {
  token: TextSizeToken;
  use: string;
  sample: string;
  face: "heading" | "body" | "mono";
}

export const TYPE_SCALE: ScaleStep[] = [
  {
    token: "display",
    use: "Hero headline only",
    sample: "One standard, every tank",
    face: "heading",
  },
  {
    token: "h1",
    use: "Page title",
    sample: "Scientific tank cleaning",
    face: "heading",
  },
  {
    token: "h2",
    use: "Section title",
    sample: "Our cleaning process",
    face: "heading",
  },
  {
    token: "h3",
    use: "Sub-section, card title",
    sample: "High-pressure cleaning",
    face: "heading",
  },
  {
    token: "h4",
    use: "Minor heading, sentence case",
    sample: "What the certificate records",
    face: "body",
  },
  {
    token: "body-l",
    use: "Lead paragraph",
    sample: "Every cleaning follows the same five steps.",
    face: "body",
  },
  {
    token: "body",
    use: "Running text",
    sample:
      "Water is removed with mechanical pumps before the walls are cleaned.",
    face: "body",
  },
  {
    token: "small",
    use: "Secondary detail",
    sample: "Subject to location, manpower and availability.",
    face: "body",
  },
  {
    token: "caption",
    use: "Captions, labels",
    sample: "Capacity 20,000 L · Kanpur",
    face: "body",
  },
  {
    token: "ref",
    use: "Reference tags",
    sample: "REF CT-WEB-02",
    face: "mono",
  },
];
