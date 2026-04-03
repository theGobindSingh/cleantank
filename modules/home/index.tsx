import GlobalLayout from "@/layouts/global";
import HeroSection from "@components/hero-section";
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
import HeroStrip from "@modules/home/hero-strip";
import IndustriesSection from "@modules/home/industries";
import HomeProcessSection from "@modules/home/process";
import TestimonialsSection from "@modules/home/testimonials";
import { HomeProps } from "@modules/home/types";

const Home = (_: HomeProps) => (
  <GlobalLayout>
    <HeroSection
      imgSrc="https://images.pexels.com/photos/5115943/pexels-photo-5115943.jpeg"
      chip="Industrial Grade Excellence"
      title="India's Most Trusted Water Tank Cleaning Service"
      subtitle="Sterile hygiene protocols, government-grade compliance, and advanced robotic technology for high-capacity liquid storage systems."
      CTAs={HeroCTAs}
    />
    <HeroStrip items={heroStripItems} />
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
  </GlobalLayout>
);

export default Home;
