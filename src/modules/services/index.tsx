import Button from "@components/button";
import { P } from "@components/html";
import { contact } from "@constants";
import HeroSection from "@layouts/hero-section";
import IconCardSectionLayout from "@layouts/icon-card-section";
import StandardSectionLayout from "@layouts/standard-section";
import AmcSection from "@modules/services/amc";
import CapacitiesSection from "@modules/services/capacities";
import {
  amcSectionProps,
  capacitiesSectionProps,
  emergencySectionMeta,
  enquirySectionMeta,
  frequencySectionMeta,
  pricingSectionMeta,
  processTeaserSectionProps,
  servicesHeroProps,
  tankTypeItems,
  tankTypesSectionMeta,
  whyChooseItems,
  whyChooseSectionMeta,
} from "@modules/services/constants";
import ProcessTeaserSection from "@modules/services/process-teaser";
import { Fragment } from "react";

const ServicesModule = () => {
  return (
    <Fragment>
      <HeroSection {...servicesHeroProps} />
      <IconCardSectionLayout {...tankTypesSectionMeta} items={tankTypeItems} />
      <CapacitiesSection {...capacitiesSectionProps} />
      <ProcessTeaserSection {...processTeaserSectionProps} />
      <AmcSection {...amcSectionProps} />
      <StandardSectionLayout {...emergencySectionMeta} />
      <StandardSectionLayout {...pricingSectionMeta} />
      <StandardSectionLayout {...frequencySectionMeta} />
      <IconCardSectionLayout {...whyChooseSectionMeta} items={whyChooseItems} />
      <StandardSectionLayout {...enquirySectionMeta}>
        <Button
          href="/contact"
          $variant="filled"
          $size="lg"
          $color="primary"
          $colorWeight="400"
        >
          Get a Service Quote
        </Button>
        <P $size="s" $color="neutral" $colorWeight="400" $margin="1rem 0 0">
          Call us at{" "}
          <Button
            href={contact.primaryPhone.href}
            $variant="text"
            $color="secondary"
            $colorWeight="400"
          >
            {contact.primaryPhone.label}
          </Button>
        </P>
      </StandardSectionLayout>
    </Fragment>
  );
};

export default ServicesModule;
