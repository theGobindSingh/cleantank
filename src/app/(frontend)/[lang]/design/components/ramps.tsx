import { H3, P } from "@components/html";
import { FAMILIES, STOPS, type Family } from "./data";
import Section from "./section";
import Swatch, { type Check } from "./swatch";

const CHECKS: Check[] = [
  { label: "on white", css: "var(--color-white)" },
  { label: "on graphite", css: "var(--color-grey-900)" },
];

const renderFamily = (family: Family) => {
  const renderStop = (stop: (typeof STOPS)[number]) => {
    return (
      <Swatch
        key={stop}
        css={`var(--color-${family.name}-${stop})`}
        name={stop}
        checks={CHECKS}
        highlight={stop === family.anchor}
      />
    );
  };

  return (
    <div key={family.name} className="flex flex-col gap-4">
      <div className="flex max-w-[68ch] flex-col gap-1">
        <H3 $margin="0">{family.label}</H3>
        <P $size="small" className="text-fg-muted">
          {family.note} Utilities: <code>bg-{family.name}-700</code>,{" "}
          <code>text-{family.name}-700</code>; in CSS{" "}
          <code>var(--color-{family.name}-700)</code> or{" "}
          <code>hsl(var(--color-{family.name}-700-base) / 0.5)</code>.
        </P>
      </div>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11">
        {STOPS.map(renderStop)}
      </div>
    </div>
  );
};

/** Every ramp, 50 to 950, with live hex values and contrast against white and graphite. */
const Ramps = () => {
  return (
    <Section
      id="ramps"
      number={2}
      title="Colour ramps"
      intro="Eight families, each with eleven stops from 50 to 950. Ramps are fixed: they look the same in light and dark mode, and only the semantic roles in the next section change. The outlined chip is the family's anchor. Every value below is read from the rendered CSS, so it is always current."
    >
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <H3 $margin="0">White</H3>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11">
            <Swatch css="var(--color-white)" name="white" checks={CHECKS} />
          </div>
          <P $size="small" className="text-fg-muted">
            There is no black. The darkest text is graphite (grey 900) and the
            darkest ground is navy 900.
          </P>
        </div>
        {FAMILIES.map(renderFamily)}
      </div>
    </Section>
  );
};

export default Ramps;
