import HeroSection from "@/src/layouts/hero-section";
import IconCardSectionLayout from "@/src/layouts/icon-card-section";
import IconInfoStripSection from "@/src/layouts/icon-info-strip-section";
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
} from "@/src/modules/about/constants";
import TechnologySection from "@/src/modules/about/technology";
import TimelineSection from "@/src/modules/about/timeline";
import { AboutProps } from "@/src/modules/about/types";
import ValuesBanner from "@/src/modules/about/values-banner";
import {
  testimonialItems,
  testimonialsSectionMeta,
} from "@/src/modules/home/constants";
import TestimonialsSection from "@/src/modules/home/testimonials";
import { Fragment } from "react";

const About = (_: AboutProps) => {
  return (
    <Fragment>
      <HeroSection {...aboutHeroProps} />
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
    </Fragment>
  );
};

export default About;
