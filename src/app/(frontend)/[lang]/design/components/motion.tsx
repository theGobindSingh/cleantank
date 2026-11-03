import { P, Span } from "@components/html";
import Section from "./section";

// Literal classes per row so Tailwind generates them
const DURATIONS = [
  { ms: 70, use: "Small state changes", className: "duration-[70ms]" },
  { ms: 110, use: "Hover, buttons", className: "duration-[110ms]" },
  { ms: 150, use: "Menus, tooltips", className: "duration-[150ms]" },
  {
    ms: 240,
    use: "The ceiling: panels, the Level Line",
    className: "duration-[240ms]",
  },
];

const EASINGS = [
  {
    name: "Standard",
    curve: "cubic-bezier(0.2, 0, 0.38, 0.9)",
    className: "ease-[cubic-bezier(0.2,0,0.38,0.9)]",
  },
  {
    name: "Entrance",
    curve: "cubic-bezier(0, 0, 0.38, 0.9)",
    className: "ease-[cubic-bezier(0,0,0.38,0.9)]",
  },
  {
    name: "Exit",
    curve: "cubic-bezier(0.2, 0, 1, 0.9)",
    className: "ease-[cubic-bezier(0.2,0,1,0.9)]",
  },
];

const Track = ({
  label,
  sub,
  className,
}: {
  label: string;
  sub: string;
  className: string;
}) => {
  return (
    <div className="group flex items-center gap-4 rounded-sm border border-border bg-surface p-4">
      <div className="flex w-48 shrink-0 flex-col">
        <Span $size="small" $weight="600">
          {label}
        </Span>
        <span className="font-mono text-(length:--fs-ref) text-fg-muted">
          {sub}
        </span>
      </div>
      <span
        aria-hidden="true"
        className={`block size-6 rounded-xs bg-primary transition-transform group-hover:translate-x-2 ${className}`}
      />
    </div>
  );
};

const renderDuration = (row: (typeof DURATIONS)[number]) => {
  return (
    <Track
      key={row.ms}
      label={`${row.ms} ms`}
      sub={row.use}
      className={`ease-[cubic-bezier(0.2,0,0.38,0.9)] ${row.className}`}
    />
  );
};

const renderEasing = (row: (typeof EASINGS)[number]) => {
  return (
    <Track
      key={row.name}
      label={row.name}
      sub={row.curve}
      className={`duration-240 ${row.className}`}
    />
  );
};

/** Durations and easings, previewed on hover with the 8 px travel limit. */
const Motion = () => {
  return (
    <Section
      id="motion"
      number={14}
      title="Motion"
      intro="Functional only: exact, brief, still. Animate opacity and transform only, with at most 8 px of travel. Hover a row to play it; each square moves the full 8 px."
    >
      <div className="grid gap-3 lg:grid-cols-2">
        <div className="flex flex-col gap-3">
          {DURATIONS.map(renderDuration)}
        </div>
        <div className="flex flex-col gap-3">{EASINGS.map(renderEasing)}</div>
      </div>
      <P $size="small" className="max-w-[68ch] text-fg-muted">
        The one sequence is the 5-step band: it plays once when half in view,
        nodes fading in 120 ms apart, then the Level Line draws in 240 ms. Never
        bounce, overshoot, shake, pulse, parallax, scroll fly-ins, staggered
        card lists, count-up numbers, carousels, shimmer or autoplay. The hero
        photos are the one exception to parallax (owner's call): they scroll at
        50% of the page's speed, and stay put under reduced motion. With reduced
        motion turned on, defaults.css cuts every transition to nothing, and
        these squares jump instead of slide.
      </P>
    </Section>
  );
};

export default Motion;
