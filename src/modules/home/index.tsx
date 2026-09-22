import Button from "@components/button";
import { P, Span } from "@components/html";
import img from "@images/water_gun.png";
import FeatureCardSection from "@layouts/feature-card-section";
import HeroSection from "@layouts/hero-section";
import IconCardSectionLayout from "@layouts/icon-card-section";
import IconInfoStripSection from "@layouts/icon-info-strip-section";
import StandardSectionLayout from "@layouts/standard-section";
import {
  aboutCta,
  aboutSectionMeta,
  amcCta,
  amcSectionMeta,
  clienteleCta,
  clienteleSectionMeta,
  finalCtaContact,
  finalCtaPrimary,
  finalCtaSectionMeta,
  franchisePoints,
  franchiseSectionMeta,
  HeroCTAs,
  heroSectionMeta,
  heroStripItems,
  industriesSectionMeta,
  industryItems,
  presenceSectionMeta,
  processItems,
  processSectionMeta,
  serviceCardItems,
  serviceCardsCta,
  serviceCardsSectionMeta,
  testimonialItems,
  testimonialsSectionMeta,
  waterHygieneSectionMeta,
  waterHygieneTagline,
  whyChooseUsItems,
  whyChooseUsSectionMeta,
} from "@modules/home/constants";
import FranchiseSection from "@modules/home/franchise";
import IndustriesSection from "@modules/home/industries";
import PresenceSection from "@modules/home/presence";
import HomeProcessSection from "@modules/home/process";
import TestimonialsSection from "@modules/home/testimonials";
import { HomeProps } from "@modules/home/types";
import { Fragment } from "react";

const Home = (_: HomeProps) => {
  return (
    <Fragment>
      <HeroSection imgSrc={img} {...heroSectionMeta} CTAs={HeroCTAs} />

      <IconInfoStripSection items={heroStripItems} />

      <StandardSectionLayout {...aboutSectionMeta}>
        <Button
          href={aboutCta.href}
          $variant="filled"
          css={{ marginTop: "1.5rem" }}
        >
          {aboutCta.text}
        </Button>
      </StandardSectionLayout>

      <FeatureCardSection
        {...serviceCardsSectionMeta}
        items={serviceCardItems}
        cta={serviceCardsCta}
        bg="var(--color-neutral-1000)"
      />

      <HomeProcessSection {...processSectionMeta} items={processItems} />

      <IconCardSectionLayout
        {...whyChooseUsSectionMeta}
        items={whyChooseUsItems}
      />

      <StandardSectionLayout {...waterHygieneSectionMeta}>
        <Span
          $size="1xs"
          $weight="600"
          $color="secondary"
          $colorWeight="700"
          $margin="1.5rem 0 0"
        >
          {waterHygieneTagline}
        </Span>
      </StandardSectionLayout>

      <IndustriesSection {...industriesSectionMeta} items={industryItems} />

      <StandardSectionLayout {...clienteleSectionMeta}>
        <Button
          href={clienteleCta.href}
          $variant="outlined"
          $color="secondary"
          $colorWeight="700"
          $fontWeight="600"
        >
          {clienteleCta.text}
        </Button>
      </StandardSectionLayout>

      <PresenceSection {...presenceSectionMeta} />

      <StandardSectionLayout {...amcSectionMeta}>
        <Button
          href={amcCta.href}
          $variant="outlined"
          $color="secondary"
          $colorWeight="700"
          $fontWeight="600"
        >
          {amcCta.text}
        </Button>
      </StandardSectionLayout>

      <FranchiseSection {...franchiseSectionMeta} points={franchisePoints} />

      <TestimonialsSection
        {...testimonialsSectionMeta}
        items={testimonialItems}
      />

      <StandardSectionLayout {...finalCtaSectionMeta}>
        <Button
          href={finalCtaPrimary.href}
          $variant="filled"
          $color="secondary"
          $colorWeight="700"
          $textColor="primary"
          $textColorWeight="100"
          $fontWeight="600"
        >
          {finalCtaPrimary.text}
        </Button>
        <P $size="s" $color="neutral" $colorWeight="400" $margin="1.25rem 0 0">
          <Button
            href={finalCtaContact.primaryPhone.href}
            $variant="text"
            $color="secondary"
            $colorWeight="700"
            $fontWeight="600"
          >
            {finalCtaContact.primaryPhone.label}
          </Button>
          <Button
            href={finalCtaContact.whatsapp.href}
            $variant="text"
            $color="secondary"
            $colorWeight="700"
            $fontWeight="600"
          >
            WhatsApp Us
          </Button>
        </P>
      </StandardSectionLayout>
    </Fragment>
  );
};

export default Home;
