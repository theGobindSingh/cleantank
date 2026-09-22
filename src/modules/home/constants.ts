import {
  brand,
  cleaningProcessSteps,
  clientGroupLabels,
  clients,
  contact,
  iso,
  presence,
} from "@constants";
import { HeroSectionProps } from "@layouts/hero-section/types";
import { IconCardItem } from "@layouts/icon-card-section/types";
import { HeroStripProps } from "@layouts/icon-info-strip-section/types";
import {
  FranchiseSectionProps,
  IndustriesSectionProps,
  PresenceSectionProps,
  ServiceCardsSectionProps,
  TestimonialsSectionProps,
} from "@modules/home/types";
import {
  ApartmentOutlined,
  AssignmentOutlined,
  BuildOutlined,
  EngineeringOutlined,
  FactoryOutlined,
  HistoryOutlined,
  HomeOutlined,
  Inventory2Outlined,
  MonetizationOnOutlined,
  PrecisionManufacturingOutlined,
  PublicOutlined,
  ScheduleOutlined,
  SchoolOutlined,
  SupportAgentOutlined,
  SvgIconComponent,
  VerifiedOutlined,
  VerifiedRounded,
} from "@mui/icons-material";

// ─── Hero ─────────────────────────────────────────────────────────────────────
// INFO-BANK §10 hero line + brand.descriptor (@constants).

export const heroSectionMeta: Pick<
  HeroSectionProps,
  "chip" | "title" | "subtitle"
> = {
  chip: brand.brandLine,
  title: {
    text: "Clean Tank, Healthy Life",
    highlight: "Healthy Life",
  },
  subtitle: `${brand.descriptor}. Professional cleaning and disinfection of domestic, commercial, institutional and large-capacity water storage tanks using scientific and mechanized methods.`,
};

export const HeroCTAs: NonNullable<HeroSectionProps["CTAs"]> = [
  {
    text: "Get a Service Quote",
    href: "/contact",
    $variant: "filled",
    $color: "secondary",
    $colorWeight: "800",
    $textColor: "accent",
    $textColorWeight: "100",
    $fontWeight: "600",
  },
  {
    text: "Explore Our Services",
    href: "/services",
    $variant: "glass",
    $withBorder: true,
    $color: "secondary",
    $colorWeight: "800",
    $textColor: "secondary",
    $textColorWeight: "800",
    $fontWeight: "600",
  },
];

// ─── Trust Strip ────────────────────────────────────────────────────────────
// 5 real facts (INFO-BANK §1, §4). brand.experience/iso.standard from @constants.

export const heroStripItems: HeroStripProps["items"] = [
  {
    icon: HistoryOutlined,
    title: brand.experience,
    subTitle: `Serving Since ${brand.established}`,
  },
  {
    icon: VerifiedRounded,
    title: iso.standard,
    subTitle: "Certified Quality Management",
  },
  {
    icon: PrecisionManufacturingOutlined,
    title: "Mechanized",
    subTitle: "Scientific Cleaning Method",
  },
  {
    icon: PublicOutlined,
    title: "Pan-India",
    subTitle: "Technical Representatives",
  },
  {
    icon: SupportAgentOutlined,
    title: "24x7",
    subTitle: "Emergency Service",
  },
];

// ─── About Clean Tank Services ────────────────────────────────────────────────
// INFO-BANK §6 website-safe copy.

export const aboutSectionMeta = {
  chip: "About Us",
  title: "About Clean Tank Services",
  description:
    "Water-storage tanks are an essential part of residential, commercial and institutional water-supply systems. However, because tanks are generally located away from everyday view, their cleaning and hygiene can often be overlooked. Over time, sediment, sludge, deposits and other contaminants may accumulate inside water-storage tanks. Clean Tank Services was established as a specialized service brand of Gobind Galaxy to address this requirement through professional, scientific and mechanized tank-cleaning solutions using specialized equipment, systematic cleaning procedures, disinfection and, where applicable, ultraviolet treatment.",
} as const;

export const aboutCta = {
  text: "Learn More",
  href: "/about-us",
} as const;

// ─── Our Services ─────────────────────────────────────────────────────────────
// Tank types from INFO-BANK §4 — no capacity numbers (those live on /services).

export const serviceCardsSectionMeta: Pick<
  ServiceCardsSectionProps,
  "chip" | "title" | "description"
> = {
  chip: "What We Clean",
  title: "Our Services",
  description:
    "Scientific and mechanized cleaning for every kind of water storage tank.",
};

export const serviceCardItems: NonNullable<ServiceCardsSectionProps["items"]> =
  [
    {
      icon: HomeOutlined,
      title: "Domestic Tanks",
      description:
        "Cleaning and disinfection of household overhead and underground water storage tanks.",
    },
    {
      icon: ApartmentOutlined,
      title: "Commercial Overhead Tanks",
      description:
        "Scientific cleaning for overhead tanks serving offices, hotels and commercial complexes.",
    },
    {
      icon: Inventory2Outlined,
      title: "Commercial Underground Tanks",
      description:
        "Mechanized cleaning and sludge removal for underground tanks at commercial premises.",
    },
    {
      icon: SchoolOutlined,
      title: "Institutional Tanks",
      description:
        "Tank cleaning for schools, colleges, universities, hospitals and other institutional campuses.",
    },
    {
      icon: FactoryOutlined,
      title: "Large-Capacity Facility Tanks",
      description:
        "Cleaning solutions for large-capacity water storage at industrial and civic facilities.",
    },
    {
      icon: BuildOutlined,
      title: "Other Specialised Requirements",
      description:
        "Cleaning solutions tailored to tank configurations outside these standard categories.",
    },
  ];

export const serviceCardsCta = {
  text: "View All Services",
  href: "/services",
} as const;

// ─── Our Scientific Cleaning Process ──────────────────────────────────────────
// Real 5-step process (INFO-BANK §5A), single source of truth at
// `@constants.cleaningProcessSteps` — mapped to this section's simpler
// {icon, title, description} item shape.

export const processSectionMeta = {
  title: "Our Scientific Cleaning Process",
} as const;

export const processItems: {
  icon: SvgIconComponent;
  title: string;
  description: string;
}[] = cleaningProcessSteps.map((step) => {
  return {
    icon: step.mainIcon as SvgIconComponent,
    title: step.title.replace(/\n/g, " "),
    description: step.description,
  };
});

// ─── Why Choose Us ─────────────────────────────────────────────────────────────
// INFO-BANK §4 "Why choose us" — 10 points.

export const whyChooseUsSectionMeta = {
  title: "Why Choose Us",
} as const;

export const whyChooseUsItems: IconCardItem[] = [
  {
    icon: PrecisionManufacturingOutlined,
    title: "Scientific & Mechanized Approach",
    description: "Cleaning carried out using scientific, mechanized methods.",
  },
  {
    icon: BuildOutlined,
    title: "Advanced Equipment",
    description:
      "Specialized cleaning, pumping, vacuum and treatment equipment.",
  },
  {
    icon: EngineeringOutlined,
    title: "Experienced, Trained Technicians",
    description: "A team of experienced and trained service technicians.",
  },
  {
    icon: ScheduleOutlined,
    title: "Time-Bound Execution",
    description: "Assigned work completed within the agreed schedule.",
  },
  {
    icon: VerifiedOutlined,
    title: "Quality-Focused Operations",
    description: "Operations centred on consistent service quality.",
  },
  {
    icon: SchoolOutlined,
    title: "Technical Training",
    description:
      "Periodic training and workshops conducted under senior service executives.",
  },
  {
    icon: PublicOutlined,
    title: "Pan-India Support",
    description:
      "Technical representatives in major cities across multiple states.",
  },
  {
    icon: AssignmentOutlined,
    title: "AMC Support",
    description: "Annual Maintenance Contracts for scheduled upkeep.",
  },
  {
    icon: SupportAgentOutlined,
    title: "Customer-Focused Service",
    description: "Service delivery built around customer requirements.",
  },
  {
    icon: MonetizationOnOutlined,
    title: "Cost-Effective Solutions",
    description: "Solutions structured to be cost-effective for customers.",
  },
];

// ─── Water Hygiene Matters ─────────────────────────────────────────────────────
// INFO-BANK §6.

export const waterHygieneSectionMeta = {
  title: "Water Hygiene Matters",
  description:
    "Contaminated water can contribute to a range of waterborne illnesses. Proper maintenance of water-storage infrastructure is therefore an important part of an overall water-hygiene and facility-maintenance programme. With rapid urbanization and the growth of apartment communities, institutions and commercial facilities across India, greater attention to the cleanliness of common water-storage utilities has become increasingly important.",
} as const;

export const waterHygieneTagline =
  "Clean Water Storage. Better Hygiene. Healthier Living.";

// ─── Industries / Who We Serve ─────────────────────────────────────────────────
// INFO-BANK §4 aims / §6 / §7 client sectors. Images: only the 4 whitelisted
// pexels photo IDs already in use elsewhere — reused across 6 cards.

export const industriesSectionMeta: Pick<
  IndustriesSectionProps,
  "chip" | "title" | "description"
> = {
  title: "Who We Serve",
  description:
    "Scientific tank-cleaning solutions for government, healthcare, industrial, hospitality & residential and institutional clients across India.",
};

// Same five client groups as `/clients` — labels come from `@constants` so the
// two sections can never drift apart.
export const industryItems: NonNullable<IndustriesSectionProps["items"]> = [
  {
    title: clientGroupLabels.government,
    subTitle: "Government departments, municipal corporations and PSUs",
    imgSrc:
      "https://images.pexels.com/photos/351264/pexels-photo-351264.jpeg?auto=compress&w=900",
  },
  {
    title: clientGroupLabels.healthcare,
    subTitle: "Hospitals and healthcare facilities",
    imgSrc:
      "https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&w=900",
  },
  {
    title: clientGroupLabels.industrial,
    subTitle: "Offices, factories and commercial premises",
    imgSrc:
      "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&w=900",
  },
  {
    title: clientGroupLabels.hospitalityAndResidential,
    subTitle: "Hotels, housing societies and apartment communities",
    imgSrc:
      "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&w=900",
  },
  {
    title: clientGroupLabels.institutional,
    subTitle: "Schools, colleges, universities and research institutions",
    imgSrc:
      "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&w=900",
  },
];

// ─── Our Clientele ──────────────────────────────────────────────────────────
// Real client names, spelled exactly as in `@constants.clients`.

export const clienteleSectionMeta = {
  title: "Our Clientele",
  description: `Trusted by organisations including ${clients.government[0]}, ${clients.institutional[1]}, ${clients.healthcare[2]}, ${clients.healthcare[4]} and ${clients.government[8]}.`,
} as const;

export const clienteleCta = {
  text: "View All Clients",
  href: "/clients",
} as const;

// ─── Pan-India Presence ───────────────────────────────────────────────────────

export const presenceSectionMeta: PresenceSectionProps = {
  chip: "Nationwide",
  title: "Pan-India Presence",
  description: presence.technicalRepresentativesLine,
  states: presence.states,
};

// ─── AMC Teaser ────────────────────────────────────────────────────────────

export const amcSectionMeta = {
  title: "Never Miss Your Tank Cleaning Schedule",
  description:
    "Our Annual Maintenance Contract keeps your tank cleaning on schedule with advance notifications, planned periodic visits and complete service-history management.",
} as const;

export const amcCta = {
  text: "Learn About Our AMC",
  href: "/services#amc",
} as const;

// ─── Franchise Teaser ─────────────────────────────────────────────────────────
// INFO-BANK §8 hedged wording — no money/ROI figures.

export const franchiseSectionMeta: Omit<FranchiseSectionProps, "points"> = {
  chip: "Franchise Opportunity",
  title: "Start Your Own Business With Clean Tank Services",
  ctaText: "Become a Franchise Partner",
  ctaHref: "/franchise",
};

export const franchisePoints: NonNullable<FranchiseSectionProps["points"]> = [
  {
    icon: SchoolOutlined,
    title: "Structured Training & Support",
    description:
      "Training, marketing, lead generation, sales and operational support.",
  },
  {
    icon: HomeOutlined,
    title: "Flexible, Low-Infrastructure Setup",
    description:
      "A small office or suitable home-based setup, depending on the model.",
  },
];

// ─── Testimonials Placeholder ──────────────────────────────────────────────────

export const testimonialsSectionMeta: Omit<TestimonialsSectionProps, "items"> =
  {
    title: "What Our Customers Say",
    description: "Real feedback from our customers, coming soon.",
  };

// TODO(owner): real testimonials pending — replace placeholder entries below
// with real customer feedback.
export const testimonialItems: NonNullable<TestimonialsSectionProps["items"]> =
  [
    {
      quote: "Customer testimonial coming soon.",
      name: "Customer Name",
      role: "Designation",
      organization: "Organisation Name",
    },
    {
      quote: "Customer testimonial coming soon.",
      name: "Customer Name",
      role: "Designation",
      organization: "Organisation Name",
    },
  ];

// ─── Final CTA ──────────────────────────────────────────────────────────────

export const finalCtaSectionMeta = {
  title: "Ready to Schedule Your Tank Cleaning?",
  description:
    "Get in touch with our team for a service quote, or reach us directly by phone or WhatsApp.",
} as const;

export const finalCtaPrimary = {
  text: "Get a Service Quote",
  href: "/contact",
} as const;

export const finalCtaContact = contact;
