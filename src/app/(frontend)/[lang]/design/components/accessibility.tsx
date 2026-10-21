import Button from "@components/button";
import { H3, P } from "@components/html";
import { APPROVED_PAIRS, FORBIDDEN_PAIRS, type Pair } from "./data";
import PairSample from "./pair";
import Section from "./section";

const renderPair = (pair: Pair) => {
  return <PairSample key={pair.label} {...pair} />;
};

const RULES = [
  "WCAG 2.2 AA is the floor. pnpm test:e2e runs axe on every page in light and dark mode, and fails on any violation.",
  "Focus: a 2 px solid focus outline at a 2 px offset on :focus-visible. It turns white in dark mode and in bands. Never outline: none.",
  "Targets 48 px, 44 px at the very least, 8 px apart.",
  "Meaning is never colour alone: states get an icon and a word, links an underline, charts direct labels.",
  "No sideways scroll at 320 px and the page works at 200% zoom.",
  "lang on every page and on every mixed-language fragment.",
  "Reduced motion is respected globally. Budgets: LCP 2.5 s, INP 200 ms, CLS 0.1, initial JS 150 KB gzipped.",
];

const renderRule = (rule: string) => {
  return <li key={rule}>{rule}</li>;
};

/** Live contrast for the approved and forbidden pairs, plus the access rules. */
const Accessibility = () => {
  return (
    <Section
      id="accessibility"
      number={15}
      title="Contrast and access"
      intro="Ratios below are computed in your browser from the live colours. Text needs 4.5:1, large text and interface parts 3:1."
    >
      <div className="flex flex-col gap-4">
        <H3 $margin="0">Approved pairs</H3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {APPROVED_PAIRS.map(renderPair)}
        </div>
      </div>
      {/* intentionally failing examples; e2e/a11y.spec.ts skips [data-a11y-demo] */}
      <div data-a11y-demo className="flex flex-col gap-4">
        <H3 $margin="0">Never use</H3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FORBIDDEN_PAIRS.map(renderPair)}
        </div>
        <P $size="small" className="max-w-[68ch] text-fg-muted">
          Also never: coral as a button fill or CTA, coral beside error red in
          one component, coral text over photos, yellow or orange warning fills,
          and red versus green as the only difference.
        </P>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-3">
          <H3 $margin="0">Focus ring</H3>
          <P $size="small" className="text-fg-muted">
            Press Tab to move onto these.
          </P>
          <div className="flex flex-wrap gap-3">
            <Button>Filled</Button>
            <Button variant="outlined">Outlined</Button>
          </div>
        </div>
        <ul className="flex list-disc flex-col gap-2 pl-5">
          {RULES.map(renderRule)}
        </ul>
      </div>
    </Section>
  );
};

export default Accessibility;
