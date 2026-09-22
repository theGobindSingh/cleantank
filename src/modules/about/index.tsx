import Button from "@components/button";
import Chip from "@components/chip";
import { P, Span } from "@components/html";
import HeroSection from "@layouts/hero-section";
import IconCardSectionLayout from "@layouts/icon-card-section";
import StandardSectionLayout from "@layouts/standard-section";
import {
  aboutCompanySection,
  aboutGobindGalaxySection,
  aboutHeroProps,
  aimsItems,
  aimsSectionMeta,
  credentialsSection,
  founderSection,
  messageSection,
  ourBrandSection,
  presenceSection,
  valuesBannerProps,
  whyChooseUsItems,
  whyChooseUsSectionMeta,
} from "@modules/about/constants";
import {
  CredentialsList,
  MessageList,
  PresenceChipRow,
  RegistrationsList,
  TextSectionBody,
} from "@modules/about/styles";
import { AboutProps } from "@modules/about/types";
import ValuesBanner from "@modules/about/values-banner";
import {
  testimonialItems,
  testimonialsSectionMeta,
} from "@modules/home/constants";
import TestimonialsSection from "@modules/home/testimonials";
import { Fragment } from "react";

const registrationMapper = (item: string) => {
  return <li key={item}>{item}</li>;
};

const stateChipMapper = (state: string) => {
  return (
    <li key={state}>
      <Chip
        $backgroundColor="secondary"
        $backgroundColorWeight="800"
        $textColorWeight="100"
      >
        {state}
      </Chip>
    </li>
  );
};

const messageLineMapper = (line: string) => {
  return (
    <li key={line}>
      <P
        $size="s"
        $color="primary"
        $colorWeight="200"
        $weight="600"
        $margin="0"
      >
        {line}
      </P>
    </li>
  );
};

const About = (_: AboutProps) => {
  return (
    <Fragment>
      <HeroSection {...aboutHeroProps} />

      <StandardSectionLayout title={aboutCompanySection.title}>
        <TextSectionBody>
          <P $size="s" $color="neutral" $colorWeight="400" $margin="0">
            {aboutCompanySection.body}
          </P>
        </TextSectionBody>
      </StandardSectionLayout>

      <StandardSectionLayout
        title={aboutGobindGalaxySection.title}
        bg="var(--color-neutral-1000)"
      >
        <TextSectionBody>
          <P $size="s" $color="neutral" $colorWeight="400" $margin="0">
            {aboutGobindGalaxySection.body}
          </P>
        </TextSectionBody>
      </StandardSectionLayout>

      <StandardSectionLayout title={ourBrandSection.title}>
        <TextSectionBody>
          <P $size="s" $color="neutral" $colorWeight="400" $margin="0">
            {ourBrandSection.body}
          </P>
        </TextSectionBody>
      </StandardSectionLayout>
      <ValuesBanner {...valuesBannerProps} />

      <StandardSectionLayout
        title={founderSection.title}
        bg="var(--color-neutral-1000)"
      >
        <TextSectionBody>
          <P $size="s" $color="neutral" $colorWeight="400" $margin="0">
            {founderSection.body}
          </P>
        </TextSectionBody>
      </StandardSectionLayout>

      <IconCardSectionLayout {...aimsSectionMeta} items={aimsItems} />

      <StandardSectionLayout title="Credentials & Compliance">
        <TextSectionBody>
          <P $size="s" $color="neutral" $colorWeight="400" $margin="0">
            {credentialsSection.isoStatement}
          </P>
          <P $size="s" $color="neutral" $colorWeight="400" $margin="0">
            {credentialsSection.isoScope}
          </P>
        </TextSectionBody>
        <CredentialsList>
          <dt>
            <Span $size="3xs" $color="primary" $colorWeight="200" $weight="700">
              PAN
            </Span>
          </dt>
          <dd>
            <P $size="3xs" $color="neutral" $colorWeight="400" $margin="0">
              {credentialsSection.pan}
            </P>
          </dd>
          <dt>
            <Span $size="3xs" $color="primary" $colorWeight="200" $weight="700">
              GSTIN
            </Span>
          </dt>
          <dd>
            <P $size="3xs" $color="neutral" $colorWeight="400" $margin="0">
              {credentialsSection.gstin}
            </P>
          </dd>
        </CredentialsList>
        <RegistrationsList>
          {credentialsSection.registrationsList.map(registrationMapper)}
        </RegistrationsList>
      </StandardSectionLayout>

      <StandardSectionLayout
        title="Pan-India Presence"
        bg="var(--color-neutral-1000)"
      >
        <PresenceChipRow>
          {presenceSection.states.map(stateChipMapper)}
        </PresenceChipRow>
        <P $size="s" $color="neutral" $colorWeight="400" $margin="1.5rem 0 0">
          {presenceSection.technicalRepresentativesLine}
        </P>
      </StandardSectionLayout>

      <StandardSectionLayout title="Our Message">
        <MessageList>{messageSection.lines.map(messageLineMapper)}</MessageList>
        <P
          $size="3xs"
          $color="neutral"
          $colorWeight="600"
          $colorAlpha={0.8}
          $margin="1.5rem 0 0"
        >
          {messageSection.qualifier}
        </P>
      </StandardSectionLayout>

      <IconCardSectionLayout
        {...whyChooseUsSectionMeta}
        items={whyChooseUsItems}
      />

      <TestimonialsSection
        {...testimonialsSectionMeta}
        items={testimonialItems}
      />

      <StandardSectionLayout
        title="Get in Touch"
        bg="var(--color-neutral-1000)"
      >
        <Button
          href="/contact"
          $variant="filled"
          $size="lg"
          $color="primary"
          $colorWeight="400"
        >
          Get a Service Quote
        </Button>
      </StandardSectionLayout>
    </Fragment>
  );
};

export default About;
