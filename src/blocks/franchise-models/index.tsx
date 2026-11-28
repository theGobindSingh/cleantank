import Actions from "@/blocks/actions";
import type { FranchiseModelsBlock } from "@/payload-types";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import { H3, P } from "@components/html";
import Section from "@components/section";
import SectionHeadline from "@components/section-headline";
import type { Locale } from "@i18n";
import { tw } from "@utils/tw";
import { useId } from "react";

interface FranchiseModelsProps extends FranchiseModelsBlock {
  locale: Locale;
}

type Model = FranchiseModelsBlock["models"][number];
type Point = NonNullable<Model["points"]>[number];

// Static class names, so Tailwind sees each one.
const COLUMNS: Record<number, string> = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

// CT-470 trial: separate cards raised from a stone ground of their own color
// (franchise-models.css). false restores CT-467's flat cards and the section's
// own background.
const IS_RAISED = true;

const renderPoint = (point: Point, index: number) => {
  return (
    <li key={point.id ?? index} className="py-2 text-pretty">
      {point.text}
    </li>
  );
};

/**
 * The franchise models as equal cells of one ruled grid, or as separate cards
 * with `isSeparate`: side by side from `lg` up, with each cell's name, figure,
 * summary and points on shared rows (`subgrid`) so they compare line for line;
 * stacked below. The financial disclaimer sits right under the figures at body
 * size, then the buttons. Separate cards put the heading, line and disclaimer
 * in a copy column instead: above the cards below `2xl`, beside them from `2xl`
 * up, as wide as the heading's longer line.
 */
const FranchiseModels = ({
  heading,
  highlight,
  text,
  investmentLabel,
  models,
  note,
  actions,
  isSeparate,
  isSubtle,
  locale,
}: FranchiseModelsProps) => {
  const noteId = useId();
  const renderModel = (model: Model, index: number) => {
    return (
      <li
        key={model.id ?? index}
        className={tw(
          "grid content-start gap-4 p-6 md:p-10 lg:row-span-4 lg:grid-rows-subgrid",
          isSeparate && "rounded-sm border 2xl:p-6",
          isSeparate && IS_RAISED
            ? "franchise-card-raised bg-bg-subtle"
            : tw(isSeparate && "border-border", "bg-surface"),
        )}
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
          <p
            className={tw(
              "font-heading text-(length:--fs-h2) leading-none font-bold text-heading tabular-nums md:text-(length:--fs-h1)",
              isSeparate && "2xl:text-(length:--fs-h2)",
            )}
          >
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
          <ul className="divide-y divide-border self-start border-y border-border text-fg-muted">
            {model.points.map(renderPoint)}
          </ul>
        )}
      </li>
    );
  };

  const cards = (
    <ul
      aria-describedby={noteId}
      className={tw(
        "grid",
        isSeparate
          ? "gap-6 lg:gap-8"
          : "gap-px overflow-hidden rounded-xs border border-border bg-border",
        COLUMNS[models.length],
      )}
    >
      {models.map(renderModel)}
    </ul>
  );

  if (isSeparate) {
    return (
      <CommonFullWidthWrapper
        wrapperClassName={tw(
          (isSubtle === true || IS_RAISED) && "bg-bg-subtle",
        )}
        className="flex flex-col gap-10 py-8 md:gap-12 md:py-10 lg:py-12"
      >
        <div className="grid gap-10 md:gap-12 2xl:grid-cols-[auto_minmax(0,1fr)] 2xl:items-start 2xl:gap-x-10">
          {/* contain-inline-size: from 2xl the heading alone sets the column's width */}
          <div className="flex flex-col gap-4">
            <SectionHeadline heading={heading} highlight={highlight} />
            {text && (
              <P className="max-w-[60ch] text-pretty text-fg-muted 2xl:contain-inline-size">
                {text}
              </P>
            )}
            <P
              id={noteId}
              className="max-w-[68ch] text-pretty text-fg-muted 2xl:contain-inline-size"
            >
              {note}
            </P>
          </div>
          {cards}
        </div>
        <Actions actions={actions} locale={locale} />
      </CommonFullWidthWrapper>
    );
  }

  return (
    <Section
      heading={heading}
      highlight={highlight}
      text={text}
      isSubtle={isSubtle}
    >
      <div className="flex flex-col gap-4">
        {cards}
        <P id={noteId} className="max-w-[68ch] text-pretty text-fg-muted">
          {note}
        </P>
      </div>
      <Actions actions={actions} locale={locale} />
    </Section>
  );
};

export default FranchiseModels;
