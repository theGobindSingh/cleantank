import type { Page } from "@/payload-types";
import type { Locale } from "@i18n";
import Hero from "./hero";
import ProcessSection from "./process";

interface BlocksProps {
  blocks: Page["layout"];
  locale: Locale;
}

type Block = Page["layout"][number];

/** Renders a page's layout, one component per block type. */
const Blocks = ({ blocks, locale }: BlocksProps) => {
  const renderBlock = (block: Block, index: number) => {
    switch (block.blockType) {
      case "hero":
        return <Hero key={block.id ?? index} {...block} locale={locale} />;
      case "process":
        return (
          <ProcessSection key={block.id ?? index} {...block} locale={locale} />
        );
    }
  };

  return blocks.map(renderBlock);
};

export default Blocks;
