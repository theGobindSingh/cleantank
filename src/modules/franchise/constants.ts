import {
  FranchiseBenefitsSectionProps,
  FranchiseHeroSectionProps,
  FranchiseInquirySectionProps,
  FranchiseSuccessStoriesSectionProps,
  FranchiseSupportTrainingSectionProps,
  FranchiseTechnologyComparisonSectionProps,
} from "@modules/franchise/types";
import {
  BuildOutlined,
  EngineeringOutlined,
  MonetizationOnOutlined,
  PrecisionManufacturingOutlined,
  SecurityRounded,
  SpeedOutlined,
  TaskAltRounded,
  VerifiedRounded,
  VisibilityOutlined,
} from "@mui/icons-material";

export const franchiseHeroProps: FranchiseHeroSectionProps = {
  chip: "FRANCHISE OPPORTUNITY",
  title: {
    text: "Build a High-Trust Infrastructure Business with CleanTank",
    highlight: "High-Trust Infrastructure Business",
  },
  subtitle:
    "Own a territory powered by an ISO-aligned brand, machine-led operations, and enterprise support built for repeatable growth.",
  imgSrc:
    "https://images.pexels.com/photos/6476174/pexels-photo-6476174.jpeg?auto=compress&w=1800",
  CTAs: [
    {
      text: "Start Franchise Inquiry",
      href: "/franchise#franchise-inquiry",
      $variant: "filled",
      $color: "secondary",
      $colorWeight: "800",
      $textColor: "accent",
      $textColorWeight: "100",
      $fontWeight: "600",
    },
    {
      text: "Talk to Franchise Desk",
      href: "/contact",
      $variant: "glass",
      $withBorder: true,
      $color: "secondary",
      $colorWeight: "800",
      $textColor: "secondary",
      $textColorWeight: "800",
      $fontWeight: "600",
    },
  ],
  trustCardTitle: "Enterprise Trust Signals",
  trustCardDescription:
    "A franchise model built on audited operations, documented process control, and consistent delivery standards.",
  stats: [
    {
      label: "Quality System",
      value: "ISO 9001:2015",
      supportingText: "Process-managed service delivery",
    },
    {
      label: "Project Volume",
      value: "5000+",
      supportingText: "Completed assignments across sectors",
    },
    {
      label: "Service Confidence",
      value: "100%",
      supportingText: "Satisfaction commitment",
    },
    {
      label: "Projected Payback",
      value: "18-30 Months",
      supportingText: "Indicative franchise placeholder metric",
      isPlaceholder: true,
    },
  ],
  highlights: [
    {
      icon: VerifiedRounded,
      title: "Government-grade credibility",
      description: "Compliance-first process expectations from day one.",
    },
    {
      icon: TaskAltRounded,
      title: "Execution playbook included",
      description: "Launch with a tested SOP stack, not trial and error.",
    },
  ],
  footnote:
    "*Placeholder metrics are for planning reference and can be replaced with final franchise benchmarks.",
};

export const franchiseBenefitsSectionMeta: Pick<
  FranchiseBenefitsSectionProps,
  "chip" | "title" | "description"
> = {
  chip: "WHY CLEANTANK FRANCHISE",
  title: "A Business Model Built for Reliable Scale",
  description:
    "Structured demand, strong brand trust, and centralized execution support help you grow with lower operational friction.",
};

export const franchiseBenefitItems: NonNullable<
  FranchiseBenefitsSectionProps["items"]
> = [
  {
    icon: MonetizationOnOutlined,
    title: "Recurring Revenue Engine",
    description:
      "Annual and compliance-driven cleaning cycles create repeat demand rather than one-time jobs.",
  },
  {
    icon: SecurityRounded,
    title: "Trust-Led Market Entry",
    description:
      "Open doors faster with a credibility stack aligned to institutional expectations.",
  },
  {
    icon: BuildOutlined,
    title: "Turnkey Launch Stack",
    description:
      "Start with equipment, SOPs, and deployment standards already mapped to real operations.",
  },
  {
    icon: SpeedOutlined,
    title: "Faster Time to Execution",
    description:
      "Reduce setup delays through central onboarding and repeatable launch workflows.",
  },
  {
    icon: VisibilityOutlined,
    title: "Performance Visibility",
    description:
      "Track delivery quality and growth indicators with documented process checkpoints.",
  },
  {
    icon: VerifiedRounded,
    title: "Premium Positioning",
    description:
      "Differentiate from local vendors through machine-led service depth and audit-ready proof.",
  },
];

export const franchiseSupportTrainingSectionMeta: Pick<
  FranchiseSupportTrainingSectionProps,
  "chip" | "title" | "description"
> = {
  chip: "SUPPORT AND TRAINING",
  title: "Operational Backing Across Every Critical Layer",
  description:
    "From capability building to field execution, your team operates inside a guided system designed for scale.",
};

export const franchiseSupportItems: NonNullable<
  FranchiseSupportTrainingSectionProps["items"]
> = [
  {
    icon: EngineeringOutlined,
    label: "Training",
    title: "Role-based Technician and Manager Onboarding",
    description:
      "Structured training paths for technical execution, safety discipline, and quality reporting.",
    size: "tall",
  },
  {
    icon: PrecisionManufacturingOutlined,
    label: "Equipment",
    title: "Industrial Machine Readiness",
    description:
      "Guidance on setup, preventive maintenance, and operational readiness for every deployment.",
    size: "default",
  },
  {
    icon: VisibilityOutlined,
    label: "Marketing",
    title: "Central Campaign and Conversion Assets",
    description:
      "Local lead enablement using approved brand communication and demand-generation frameworks.",
    size: "wide",
  },
  {
    icon: SecurityRounded,
    label: "Operations",
    title: "SOP Governance and Quality Monitoring",
    description:
      "Execution checklists, compliance documentation, and escalation guidance for high-stakes sites.",
    size: "default",
  },
  {
    icon: BuildOutlined,
    label: "Supply Chain",
    title: "Consumables and Service Continuity",
    description:
      "Planned procurement support to reduce downtime risk and keep field teams deployment-ready.",
    size: "default",
  },
];

export const franchiseTechnologyComparisonSectionMeta: Omit<
  FranchiseTechnologyComparisonSectionProps,
  "rows"
> = {
  chip: "TECHNOLOGY ADVANTAGE",
  title: "CleanTank Process vs Traditional Tank Cleaning",
  description:
    "The difference is not cosmetic. It is operational control, repeatability, and confidence at scale.",
  cleanTankLabel: "CleanTank Process",
  traditionalLabel: "Traditional Method",
};

export const franchiseComparisonRows: NonNullable<
  FranchiseTechnologyComparisonSectionProps["rows"]
> = [
  {
    criteria: "Process Control",
    cleanTank: "Machine-led, stepwise protocol with defined checkpoints",
    traditional: "Crew-dependent execution with inconsistent sequencing",
  },
  {
    criteria: "Contamination Risk",
    cleanTank: "Structured flushing and controlled treatment workflow",
    traditional: "Higher variability in contamination handling",
  },
  {
    criteria: "Documentation",
    cleanTank: "Report-first, audit-ready operational records",
    traditional: "Limited traceability and non-standard records",
  },
  {
    criteria: "Turnaround Efficiency",
    cleanTank: "Optimized tooling for faster cycle completion",
    traditional: "Longer cycle times due to manual dependence",
  },
  {
    criteria: "Scalability",
    cleanTank: "Replicable playbook across teams and territories",
    traditional: "Difficult to standardize across multiple crews",
  },
  {
    criteria: "Client Confidence",
    cleanTank: "Enterprise-grade trust through process transparency",
    traditional: "Trust depends heavily on individual crew reputation",
  },
];

export const franchiseSuccessStoriesSectionMeta: Pick<
  FranchiseSuccessStoriesSectionProps,
  "chip" | "title" | "description"
> = {
  chip: "FRANCHISEE SUCCESS",
  title: "Stories from CleanTank Franchise Partners",
  description:
    "Regional partners scaled faster by combining local execution discipline with centralized systems.",
};

export const franchiseSuccessStories: NonNullable<
  FranchiseSuccessStoriesSectionProps["items"]
> = [
  {
    quote:
      "Within our first 8 months, we moved from pilot sites to repeat contracts with hospitals and managed communities. The SOP structure removed guesswork from every project handoff.",
    name: "Arvind Bhatia",
    role: "Franchise Partner",
    region: "Pune Region",
    outcome: "Scaled to 4 active field teams in year one",
  },
  {
    quote:
      "The marketing and operations support helped us win institutional conversations early. Clients responded to the process clarity, not discounting.",
    name: "Ritika Narayanan",
    role: "Franchise Owner",
    region: "Hyderabad Region",
    outcome: "Secured multi-site contracts across commercial campuses",
  },
  {
    quote:
      "What changed everything was consistency. Every team delivered in the same structured way, which built trust and referrals faster than expected.",
    name: "Sameer Kulkarni",
    role: "Regional Franchise Partner",
    region: "Ahmedabad Region",
    outcome: "Reached monthly repeat-booking momentum by quarter three",
  },
];

export const franchiseInquirySectionMeta: Omit<
  FranchiseInquirySectionProps,
  "assurances" | "fieldIds" | "fields" | "gFormConfig" | "investmentRanges"
> = {
  chip: "FRANCHISE INQUIRY",
  title: "Start Your Franchise Discussion",
  description:
    "Share your location and investment intent. Our franchise team will schedule a qualification call with the right regional context.",
  formTitle: "Franchise Application",
  formDescription:
    "Serious inquiries receive a guided next-step brief covering territory potential, launch readiness, and operating model fit.",
  submitText: "Submit Inquiry",
  investmentRangeLabel: "Investment range",
  investmentRangePlaceholder: "Select investment range",
};

export const franchiseInquiryFieldIds: FranchiseInquirySectionProps["fieldIds"] =
  {
    name: "franchise-name",
    email: "franchise-email",
    cityRegion: "franchise-city-region",
    investmentRange: "franchise-investment-range",
    cityInvestment: "franchise-city-investment",
  };

export const franchiseInquiryFields: FranchiseInquirySectionProps["fields"] = [
  {
    id: franchiseInquiryFieldIds.name,
    label: "Full name",
    placeholder: "Your full name",
    type: "text",
    autoComplete: "name",
    required: true,
  },
  {
    id: franchiseInquiryFieldIds.email,
    label: "Email",
    placeholder: "you@company.com",
    type: "email",
    autoComplete: "email",
    required: true,
  },
  {
    id: franchiseInquiryFieldIds.cityRegion,
    label: "City / region",
    placeholder: "Mumbai, Maharashtra",
    type: "text",
    autoComplete: "address-level2",
    required: true,
  },
];

export const franchiseInvestmentRanges: FranchiseInquirySectionProps["investmentRanges"] =
  ["INR 10-15L", "INR 15-25L", "INR 25-40L", "INR 40L+"];

export const franchiseInquiryAssurances: FranchiseInquirySectionProps["assurances"] =
  [
    "Dedicated franchise advisor support",
    "Territory-fit discussion with growth lens",
    "Transparent next-step process after submission",
  ];

export const franchiseGoogleFormConfig: FranchiseInquirySectionProps["gFormConfig"] =
  {
    gFormId: "10_RNU0U5WCSnjPnWOyFzAvuULvgIsQsHNvB874olga0",
    links: [
      {
        type: "text",
        entryId: "entry.1259236425",
        formId: franchiseInquiryFieldIds.name,
      },
      {
        type: "text",
        entryId: "entry.2064195984",
        formId: franchiseInquiryFieldIds.email,
      },
      {
        type: "text",
        entryId: "entry.1131631286",
        formId: franchiseInquiryFieldIds.cityInvestment,
      },
    ],
  };
