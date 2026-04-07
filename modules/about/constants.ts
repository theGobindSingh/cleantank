import {
  CredentialItem,
  PillarItem,
  TechnologyPoint,
  TimelineEvent,
  ValuesBannerProps,
} from "@modules/about/types";
import {
  BuildOutlined,
  EngineeringOutlined,
  HealthAndSafetyOutlined,
  NatureOutlined,
  PrecisionManufacturingOutlined,
  SecurityRounded,
  SpeedOutlined,
  TaskAltRounded,
  VerifiedRounded,
  VisibilityOutlined,
} from "@mui/icons-material";

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const aboutHeroProps = {
  chip: "About Clean Tank Services",
  title: "Defining the Standard of Tank Purity.",
  subtitle:
    "A decade of precision engineering, government-grade compliance, and zero-compromise water hygiene — delivered across India's most critical institutions.",
  imgSrc:
    "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&w=1600",
};

// ─── Core Operation Pillars ───────────────────────────────────────────────────

export const pillarsSectionMeta = {
  chip: "Core Operation Pillars",
  title: "What Drives Every Deployment",
  description:
    "Every project we undertake is governed by four non-negotiable principles that define our operational identity.",
};

export const pillarItems: PillarItem[] = [
  {
    icon: HealthAndSafetyOutlined,
    title: "Public Safety",
    description:
      "Drinking water quality is a public health imperative. We treat every tank as critical infrastructure — zero shortcuts, zero risk.",
  },
  {
    icon: VisibilityOutlined,
    title: "Integrity Testing",
    description:
      "Post-clean water samples are verified through certified laboratory analysis. You receive a full quality report with every service.",
  },
  {
    icon: SecurityRounded,
    title: "Process Transparency",
    description:
      "End-to-end documentation, timestamped photo logs, and audit-ready reports are generated for every project — no exceptions.",
  },
  {
    icon: NatureOutlined,
    title: "Environmental Stewardship",
    description:
      "We use food-grade, biodegradable agents and follow regulated wastewater disposal protocols on every site.",
  },
  {
    icon: BuildOutlined,
    title: "Continuous Innovation",
    description:
      "We invest in R&D to integrate the latest cleaning technologies and refine our processes — ensuring we set the industry standard, not follow it.",
  },
];

// ─── Credentials Strip ────────────────────────────────────────────────────────

export const credentialItems: CredentialItem[] = [
  {
    icon: VerifiedRounded,
    title: "ISO 9001:2015",
    subTitle: "Quality Certified",
  },
  {
    icon: TaskAltRounded,
    title: "5000+",
    subTitle: "Projects Completed",
  },
  {
    icon: BuildOutlined,
    title: "8 States",
    subTitle: "Active Operations",
  },
  {
    icon: EngineeringOutlined,
    title: "200+",
    subTitle: "Certified Technicians",
  },
];

// ─── Technology Section ───────────────────────────────────────────────────────

export const technologySectionMeta = {
  chip: "Our Technology",
  title: "Precision Machines.\nNot Manual Labor.",
};

export const technologyPoints: TechnologyPoint[] = [
  {
    icon: PrecisionManufacturingOutlined,
    title: "Industrial Grade Tools",
    description:
      "Hydro-jetting rigs, industrial-capacity vacuum systems, and UVC sterilization arrays purpose-built for large-volume tanks — none of this can be replicated by manual scrubbing.",
  },
  {
    icon: EngineeringOutlined,
    title: "Trained Technicians",
    description:
      "Every operator completes our 6-week certification programme covering SOPs, chemical handling, confined-space protocols, and post-service reporting standards.",
  },
  {
    icon: SpeedOutlined,
    title: "Rapid Response",
    description:
      "Standard deployment from site assessment to full-cycle completion is within 24 hours — critical for hospitals and high-occupancy buildings with no downtime tolerance.",
  },
];

export const technologyImages = [
  {
    src: "https://images.pexels.com/photos/8961091/pexels-photo-8961091.jpeg?auto=compress&w=900",
    alt: "Technician operating industrial tank cleaning equipment",
  },
  {
    src: "https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&w=900",
    alt: "Industrial-grade hydro-jetting machine on site",
  },
];

// ─── Company Timeline ─────────────────────────────────────────────────────────

export const timelineSectionMeta = {
  chip: "Our Journey",
  title: "A Decade of Building India's Cleanest Infrastructure",
};

export const timelineEvents: TimelineEvent[] = [
  {
    year: "2015",
    title: "Founded in Chennai",
    description:
      "Clean Tank Services launched with two industrial machines and a singular mission: to professionalise water tank sanitation in India.",
  },
  {
    year: "2017",
    title: "First Government Contract",
    description:
      "Awarded a municipal corporation contract in Chennai — our first large-scale public sector engagement and the foundation of our compliance framework.",
  },
  {
    year: "2019",
    title: "500 Projects Milestone",
    description:
      "Reached 500 completed projects across healthcare, residential, and commercial verticals in Tamil Nadu and Andhra Pradesh.",
  },
  {
    year: "2020",
    title: "UV Sterilization Integration",
    description:
      "Deployed UVC spectrum sterilization across all service units — the first company in Southern India to standardise this technology at scale.",
  },
  {
    year: "2021",
    title: "ISO 9001:2015 Certified",
    description:
      "Achieved ISO 9001:2015 quality management certification, formalising our documentation and process standards across all operations.",
  },
  {
    year: "2022",
    title: "Franchise Model Launched",
    description:
      "Introduced the Clean Tank Franchise Programme with 10 territories operational in the first year, backed by full equipment and training support.",
  },
  {
    year: "2024",
    title: "National Scale",
    description:
      "Expanded to 8 states with 200+ certified technicians, 5000+ completed projects, and empanelment as a preferred vendor for government institutions in three states.",
  },
];

// ─── Values Banner ────────────────────────────────────────────────────────────

export const valuesBannerProps: ValuesBannerProps = {
  statement:
    "We don't clean tanks. We protect the water your family drinks, the water your patients depend on, and the water your city runs on.",
  attribution: "— Clean Tank Services Mission Statement",
};
