import { site } from "@/site";
import { H2, H3, P, Span } from "@components/html";
import { formatPhone } from "@utils/phone";
import { TYPE_SCALE, type ScaleStep } from "./data";
import Section from "./section";
import TypeSample from "./type-sample";

const renderStep = (step: ScaleStep) => {
  return <TypeSample key={step.token} {...step} />;
};

const RULES = [
  "Headings h1 to h3 use the heading face at 78% width, weight 700, uppercase, +0.01em, line height 1. Write them in sentence case; CSS uppercases them. At most 8 words.",
  "h4 and everything smaller is 100% width and sentence case. Never uppercase paragraphs, lists, captions, URLs, email addresses, the descriptor line or Indic text.",
  "No italics anywhere (Anek has none). Emphasis is weight 600. No synthetic bold.",
  "Body measure 60 to 68 characters (45 to 75 allowed). Left-aligned, ragged right, never justified. Headings balance their lines; body text wraps pretty.",
  "Nothing below 12 px except the ref style. Curly quotes, no em dashes in brand copy, ranges written with to: ₹3 to 8 lakh.",
  `Numbers: Indian grouping (20,00,000), a non-breaking space before units (20,000 L, 250 bar), ₹ with no space, tabular figures in tables. Dates as 03 Oct 2026, phones as ${formatPhone(site.phone)}.`,
];

const renderRule = (rule: string) => {
  return (
    <li key={rule} className="max-w-[68ch]">
      {rule}
    </li>
  );
};

/** The fluid type scale, measured live, plus the real heading components. */
const Typography = () => {
  return (
    <Section
      id="typography"
      number={5}
      title="Type scale"
      intro="Ten sizes, fluid between 360 and 1280 px wide at a 1.2 ratio. Each line below is rendered with its token, and the size and line height next to it are measured at your current window width. Resize the window to watch them move between their limits."
    >
      <div className="flex flex-col">{TYPE_SCALE.map(renderStep)}</div>

      <div className="flex flex-col gap-4">
        <H3 $margin="0">The real components</H3>
        <P $size="small" className="text-fg-muted">
          <code>@components/html</code> renders these. <code>$size</code> takes
          the token names above, <code>$weight</code> 100 to 800 and{" "}
          <code>$color</code> plus <code>$colorWeight</code> any ramp stop.
          Unset props fall back to the base styles.
        </P>
        <div className="flex flex-col gap-3 rounded-sm border border-border bg-surface p-6">
          <H2 $margin="0">H2 · Our scientific cleaning process</H2>
          <H3 $margin="0">H3 · Sludge and water removal</H3>
          <P $size="body-l">
            P body-l · A disciplined process, explained simply.
          </P>
          <P>
            P body · Walls, floor and roof are cleaned with a high-pressure
            water jet of 150 to 250&nbsp;bar, depending on the tank and the
            work. The customer gets a Cleaning Certificate and a dated sticker.
          </P>
          <P $size="small" className="text-fg-muted">
            P small, fg-muted · Subject to location, manpower and operational
            availability.
          </P>
          <Span $size="caption" $weight="600" className="text-secondary">
            Span caption, text-secondary role (follows the mode; $color picks a
            fixed stop that doesn&apos;t)
          </Span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <H3 $margin="0">Rules</H3>
        <ul className="flex list-disc flex-col gap-2 pl-5">
          {RULES.map(renderRule)}
        </ul>
      </div>
    </Section>
  );
};

export default Typography;
