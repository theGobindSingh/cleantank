import { ImageCardProps } from "@components/image-card/types";
import { cleaningProcessSteps } from "@constants";
import heroImg from "@images/tank.png";
import { StandardSectionLayoutProps } from "@layouts/standard-section/types";

export const processHeroProps = {
  chip: "Precision Engineering",
  title: {
    text: "The 5-Step Scientific Protocol.",
    highlight: "Scientific Protocol",
  },
  subtitle:
    "Beyond basic cleaning. We employ clinical-grade methodologies and proprietary robotic assets to restore industrial storage systems to their architectural purity.",
  imgSrc: heroImg,
};

export const processSectionProps: StandardSectionLayoutProps = {
  title: "The Cleaning Cycle",
  description:
    "A systematic approach to tank integrity. No shortcuts, only data-driven restoration.",
};

export const processCardsData: ImageCardProps[] = cleaningProcessSteps.map(
  ({ imageSrc, title, description, bottomIconText, bottomIcon }) => {
    return {
      imageSrc,
      title,
      description,
      bottomIconText,
      bottomIcon,
    } as ImageCardProps;
  },
);
