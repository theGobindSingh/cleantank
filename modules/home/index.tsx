import GlobalLayout from "@/layouts/global";
import HeroSection from "@components/hero-section";
import { HeroSectionProps } from "@components/hero-section/types";
import { HomeProps } from "@modules/home/types";

const CTAs: HeroSectionProps["CTAs"] = [
  {
    text: "Get a quote",
    href: "/quote",
    $variant: "filled",
    $color: "secondary",
    $colorWeight: "800",
    $textColor: "accent",
    $textColorWeight: "100",
    $fontWeight: "600",
  },
  {
    text: "Our Technology",
    href: "/about-us",
    $variant: "glass",
    $withBorder: true,
    $color: "secondary",
    $colorWeight: "800",
    $textColor: "secondary",
    $textColorWeight: "800",
    $fontWeight: "600",
  },
];

const Home = (_: HomeProps) => (
  <GlobalLayout>
    <HeroSection
      imgSrc="https://images.pexels.com/photos/5115943/pexels-photo-5115943.jpeg"
      chip="Industrial Grade Excellence"
      title="India's Most Trusted Water Tank Cleaning Service"
      subtitle="Sterile hygiene protocols, government-grade compliance, and advanced robotic technology for high-capacity liquid storage systems."
      CTAs={CTAs}
    />
  </GlobalLayout>
);

export default Home;
