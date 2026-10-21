import { H3, P, Span } from "@components/html";
import { tw } from "@utils/tw";
import Section from "./section";

const STEPS = [
  "De-watering",
  "High-pressure cleaning",
  "Sludge & water removal",
  "Disinfection",
  "UV treatment",
];

const ACTIVE = 2;

const renderStep = (step: string, index: number) => {
  const isActive = index === ACTIVE;
  const isLast = index === STEPS.length - 1;
  return (
    <li
      key={step}
      aria-current={isActive ? "step" : undefined}
      className="flex min-w-0 flex-1 flex-col gap-3"
    >
      <div className="flex items-center">
        <span
          className={tw(
            "flex size-8 shrink-0 items-center justify-center rounded-xs border-2 border-primary font-mono text-(length:--fs-caption) font-semibold md:size-10",
            isActive ? "bg-primary text-on-primary" : "bg-surface text-heading",
            isLast && "border-dashed",
          )}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        {!isLast && (
          <span aria-hidden="true" className="h-0.5 flex-1 bg-primary" />
        )}
      </div>
      {isActive && (
        <span aria-hidden="true" className="block h-[3px] w-10 bg-marker" />
      )}
      <Span $size="small" $weight="600" className="pr-2">
        {step}
        {isLast && (
          <span className="block font-mono text-(length:--fs-ref) font-medium tracking-widest text-fg-muted uppercase">
            * Where applicable
          </span>
        )}
      </Span>
    </li>
  );
};

const CELLS = [
  ["Domestic", "Up to 20,000 L"],
  ["Commercial overhead", "Up to 20,00,000 L"],
  ["Commercial underground", "Up to 1 crore L"],
  ["Institutional", "Scheduled under an AMC"],
];

const renderCell = ([title, value]: string[]) => {
  return (
    <div key={title} className="flex flex-col gap-1 bg-surface p-6">
      <Span $size="small" $weight="600" className="text-heading">
        {title}
      </Span>
      <Span
        $size="caption"
        className="font-mono tracking-[0.04em] text-fg-muted"
      >
        {value}
      </Span>
    </div>
  );
};

/** The brand's graphic devices: Level Line, reference tag, step track, ruled cells. */
const Motifs = () => {
  return (
    <Section
      id="motifs"
      number={11}
      title="Motifs"
      intro="Four devices carry the spec-sheet look. They are structure, not decoration: each encodes something true about the content."
    >
      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-3">
          <H3 $margin="0">Level Line</H3>
          <P
            $size="h1"
            $weight="700"
            className="font-heading text-heading uppercase font-stretch-78%"
          >
            15+ years
          </P>
          <span aria-hidden="true" className="block h-[3px] w-12 bg-marker" />
          <P $size="small" className="text-fg-muted">
            A 3 px marker rule, 48 px long with square ends, 12 px under the
            page H1 or the one key figure. One per view, never on photos,
            buttons or alerts.
          </P>
        </div>
        <div className="flex flex-col gap-3">
          <H3 $margin="0">Reference tag</H3>
          <span className="font-mono text-(length:--fs-ref) font-medium tracking-widest text-marker-text uppercase">
            02&nbsp;&nbsp;REF CT-WEB-02
          </span>
          <span className="font-mono text-(length:--fs-ref) font-medium tracking-widest text-fg-muted uppercase">
            03&nbsp;&nbsp;REF CT-WEB-03
          </span>
          <P $size="small" className="text-fg-muted">
            Plain mono caps above each section&apos;s H2, no box. At most one
            accent tag per view; the rest use fg-muted.
          </P>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <H3 $margin="0">Step track</H3>
        <ol className="flex flex-col gap-6 sm:flex-row sm:gap-0">
          {STEPS.map(renderStep)}
        </ol>
        <P $size="small" className="max-w-[68ch] text-fg-muted">
          The 5-step process, always these five in this order. Square 40 px
          nodes (32 below 768 px), radius 2 px, 2 px outline, mono numerals, 2
          px connectors. Step 05 is dashed and marked where applicable. The
          active step is filled navy with a Level Line under it. Built as an
          ordered list.
        </P>
      </div>

      <div className="flex flex-col gap-4">
        <H3 $margin="0">Ruled cells</H3>
        <div className="grid gap-px overflow-hidden rounded-xs border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {CELLS.map(renderCell)}
        </div>
        <P $size="small" className="max-w-[68ch] text-fg-muted">
          Cards are cells in a ruled grid: a 1 px gap over the border colour,
          cells filled with surface at radius 0, padding 24 to 40 px. No
          shadows, no lift on hover.
        </P>
      </div>
    </Section>
  );
};

export default Motifs;
