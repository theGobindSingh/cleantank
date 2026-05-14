import { SvgIconComponent } from "@mui/icons-material";
import { StaticImageData } from "next/image";

export interface AboutProps {
  className?: string;
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export interface AboutHeroProps {
  chip: string;
  title: string;
  subtitle: string;
  imgSrc: string;
}

// ─── Core Operation Pillars ───────────────────────────────────────────────────

export interface PillarItem {
  icon: SvgIconComponent;
  title: string;
  description: string;
}

export interface PillarsSectionProps {
  chip?: string;
  title?: string;
  description?: string;
  items?: PillarItem[];
}

// ─── Credentials Strip ────────────────────────────────────────────────────────

export interface CredentialItem {
  icon: SvgIconComponent;
  title: string;
  subTitle: string;
}

export interface CredentialsSectionProps {
  items: CredentialItem[];
}

// ─── Technology (Precision Machines) ─────────────────────────────────────────

export interface TechnologyPoint {
  icon: SvgIconComponent;
  title: string;
  description: string;
}

export interface TechnologySectionProps {
  chip?: string;
  title?: string;
  points?: TechnologyPoint[];
  images?: {
    src: string | StaticImageData;
    alt: string;
  }[];
}

// ─── Company Timeline ─────────────────────────────────────────────────────────

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface TimelineSectionProps {
  chip?: string;
  title?: string;
  events?: TimelineEvent[];
}

// ─── Values Banner ────────────────────────────────────────────────────────────

export interface ValuesBannerProps {
  statement: string;
  attribution?: string;
}
