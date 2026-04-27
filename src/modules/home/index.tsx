import HeroSection from "@/src/layouts/hero-section";
import IconInfoStripSection from "@/src/layouts/icon-info-strip-section";
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
} from "@/src/modules/home/constants";
import FranchiseSection from "@/src/modules/home/franchise";
import IndustriesSection from "@/src/modules/home/industries";
import HomeProcessSection from "@/src/modules/home/process";
import TestimonialsSection from "@/src/modules/home/testimonials";
import { HomeProps } from "@/src/modules/home/types";
import img from "@assets/images/water_gun.png";
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
