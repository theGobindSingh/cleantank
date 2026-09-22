import { brand, contact } from "@constants";
import heroImg from "@images/tank.png";
import { HeroSectionProps } from "@layouts/hero-section/types";
import { IconCardItem } from "@layouts/icon-card-section/types";
import { StandardSectionLayoutProps } from "@layouts/standard-section/types";
import {
  AmcSectionProps,
  CapacitiesSectionProps,
  ProcessTeaserSectionProps,
} from "@modules/services/types";
import {
  ApartmentOutlined,
  BiotechOutlined,
  BuildOutlined,
  CleaningServicesOutlined,
  DeleteSweepOutlined,
  EventRepeatOutlined,
  FactoryOutlined,
  GroupsOutlined,
  HomeOutlined,
  PrecisionManufacturingOutlined,
  PublicOutlined,
  SavingsOutlined,
  SchoolOutlined,
  ScienceOutlined,
  StorageOutlined,
  SupportAgentOutlined,
  TimerOutlined,
  VerifiedOutlined,
  WaterDropOutlined,
} from "@mui/icons-material";

// ─── Hero ────────────────────────────────────────────────────────────────────

export const servicesHeroProps: HeroSectionProps = {
  chip: "Our Services",
  title: {
    text: "Scientific & Mechanized Tank Cleaning Services",
    highlight: "Mechanized",
  },
  subtitle: `${brand.descriptor}. Professional cleaning and disinfection of domestic, commercial, institutional and large-capacity water storage tanks.`,
  imgSrc: heroImg,
};

// ─── What We Clean ───────────────────────────────────────────────────────────

export const tankTypesSectionMeta: Pick<
  StandardSectionLayoutProps,
  "chip" | "title" | "description"
> = {
  chip: "What We Clean",
  title: "Tank Types We Service",
  description:
    "Water storage tanks across every setting — sized and scoped to the site.",
};

export const tankTypeItems: IconCardItem[] = [
  {
    icon: HomeOutlined,
    title: "Domestic Tanks",
    description:
      "Household water storage tanks, cleaned and disinfected for daily use.",
  },
  {
    icon: ApartmentOutlined,
    title: "Commercial Overhead Tanks",
    description:
      "Overhead storage tanks for commercial buildings, offices and complexes.",
  },
  {
    icon: StorageOutlined,
    title: "Commercial Underground Tanks",
    description: "Large underground storage tanks serving commercial premises.",
  },
  {
    icon: SchoolOutlined,
    title: "Institutional Tanks",
    description:
      "Water storage for institutions such as schools, colleges and universities.",
  },
  {
    icon: FactoryOutlined,
    title: "Large-Capacity Facilities",
    description:
      "High-volume storage tanks at large industrial and government facilities.",
  },
  {
    icon: BuildOutlined,
    title: "Other Specialised Requirements",
    description:
      "Other tank cleaning requirements assessed and scoped on a per-site basis.",
  },
];

// ─── Tank Capacities Handled ─────────────────────────────────────────────────

export const capacitiesSectionProps: CapacitiesSectionProps = {
  chip: "Capacities",
  title: "Tank Capacities We Handle",
  items: [
    { label: "Domestic tanks", value: "Up to 20,000 litres" },
    {
      label: "Commercial overhead tanks",
      value: "Up to 20,00,000 litres (20 lakh)",
    },
    { label: "Commercial underground tanks", value: "Up to 1 crore litres" },
  ],
  closingNote:
    "…and many more — other capacities may be undertaken depending on tank design, site conditions, access and service requirements.",
};

// ─── Our 5-Step Process ──────────────────────────────────────────────────────

export const processTeaserSectionProps: ProcessTeaserSectionProps = {
  chip: "Our Process",
  title: "Our 5-Step Process",
  description:
    "A systematic, mechanized and scientific cleaning cycle for every tank.",
  steps: [
    {
      icon: WaterDropOutlined,
      title: "De-Watering",
      description: "Mechanical pumps remove remaining water from the tank.",
    },
    {
      icon: CleaningServicesOutlined,
      title: "High-Pressure Cleaning",
      description:
        "Walls, floor and roof cleaned with a high-pressure jet — up to 250 bar.",
    },
    {
      icon: DeleteSweepOutlined,
      title: "Sludge & Water Removal",
      description: "Industrial vacuum equipment removes sludge and sediment.",
    },
    {
      icon: BiotechOutlined,
      title: "Disinfection",
      description:
        "A non-toxic, biodegradable, eco-friendly anti-bacterial agent is sprayed.",
    },
    {
      icon: VerifiedOutlined,
      title: "Ultra-Violet Treatment",
      description:
        "UV treatment inside the tank, where applicable, targets remaining bacteria.",
    },
  ],
  ctaText: "See Full Process Details",
  ctaHref: "/process",
};

// ─── AMC ─────────────────────────────────────────────────────────────────────

export const amcSectionProps: AmcSectionProps = {
  chip: "AMC",
  title: "Never Miss Your Tank Cleaning Schedule",
  features: [
    "Annual scheduled cleaning programme",
    "Computerised customer/service database",
    "Advance notification of upcoming cleaning dates",
    "Planned periodic visits",
    "Service-history management",
    "Customer convenience with less follow-up",
    "Emergency support where required",
  ],
  closingNote: "AMC terms (scope, schedule and price) are agreed per customer.",
  ctaText: "Enquire About AMC",
  ctaHref: "/contact",
};

// ─── 24x7 Emergency Service ──────────────────────────────────────────────────

export const emergencySectionMeta: Pick<
  StandardSectionLayoutProps,
  "chip" | "title" | "description"
> = {
  chip: "Emergency Service",
  title: "24×7 Emergency Service",
  description:
    "Emergency tank cleaning support is available for urgent requirements, subject to location, manpower and operational availability.",
};

// ─── Pricing Approach ────────────────────────────────────────────────────────

export const pricingSectionMeta: Pick<
  StandardSectionLayoutProps,
  "chip" | "title" | "description"
> = {
  chip: "Pricing",
  title: "Transparent, Scope-Based Pricing",
  description:
    "There is no fixed public price list. Pricing depends on the scope of work, tank capacity, location, site conditions, manpower and equipment required for each project.",
};

// ─── Recommended Cleaning Frequency ──────────────────────────────────────────

export const frequencySectionMeta: Pick<
  StandardSectionLayoutProps,
  "chip" | "title" | "description"
> = {
  chip: "How Often",
  title: "How Often Should You Clean Your Tank?",
  description:
    "Recommended cleaning frequency depends on the type of organisation and its usage. As a general guide, tanks should be cleaned every 3–6 months; facilities with higher hygiene requirements may need a quarterly schedule — for example, healthcare facilities approximately every 3 months and schools approximately every 6 months. The right frequency also depends on tank type and capacity, frequency of use, water quality, sediment build-up, surrounding conditions and applicable hygiene requirements.",
};

// ─── Why Choose Us ───────────────────────────────────────────────────────────

export const whyChooseSectionMeta: Pick<
  StandardSectionLayoutProps,
  "chip" | "title" | "description"
> = {
  chip: "Why Choose Us",
  title: "Why Choose Us",
  description:
    "A scientific, mechanized approach backed by trained technicians and pan-India support.",
};

export const whyChooseItems: IconCardItem[] = [
  {
    icon: ScienceOutlined,
    title: "Scientific & Mechanized Approach",
    description: "A systematic, mechanized and scientific cleaning method.",
  },
  {
    icon: PrecisionManufacturingOutlined,
    title: "Advanced Equipment",
    description:
      "Cleaning, pumping, vacuum and treatment equipment for every job.",
  },
  {
    icon: GroupsOutlined,
    title: "Experienced, Trained Technicians",
    description: "Skilled technicians trained in the full cleaning process.",
  },
  {
    icon: TimerOutlined,
    title: "Time-Bound Execution",
    description: "Work planned and executed within agreed timelines.",
  },
  {
    icon: VerifiedOutlined,
    title: "Quality-Focused Operations",
    description: "Consistent, quality-focused execution on every project.",
  },
  {
    icon: SchoolOutlined,
    title: "Technical Training",
    description: "Ongoing technical training for our service teams.",
  },
  {
    icon: PublicOutlined,
    title: "Pan-India Support",
    description: "Technical representatives in all major cities in India.",
  },
  {
    icon: EventRepeatOutlined,
    title: "AMC Support",
    description: "Annual maintenance contracts for scheduled cleaning.",
  },
  {
    icon: SupportAgentOutlined,
    title: "Customer-Focused Service",
    description: "Service built around each customer's requirements.",
  },
  {
    icon: SavingsOutlined,
    title: "Cost-Effective Solutions",
    description: "Solutions scoped to deliver value for each project.",
  },
];

// ─── Service Enquiry CTA ─────────────────────────────────────────────────────

export const enquirySectionMeta: Pick<
  StandardSectionLayoutProps,
  "chip" | "title" | "description"
> = {
  chip: "Get In Touch",
  title: "Request a Service Quote",
  description:
    "Tell us your location, tank type, capacity and cleaning requirement.",
};

export const enquiryPhone = contact.primaryPhone;
