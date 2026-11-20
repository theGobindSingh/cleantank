import Actions from "@/blocks/actions";
import type { FranchiseModelsBlock } from "@/payload-types";
import { H3, P } from "@components/html";
import Section from "@components/section";
import type { Locale } from "@i18n";
import { tw } from "@utils/tw";

interface FranchiseModelsProps extends FranchiseModelsBlock {
  locale: Locale;
  whatsappText?: string | undefined;
}

type Model = FranchiseModelsBlock["models"][number];
type Point = NonNullable<Model["points"]>[number];

// Static class names, so Tailwind sees each one.
const COLUMNS: Record<number, string> = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

const renderPoint = (point: Point, index: number) => {
  return (
    <li key={point.id ?? index} className="py-2 text-pretty">
      {point.text}
    </li>
  );
};

/**
 * The franchise models as equal cells of one ruled grid: side by side from
 * `lg` up, with each cell's name, figure, summary and points on shared rows
 * (`subgrid`) so they compare line for line; stacked below. The financial
 * disclaimer sits right under the figures at body size, then the buttons.
 */
const FranchiseModels = ({
  heading,
  highlight,
  text,
  investmentLabel,
  models,
  note,
  actions,
  isSubtle,
  locale,
  whatsappText,
}: FranchiseModelsProps) => {
  const renderModel = (model: Model, index: number) => {
    return (
      <li
        key={model.id ?? index}
        className="grid content-start gap-4 bg-surface p-6 md:p-10 lg:row-span-4 lg:grid-rows-subgrid"
      >
        <H3 $size="h3" $margin="0">
          {model.name}
        </H3>
        <div className="flex flex-col gap-2">
          {investmentLabel && (
            <P
              $size="ref"
              $weight="500"
              className="font-mono tracking-widest text-fg-muted uppercase"
            >
              {investmentLabel}
            </P>
          )}
          <p className="font-heading text-(length:--fs-h2) leading-none font-bold text-heading tabular-nums md:text-(length:--fs-h1)">
            {model.investment}
          </p>
          {model.investmentNote && (
            <P $size="small" className="text-fg-muted">
              {model.investmentNote}
            </P>
          )}
        </div>
        <P className="text-pretty">{model.summary}</P>
        {model.points && model.points.length > 0 && (
          <ul className="divide-y divide-border border-y border-border text-fg-muted">
            {model.points.map(renderPoint)}
          </ul>
        )}
      </li>
    );
  };

  return (
    <Section
      heading={heading}
      highlight={highlight}
      text={text}
      isSubtle={isSubtle}
    >
      <div className="flex flex-col gap-4">
        <ul
          className={tw(
            "grid gap-px overflow-hidden rounded-xs border border-border bg-border",
            COLUMNS[models.length],
          )}
        >
          {models.map(renderModel)}
        </ul>
        <P className="max-w-[68ch] text-pretty text-fg-muted">{note}</P>
      </div>
      <Actions actions={actions} locale={locale} whatsappText={whatsappText} />
    </Section>
  );
};

export default FranchiseModels;
