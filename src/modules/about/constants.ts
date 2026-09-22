import {
  brand,
  founder,
  iso,
  presence,
  registrations,
  serviceResultsQualifier,
} from "@constants/index";
import techImgTwo from "@images/tank.png";
import techImgOne from "@images/water_gun.png";
import { HeroSectionProps } from "@layouts/hero-section/types";
import {
  IconCardItem,
  IconCardSectionLayoutProps,
} from "@layouts/icon-card-section/types";
import {
  CredentialsSection,
  MessageSection,
  PresenceSection,
  TechnologyPoint,
  TechnologySectionProps,
  TextSection,
  ValuesBannerProps,
} from "@modules/about/types";
import {
  AssignmentOutlined,
  EngineeringOutlined,
  GroupsOutlined,
  HandshakeOutlined,
  NatureOutlined,
  PaidOutlined,
  PeopleOutlined,
  PrecisionManufacturingOutlined,
  PublicOutlined,
  SavingsOutlined,
  ScheduleOutlined,
  SchoolOutlined,
  ScienceOutlined,
  SentimentSatisfiedAltOutlined,
  VerifiedOutlined,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const aboutHeroProps: HeroSectionProps = {
  chip: "About Clean Tank Services",
  title: {
    text: brand.brandLine,
    highlight: brand.parent,
  },
  subtitle: `${brand.descriptor}. ${brand.primaryTagline}.`,
  imgSrc:
    "https://images.pexels.com/photos/5115943/pexels-photo-5115943.jpeg?auto=compress&w=1600",
};

// ─── About Clean Tank Services / About Gobind Galaxy / Our Brand / Founder ────

export const aboutCompanySection: TextSection = {
  title: "About Clean Tank Services",
  body: "Water-storage tanks are an essential part of residential, commercial and institutional water-supply systems. However, because tanks are generally located away from everyday view, their cleaning and hygiene can often be overlooked. Over time, sediment, sludge, deposits and other contaminants may accumulate inside water-storage tanks. If tanks are not cleaned and maintained appropriately, the quality and hygiene of stored water may be adversely affected. CLEAN TANK SERVICES was established as a specialized service brand of GOBIND GALAXY to address this requirement through professional, scientific and mechanized tank-cleaning solutions. Instead of relying solely on conventional cleaning practices, our service methodology uses specialized equipment, systematic cleaning procedures, disinfection and, where applicable, ultraviolet treatment. Our objective is to help homes, apartments, institutions, hospitals, hotels, commercial establishments and organizations maintain cleaner and more hygienic water-storage facilities.",
};

export const aboutGobindGalaxySection: TextSection = {
  title: "About Gobind Galaxy",
  body: "GOBIND GALAXY, the parent legal firm of CLEAN TANK SERVICES, is an established service organization engaged in professional water-storage-tank cleaning through mechanized and scientific methods since 2008. With more than 15 years of experience in this specialized service field, the firm has developed expertise in serving residential, commercial, institutional, healthcare, hospitality, educational, government and other organizations. Our approach combines customer-focused service, technical expertise, trained manpower, advanced equipment and a commitment to maintaining consistent service quality. The organization has built its service capabilities with a focus on professional execution, customer satisfaction and long-term relationships.",
};

export const ourBrandSection: TextSection = {
  title: "Our Brand",
  body: "CLEAN TANK SERVICES represents the specialized water-storage-tank cleaning and hygiene service vertical of GOBIND GALAXY.",
};

export const valuesBannerProps: ValuesBannerProps = {
  statement: brand.primaryTagline.toUpperCase(),
  attribution: "— Our Promise",
};

export const founderSection: TextSection = {
  title: `${founder.role} — ${founder.name}`,
  body: founder.founderBio,
};

// ─── Aims & Objectives ────────────────────────────────────────────────────────

export const aimsSectionMeta: Pick<
  IconCardSectionLayoutProps,
  "chip" | "title" | "description"
> = {
  chip: "Aims & Objectives",
  title: `Our Vision: ${brand.vision}`,
  description:
    "We contribute to better water-storage hygiene through professional and responsible cleaning services.",
};

export const aimsItems: IconCardItem[] = [
  {
    icon: NatureOutlined,
    title: "Environment-friendly services",
    description:
      "Promoting responsible cleaning practices and appropriate use of eco-conscious solutions.",
  },
  {
    icon: SentimentSatisfiedAltOutlined,
    title: "Customer satisfaction",
    description:
      "Understanding customer requirements and delivering organised, responsive services.",
  },
  {
    icon: VerifiedOutlined,
    title: "Quality cleaning services",
    description:
      "Maintaining systematic cleaning procedures and service standards.",
  },
  {
    icon: SavingsOutlined,
    title: "Value for money",
    description:
      "Providing practical and cost-effective professional solutions.",
  },
  {
    icon: HandshakeOutlined,
    title: "Long-term relationships",
    description:
      "Building trust and sustainable relationships with customers and institutions.",
  },
  {
    icon: GroupsOutlined,
    title: "Well-organised & helpful teams",
    description:
      "Developing trained, disciplined and customer-focused service teams.",
  },
];

// ─── Credentials & Compliance ─────────────────────────────────────────────────

export const credentialsSection: CredentialsSection = {
  isoStatement: iso.safeWording,
  isoScope: iso.scope,
  pan: registrations.pan,
  gstin: registrations.gstin,
  registrationsList: [...registrations.list],
};

// ─── Pan-India Presence ───────────────────────────────────────────────────────

export const presenceSection: PresenceSection = {
  states: [...presence.states],
  technicalRepresentativesLine: presence.technicalRepresentativesLine,
};

// ─── Our Message ──────────────────────────────────────────────────────────────

export const messageSection: MessageSection = {
  lines: [
    "Water Itself Is Life",
    "Water, the Wonder Drug",
    "Health Is Wealth",
    "Think Hygiene. Clean Your Water Storage Tank.",
    "Excellence in Hygiene and Healthcare",
    "Bacteria-Free, Safe Drinking Water Tanks",
    "A New Standard in Water Tank Cleaning Services",
    "Be Concerned About Health & Hygiene. Look Inside Your Water Storage Tank.",
  ],
  qualifier: serviceResultsQualifier,
};

// ─── Why Choose Us ────────────────────────────────────────────────────────────

export const whyChooseUsSectionMeta: Pick<
  IconCardSectionLayoutProps,
  "chip" | "title"
> = {
  chip: "Why Choose Us",
  title: "Why Choose Clean Tank Services",
};

export const whyChooseUsItems: IconCardItem[] = [
  {
    icon: ScienceOutlined,
    title: "Scientific & mechanized approach",
    description:
      "A professional, scientific and mechanized approach to tank cleaning.",
  },
  {
    icon: PrecisionManufacturingOutlined,
    title: "Advanced equipment",
    description: "Cleaning, pumping, vacuum and treatment equipment.",
  },
  {
    icon: EngineeringOutlined,
    title: "Experienced, trained technicians",
    description: "Skilled technicians experienced in tank-cleaning operations.",
  },
  {
    icon: ScheduleOutlined,
    title: "Time-bound execution",
    description: "Complete assigned work within the agreed schedule.",
  },
  {
    icon: WorkspacePremiumOutlined,
    title: "Quality-focused operations",
    description: "Consistent, quality-focused service operations.",
  },
  {
    icon: SchoolOutlined,
    title: "Technical training",
    description:
      "Periodic training and workshops under senior service executives.",
  },
  {
    icon: PublicOutlined,
    title: "Pan-India support",
    description: "Technical representatives in major cities, multiple states.",
  },
  {
    icon: AssignmentOutlined,
    title: "AMC support",
    description: "Annual maintenance contract (AMC) support.",
  },
  {
    icon: PeopleOutlined,
    title: "Customer-focused service",
    description: "A customer-focused approach to service delivery.",
  },
  {
    icon: PaidOutlined,
    title: "Cost-effective solutions",
    description: "Cost-effective, value-driven service solutions.",
  },
];

// ─── Technology / Professional Execution (also consumed by the Process page) ──

export const technologySectionMeta: Pick<
  TechnologySectionProps,
  "chip" | "title"
> = {
  chip: "Professional Execution",
  title: "Professional Execution",
};

export const technologyPoints: TechnologyPoint[] = [
  {
    icon: EngineeringOutlined,
    title: "Systematic Procedures",
    description:
      "Trained technicians follow systematic procedures and use equipment according to tank size, construction, condition and site requirements.",
  },
  {
    icon: PrecisionManufacturingOutlined,
    title: "Advanced Equipment",
    description:
      "Cleaning, pumping, vacuum and treatment equipment support every stage of the service.",
  },
];

export const technologyImages = [
  {
    src: techImgOne,
    alt: "Technician operating industrial tank cleaning equipment",
  },
  {
    src: techImgTwo,
    alt: "Industrial-grade hydro-jetting machine on site",
  },
];
