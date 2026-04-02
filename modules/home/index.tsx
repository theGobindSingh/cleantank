import GlobalLayout from "@/layouts/global";
import HeroSection from "@components/hero-section";
import {
  HeroCTAs,
  heroStripItems,
  processItems,
} from "@modules/home/constants";
import HeroStrip from "@modules/home/hero-strip";
import HomeProcessSection from "@modules/home/process";
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
  </GlobalLayout>
);

export default Home;
