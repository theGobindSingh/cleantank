import type { TrustBandBlock } from "@/payload-types";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import { H2, P } from "@components/html";

type Figure = TrustBandBlock["figures"][number];

const renderFigure = (figure: Figure, index: number) => {
  return (
    <div
      key={figure.id ?? index}
      className="flex flex-col gap-2 border-l border-secondary-border pl-6"
    >
      <dt>
        <P $size="small" $margin="0" className="text-fg-muted">
          {figure.label}
        </P>
      </dt>
      <dd className="order-first font-heading text-(length:--fs-h2) leading-none font-bold text-heading md:text-(length:--fs-h1)">
        {figure.value}
      </dd>
    </div>
  );
};

/**
 * A light secondary panel band (docs/DESIGN.md): a short label and up
 * to four key figures (one column on phones, two from `md`, four from `lg`),
 * each with a 1 px rule on its left. The label comes
 * first in the markup (dt, then dd) and shows under the figure.
 */
const TrustBand = ({ heading, figures }: TrustBandBlock) => {
  return (
    <CommonFullWidthWrapper
      wrapperClassName="bg-secondary-bg"
      className="flex flex-col gap-10 py-16 md:py-20"
    >
      <H2
        $size="ref"
        $margin="0"
        className="font-mono tracking-widest text-fg-muted uppercase"
      >
        {heading}
      </H2>
      <dl className="grid gap-x-6 gap-y-8 md:grid-cols-2 md:gap-y-10 lg:grid-cols-4">
        {figures.map(renderFigure)}
      </dl>
    </CommonFullWidthWrapper>
  );
};

export default TrustBand;
