import img from "@images/water_gun.png";
import HeroSection from "@layouts/hero-section";
import IconInfoStripSection from "@layouts/icon-info-strip-section";
import {
  HeroCTAs,
  franchisePoints,
  franchiseSectionMeta,
  heroStripItems,
  industriesSectionMeta,
  industryItems,
  processItems,
  testimonialItems,
  testimonialsSectionMeta,
} from "@modules/home/constants";
import FranchiseSection from "@modules/home/franchise";
import IndustriesSection from "@modules/home/industries";
import HomeProcessSection from "@modules/home/process";
import TestimonialsSection from "@modules/home/testimonials";
import { HomeProps } from "@modules/home/types";
import { Fragment } from "react";

const Home = (_: HomeProps) => {
  return (
    <Fragment>
      <HeroSection
        imgSrc={img}
        chip="Industrial Grade Excellence"
        title="India's Most Trusted Water Tank Cleaning Service"
        subtitle="Sterile hygiene protocols, government-grade compliance, and advanced robotic technology for high-capacity liquid storage systems."
        CTAs={HeroCTAs}
      />
      <IconInfoStripSection items={heroStripItems} />
      <HomeProcessSection
        title="The Precision Protocol"
        description="Our clinical cleaning process ensures every cubic meter of your storage infrastructure exceeds international safety benchmarks."
        items={processItems}
      />
      <IndustriesSection {...industriesSectionMeta} items={industryItems} />
      <FranchiseSection {...franchiseSectionMeta} points={franchisePoints} />
      <TestimonialsSection
        {...testimonialsSectionMeta}
        items={testimonialItems}
      />
    </Fragment>
  );
};

export default Home;
