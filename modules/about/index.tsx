import GlobalLayout from "@/layouts/global";
import HeroSection from "@layouts/hero-section";
import IconCardSectionLayout from "@layouts/icon-card-section";
import IconInfoStripSection from "@layouts/icon-info-strip-section";
import {
  aboutHeroProps,
  credentialItems,
  pillarItems,
  pillarsSectionMeta,
  technologyImages,
  technologyPoints,
  technologySectionMeta,
  timelineEvents,
  timelineSectionMeta,
  valuesBannerProps,
} from "@modules/about/constants";
import TechnologySection from "@modules/about/technology";
import TimelineSection from "@modules/about/timeline";
import { AboutProps } from "@modules/about/types";
import ValuesBanner from "@modules/about/values-banner";
import {
  testimonialItems,
  testimonialsSectionMeta,
} from "@modules/home/constants";
import TestimonialsSection from "@modules/home/testimonials";

const About = (_: AboutProps) => {
  return (
    <GlobalLayout>
      <HeroSection
        imgSrc={aboutHeroProps.imgSrc}
        chip={aboutHeroProps.chip}
        title={aboutHeroProps.title}
        subtitle={aboutHeroProps.subtitle}
      />
      <IconCardSectionLayout
        {...pillarsSectionMeta}
        items={pillarItems}
        areNumbersVisible={false}
      />
      <IconInfoStripSection items={credentialItems} />
      <TechnologySection
        {...technologySectionMeta}
        points={technologyPoints}
        images={technologyImages}
      />
      <TimelineSection {...timelineSectionMeta} events={timelineEvents} />
      <ValuesBanner {...valuesBannerProps} />
      <TestimonialsSection
        {...testimonialsSectionMeta}
        items={testimonialItems}
      />
    </GlobalLayout>
  );
};

export default About;
