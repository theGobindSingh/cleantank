import { StandardSectionLayoutProps } from "@layouts/standard-section/types";
import { SvgIconComponent } from "@mui/icons-material";

export interface ServicesProps {
  className?: string;
}

export interface CapacityItem {
  label: string;
  value: string;
}

export interface CapacitiesSectionProps extends Pick<
  StandardSectionLayoutProps,
  "chip" | "title"
> {
  items: CapacityItem[];
  closingNote: string;
}

export interface ProcessTeaserStep {
  icon: SvgIconComponent;
  title: string;
  description: string;
}

export interface ProcessTeaserSectionProps extends Pick<
  StandardSectionLayoutProps,
  "chip" | "title" | "description"
> {
  steps: ProcessTeaserStep[];
  ctaText: string;
  ctaHref: string;
}

export interface AmcSectionProps extends Pick<
  StandardSectionLayoutProps,
  "chip" | "title"
> {
  features: string[];
  closingNote: string;
  ctaText: string;
  ctaHref: string;
}
