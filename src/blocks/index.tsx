import type { Page } from "@/payload-types";
import type { Locale } from "@i18n";
import type { ComponentType } from "react";
import Audiences from "./audiences";
import ClientList from "./client-list";
import ClientsBand from "./clients-band";
import CompareGallery from "./compare-gallery";
import Credentials from "./credentials";
import CtaBand from "./cta-band";
import Faq from "./faq";
import Founder from "./founder";
import Hero from "./hero";
import PageIntro from "./page-intro";
import PriceList from "./price-list";
import ProcessSection from "./process";
import RuledList from "./ruled-list";
import ServiceArea from "./service-area";
import Story from "./story";
import Testimonials from "./testimonials";
import TrustBand from "./trust-band";
import ValueProp from "./value-prop";

interface BlocksProps {
  blocks: Page["layout"];
  locale: Locale;
}

type Block = Page["layout"][number];
type BlockType = Block["blockType"];
type BlockComponent<T extends BlockType> = ComponentType<
  Extract<Block, { blockType: T }> & { locale: Locale }
>;

// One component per block type; a new block type fails the build until it is added here.
const COMPONENTS: { [T in BlockType]: BlockComponent<T> } = {
  audiences: Audiences,
  hero: Hero,
  process: ProcessSection,
  testimonials: Testimonials,
  trustBand: TrustBand,
  pageIntro: PageIntro,
  ruledList: RuledList,
  compareGallery: CompareGallery,
  faq: Faq,
  ctaBand: CtaBand,
  clientsBand: ClientsBand,
  story: Story,
  founder: Founder,
  credentials: Credentials,
  clientList: ClientList,
  serviceArea: ServiceArea,
  priceList: PriceList,
  valueProp: ValueProp,
};

/** Renders a page's layout, one component per block type. */
const Blocks = ({ blocks, locale }: BlocksProps) => {
  const renderBlock = (block: Block, index: number) => {
    const Component = COMPONENTS[block.blockType] as BlockComponent<BlockType>;
    return <Component key={block.id ?? index} {...block} locale={locale} />;
  };

  return blocks.map(renderBlock);
};

export default Blocks;
