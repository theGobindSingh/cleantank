import { H3, P } from "@components/html";
import Section from "./section";

const NEVER = [
  "Gradients, shadows, gloss, glass, blur or glow",
  "Water splashes, droplets, waves or bubbles",
  "Cartoon bacteria, mascots or 3D tanks",
  "Red or orange urgency badges, starbursts, seals or shields",
  "Countdowns, discount badges, festive offers",
  "Pills or any radius above 6 px",
  "Tricolour layouts or festival motifs",
  "Fake ISO or approval marks",
];

const renderNever = (item: string) => {
  return <li key={item}>{item}</li>;
};

/** The direction behind every token on this page. */
const Overview = () => {
  return (
    <Section
      id="direction"
      number={1}
      title="Direction"
      intro="Quiet precision. One standard, every tank. Pages read like a lab report or a spec sheet with room to breathe: ruled, numbered, exact and calm. Authority comes from the visuals and humility from the words."
    >
      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-3">
          <H3 $margin="0">The test</H3>
          <P>
            Cover the logo, and the page should still read as a ruled spec sheet
            with a navy band, one coral marker and a lot of white space.
          </P>
          <P $size="small" className="text-fg-muted">
            References: a hospital lab bench, a calibrated pressure gauge, test
            reports, dated inspection tags, Swiss technical signage, technicians
            in pressed navy uniforms. Proportion: neutrals about 60% of the
            non-photo area, navy (with secondary) about 30%, coral at most 10%.
          </P>
        </div>
        <div className="flex flex-col gap-3">
          <H3 $margin="0">Never</H3>
          <ul className="flex list-disc flex-col gap-1 pl-5">
            {NEVER.map(renderNever)}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Overview;
