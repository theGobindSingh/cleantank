import CompareSlider from "@components/compare-slider";
import { H3, P, Span } from "@components/html";
import Breakpoints from "./breakpoints";
import { SPACING } from "./data";
import Section from "./section";

const renderSpace = (step: (typeof SPACING)[number]) => {
  return (
    <div key={step} className="flex items-center gap-4">
      <span className="w-24 font-mono text-(length:--fs-caption) text-fg-muted">
        {step} · {step * 4} px
      </span>
      <span
        aria-hidden="true"
        className="h-3 bg-secondary"
        style={{ width: `calc(var(--spacing) * ${step})` }}
      />
    </div>
  );
};

const RADII = [
  [
    "rounded-none",
    "0",
    "Tables, bands, ruled cells, full-bleed images",
    "rounded-none",
  ],
  [
    "rounded-xs",
    "2 px",
    "Step nodes, checkboxes, grid containers",
    "rounded-xs",
  ],
  [
    "rounded-sm",
    "4 px",
    "Buttons, inputs, cards, alerts, image frames",
    "rounded-sm",
  ],
];

const renderRadius = ([name, value, use, className]: string[]) => {
  return (
    <div key={name} className="flex flex-col gap-2">
      <div
        aria-hidden="true"
        className={`h-16 border-2 border-primary bg-surface ${className ?? ""}`}
      />
      <span className="font-mono text-(length:--fs-caption) font-semibold">
        {name} · {value}
      </span>
      <Span $size="caption" className="text-fg-muted">
        {use}
      </Span>
    </div>
  );
};

const COLUMNS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// literal classes so Tailwind generates them: 4 columns, 8 from md, 12 from lg
const columnClass = (column: number) => {
  if (column > 8) return "hidden lg:flex";
  if (column > 4) return "hidden md:flex";
  return "flex";
};

const renderColumn = (column: number) => {
  return (
    <div
      key={column}
      className={`${columnClass(column)} h-10 items-center justify-center bg-secondary-bg font-mono text-(length:--fs-ref) text-secondary`}
    >
      {column}
    </div>
  );
};

/** Breakpoints, the column grid, spacing steps and the three radii. */
const Layout = () => {
  return (
    <Section
      id="layout"
      number={12}
      title="Layout, spacing and shape"
      intro="Content is at most 1200 px wide on a 4, 8 or 12 column grid. Spacing uses Tailwind's 4 px unit restricted to the brand steps. Corners are square or nearly square; nothing is rounder than 4 px, and there are no shadows."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <Breakpoints />
        <div className="flex flex-col gap-3">
          <H3 $margin="0">Spacing steps</H3>
          <div className="flex flex-col gap-2">{SPACING.map(renderSpace)}</div>
          <P $size="small" className="text-fg-muted">
            Use the class number (p-6, gap-4); 5, 7, 9 and 14 are off-scale.
          </P>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <H3 $margin="0">Column grid at this width</H3>
        <div className="grid grid-cols-4 gap-4 md:grid-cols-8 md:gap-6 lg:grid-cols-12">
          {COLUMNS.map(renderColumn)}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <H3 $margin="0">Page containers</H3>
        <P className="max-w-[68ch]">
          Every outermost block of a page (the header, the hero and each
          section) sits in CommonFullWidthWrapper. Its outer element spans the
          screen and carries the background or band; the inner one holds the
          content at 90% of the width below 1024 px and 85% above, never wider
          than 1200 px. The header above is one: a sticky navy band whose links
          fold into a menu below 1280 px.
        </P>
      </div>

      <div className="flex flex-col gap-3">
        <H3 $margin="0">Before and after comparison</H3>
        <P className="max-w-[68ch]">
          CompareSlider, used by the hero. Drag the divider, or focus it and use
          the arrow keys.
        </P>
        <CompareSlider
          before={{
            src: "/assets/images/compare/dirty.png",
            alt: "A concrete tank before cleaning",
          }}
          after={{
            src: "/assets/images/compare/clean.png",
            alt: "The same tank after cleaning",
          }}
          label="Before and after cleaning"
          beforeLabel="Before"
          afterLabel="After"
          className="aspect-3/2 w-full max-w-2xl rounded-sm"
        />
      </div>

      <div className="flex flex-col gap-3">
        <H3 $margin="0">Radius</H3>
        <div className="grid gap-6 sm:grid-cols-3">
          {RADII.map(renderRadius)}
        </div>
      </div>
    </Section>
  );
};

export default Layout;
