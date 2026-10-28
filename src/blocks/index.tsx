import type { Page } from "@/payload-types";
import type { Locale } from "@i18n";
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
import ProcessSection from "./process";
import RuledList from "./ruled-list";
import ServiceArea from "./service-area";
import Story from "./story";
import Testimonials from "./testimonials";
import TrustBand from "./trust-band";

interface BlocksProps {
  blocks: Page["layout"];
  locale: Locale;
}

type Block = Page["layout"][number];

/** Renders a page's layout, one component per block type. */
const Blocks = ({ blocks, locale }: BlocksProps) => {
  const renderBlock = (block: Block, index: number) => {
    switch (block.blockType) {
      case "audiences":
        return <Audiences key={block.id ?? index} {...block} locale={locale} />;
      case "hero":
        return <Hero key={block.id ?? index} {...block} locale={locale} />;
      case "process":
        return (
          <ProcessSection key={block.id ?? index} {...block} locale={locale} />
        );
      case "testimonials":
        return (
          <Testimonials key={block.id ?? index} {...block} locale={locale} />
        );
      case "trustBand":
        return <TrustBand key={block.id ?? index} {...block} />;
      case "pageIntro":
        return <PageIntro key={block.id ?? index} {...block} locale={locale} />;
      case "ruledList":
        return <RuledList key={block.id ?? index} {...block} />;
      case "compareGallery":
        return (
          <CompareGallery key={block.id ?? index} {...block} locale={locale} />
        );
      case "faq":
        return <Faq key={block.id ?? index} {...block} />;
      case "ctaBand":
        return <CtaBand key={block.id ?? index} {...block} locale={locale} />;
      case "clientsBand":
        return (
          <ClientsBand key={block.id ?? index} {...block} locale={locale} />
        );
      case "story":
        return <Story key={block.id ?? index} {...block} />;
      case "founder":
        return <Founder key={block.id ?? index} {...block} />;
      case "credentials":
        return (
          <Credentials key={block.id ?? index} {...block} locale={locale} />
        );
      case "clientList":
        return (
          <ClientList key={block.id ?? index} {...block} locale={locale} />
        );
      case "serviceArea":
        return (
          <ServiceArea key={block.id ?? index} {...block} locale={locale} />
        );
    }
  };

  return blocks.map(renderBlock);
};

export default Blocks;
