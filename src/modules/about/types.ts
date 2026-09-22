import { SvgIconComponent } from "@mui/icons-material";
import { StaticImageData } from "next/image";

export interface AboutProps {
  className?: string;
}

// ─── Simple Text Sections (About CTS, About Gobind Galaxy, Our Brand, Founder) ─

export interface TextSection {
  chip?: string;
  title: string;
  body: string;
}

// ─── Technology / Professional Execution (also used by Process page) ────────

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

// ─── Values Banner ────────────────────────────────────────────────────────────

export interface ValuesBannerProps {
  statement: string;
  attribution?: string;
}

// ─── Credentials & Compliance ─────────────────────────────────────────────────

export interface CredentialsSection {
  isoStatement: string;
  isoScope: string;
  pan: string;
  gstin: string;
  registrationsList: string[];
}

// ─── Pan-India Presence ───────────────────────────────────────────────────────

export interface PresenceSection {
  states: string[];
  technicalRepresentativesLine: string;
}

// ─── Our Message ──────────────────────────────────────────────────────────────

export interface MessageSection {
  lines: string[];
  qualifier: string;
}
