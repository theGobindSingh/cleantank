import { H3, P, Span } from "@components/html";
import { tw } from "@utils/tw";
import FontFamily from "./font-family";
import Section from "./section";

interface Face {
  utility: string;
  name: string;
  role: string;
  weights: string[];
  className: string;
}

const FACES: Face[] = [
  {
    utility: "font-sans",
    name: "Anek Latin",
    role: "Everything: body, UI, buttons, h4 down. Variable weight and width. Hindi and Punjabi fall through to Anek Devanagari and Anek Gurmukhi in the same stack.",
    weights: ["400", "500", "600", "700"],
    className: "font-sans",
  },
  {
    utility: "font-heading",
    name: "Anek Latin, 78% width",
    role: "Display to h3. The same family as sans, condensed with font-stretch: 78%.",
    weights: ["600", "700"],
    className: "font-heading [font-stretch:78%] uppercase",
  },
  {
    utility: "font-mono",
    name: "IBM Plex Mono",
    role: "Labels, values, reference tags, GSTIN, step numerals. 500 and 600 only, uppercase with tracking.",
    weights: ["500", "600"],
    className: "font-mono uppercase tracking-[0.08em]",
  },
  {
    utility: "font-serif",
    name: "IBM Plex Serif",
    role: "Reserved: not in the launch pages yet, e.g. a quoted testimonial. Use it only through font-serif.",
    weights: ["400", "600"],
    className: "font-serif",
  },
  {
    utility: "font-cursive",
    name: "Caveat",
    role: "Reserved: not in the launch pages yet, e.g. a handwritten note on a certificate. Use it only through font-cursive.",
    weights: ["400", "700"],
    className: "font-cursive",
  },
];

const GLYPHS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789 ₹ % / · & ( ) : ;";

const renderFace = (face: Face) => {
  const renderWeight = (weight: string) => {
    return (
      <span
        key={weight}
        className={face.className}
        style={{ fontWeight: weight }}
      >
        {weight} Clean Tank, Healthy Life
      </span>
    );
  };

  return (
    <div
      key={face.utility}
      className="flex flex-col gap-3 border-b border-border py-6"
    >
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <H3 $margin="0">{face.name}</H3>
        <code className="font-mono text-(length:--fs-caption) text-secondary">
          {face.utility}
        </code>
      </div>
      <P $size="small" className="max-w-[68ch] text-fg-muted">
        {face.role}
      </P>
      <FontFamily className={face.className} />
      <div className="flex flex-col gap-1 text-(length:--fs-h4)">
        {face.weights.map(renderWeight)}
      </div>
      <P $size="small" className={tw("wrap-break-word", face.className)}>
        {GLYPHS}
      </P>
    </div>
  );
};

/** The four font roles plus the condensed heading cut, with live stacks. */
const Fonts = () => {
  return (
    <Section
      id="fonts"
      number={6}
      title="Fonts"
      intro="Fonts load through next/font in src/styles/fonts.ts, so they are self-hosted with no layout shift. Only Anek Latin is preloaded; the others download on the first page that uses them. The stack under each name is what your browser resolved."
    >
      <div className="flex flex-col">{FACES.map(renderFace)}</div>
      <div className="flex flex-col gap-2 rounded-sm border border-border bg-surface p-6">
        <Span
          $size="caption"
          className="font-mono font-semibold tracking-[0.08em] text-fg-muted uppercase"
        >
          Width axis
        </Span>
        <P $size="h3" $weight="700" className="uppercase font-stretch-78%">
          78% · Headings only
        </P>
        <P $size="h3" $weight="700" className="uppercase font-stretch-100%">
          100% · Never for headings
        </P>
        <P $size="small" className="text-fg-muted">
          Two widths exist and no others. Always set font-weight and
          font-stretch explicitly: Anek&apos;s default instance is 500.
        </P>
      </div>
    </Section>
  );
};

export default Fonts;
