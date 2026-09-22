import { IconType } from "@/icons/types";
import {
  BiotechOutlined,
  CleaningServicesOutlined,
  DeleteSweepOutlined,
  SvgIconComponent,
  VerifiedOutlined,
  WaterDropOutlined,
} from "@mui/icons-material";
import { StaticImageData } from "next/image";

export const SITE_URL = "https://www.cleantankservices.com";
export const SITE_NAME = "Clean Tank Services";

// Primary navigation, header order: Home, About Us, Services, Process,
// Clients, Franchise, Contact. `/services` is created by a later phase.
export const siteLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Services", path: "/services" },
  { name: "Process", path: "/process" },
  { name: "Clients", path: "/clients" },
  { name: "Franchise", path: "/franchise" },
  { name: "Contact", path: "/contact" },
];

// Footer nav column — same destinations as `siteLinks`, "Contact Us" label.
export const footerNavLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Services", path: "/services" },
  { name: "Process", path: "/process" },
  { name: "Clients", path: "/clients" },
  { name: "Franchise", path: "/franchise" },
  { name: "Contact Us", path: "/contact" },
];

// Legal links — routes created by a later phase.
export const legalLinks = [
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms & Conditions", path: "/terms" },
];

export type Presence = typeof presence;
export const presence = {
  states: [
    "Madhya Pradesh",
    "Himachal Pradesh",
    "Punjab",
    "Delhi",
    "Jharkhand",
    "Uttar Pradesh",
    "Maharashtra",
  ],
  technicalRepresentativesLine:
    "Technical representatives in all major cities in India",
} as const;

export const businessContactDetails = {
  // Primary phone (Punjab / founder) — used for header CTA, hero, WhatsApp,
  // tel: links everywhere on the site.
  phone: {
    label: "+91 8699339947",
    href: "tel:+918699339947",
  },
  // Primary public email.
  email: {
    label: "admin@cleantankservices.com",
    href: "mailto:admin@cleantankservices.com",
  },
  // INFO-BANK §1 presence + §1 technical-representatives line — no invented
  // service area. No documented fixed business hours exist (INFO-BANK only
  // supports 24x7 emergency service, subject to availability), so `hours`
  // states that honestly instead of asserting opening/closing times.
  serviceArea: `Serving ${presence.states.slice(0, -1).join(", ")} and ${presence.states[presence.states.length - 1]}. ${presence.technicalRepresentativesLine}.`,
  hours:
    "24x7 emergency service, subject to location, manpower and operational availability",
  // Correspondence Office & Marketing/Sales Office, Punjab (INFO-BANK §1).
  address: {
    streetAddress:
      "B-3/26, Jamuna Apartments, Ch-Kurali Highway, NH-5, Khanpur, Kharar",
    addressLocality: "SAS Nagar",
    addressRegion: "Punjab",
    postalCode: "140301",
    addressCountry: "IN",
  } as null | {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: "IN";
  },
  // Map coordinates for the primary location — to be filled in by the owner.
  geo: null as null | { latitude: number; longitude: number },
  // Canonical profile URLs for schema `sameAs` (Google Business Profile, LinkedIn, Facebook, Instagram, etc.) — to be filled in by the owner.
  socialProfiles: [] as string[],
  // Google Business Profile URL — to be filled in by the owner.
  googleBusinessProfileUrl: null as null | string,
};

// ---------------------------------------------------------------------------
// Company facts — single source of truth for anything used in more than one
// place. Every value below is taken verbatim from refs/INFO-BANK.md.
// ---------------------------------------------------------------------------

export type Brand = typeof brand;
export const brand = {
  name: "Clean Tank Services",
  parent: "Gobind Galaxy",
  brandLine: "An Initiative of Gobind Galaxy",
  descriptor: "Scientific & Mechanized Water Storage Tank Cleaning Services",
  primaryTagline: "Clean Tank, Healthy Life",
  vision: "Clean & Healthy Nation",
  established: 2008,
  experience: "15+ years",
} as const;

export interface ContactLink {
  label: string;
  href: string;
}

export type Contact = typeof contact;
export const contact = {
  // Punjab / founder line — the primary number used sitewide.
  primaryPhone: {
    label: "+91 8699339947",
    href: "tel:+918699339947",
  } satisfies ContactLink,
  // Kanpur regd. office only — not used as a general CTA number.
  secondaryPhone: {
    label: "+91 9453517514",
    href: "tel:+919453517514",
  } satisfies ContactLink,
  whatsapp: {
    label: "+91 8699339947",
    href: "https://wa.me/918699339947",
  } satisfies ContactLink,
  emails: {
    // Primary public email.
    admin: {
      label: "admin@cleantankservices.com",
      href: "mailto:admin@cleantankservices.com",
    } satisfies ContactLink,
    gobindGalaxy: {
      label: "gobindgalaxy@gmail.com",
      href: "mailto:gobindgalaxy@gmail.com",
    } satisfies ContactLink,
  },
  website: "www.cleantankservices.com",
} as const;

export interface Office {
  label: string;
  address: string;
  phone: string;
}
export const offices: Office[] = [
  {
    label: "Regd. Office",
    address: "109/122, Nehru Nagar, R.K. Nagar, Kanpur Nagar-208012, U.P.",
    phone: "9453517514",
  },
  {
    label: "Correspondence Office & Marketing/Sales Office, Punjab",
    address:
      "B-3/26, Jamuna Apartments, Ch-Kurali Highway, NH-5, Khanpur, Kharar, SAS Nagar-140301, Punjab",
    phone: "8699339947",
  },
];

export type Registrations = typeof registrations;
export const registrations = {
  pan: "ALFPS1473F",
  gstin: "09LFS1473F5ZU",
  list: [
    "MSME / SSI",
    "GST",
    "Income Tax",
    "EPFO",
    "ESI",
    "ISO Certification",
    "BSNL Enlistment / Registration",
  ],
} as const;

export type Iso = typeof iso;
export const iso = {
  standard: "ISO 9001:2015",
  issuer: "Q2A UK Certification Board (Q2A-UK)",
  certificateNo: "Q2A-2026-0401T118011",
  issuedDate: "01-Apr-2026",
  validTo: "31 March 2029",
  scope:
    "Providing services of water storage tank cleaning services by mechanized and scientific method which includes cleaning, disinfection and maintenance of water storage tank for residential, commercial and industrial premises",
  // Exact safe wording (INFO-BANK §1). Never pair ISO claims with
  // "accredited", "internationally recognised", "UKAS" or "IAF".
  safeWording:
    "ISO 9001:2015 certified (Q2A-UK Certification Board), Certificate No. Q2A-2026-0401T118011, valid to 31 March 2029.",
} as const;

export type Founder = typeof founder;
export const founder = {
  name: "Mr. Gurdev Singh",
  role: "Founder & CEO",
  // Measured version — default for website body copy (INFO-BANK §2, "Alternate, more measured bio").
  founderBio:
    "Mr. Gurdev Singh is the Founder and CEO of CLEAN TANK SERVICES and a driving force behind the development of the business. With more than 35 years of professional experience, he brings together business understanding, customer engagement, operational knowledge and service-industry experience. He began his career in business and sales with Godrej, where he developed a strong foundation in customer relationships, sales and market understanding. Building on this experience, he entered the service industry with a focus on professional execution and customer-oriented solutions. Over the years, his experience and understanding of market requirements have contributed to the development of CLEAN TANK SERVICES and its mechanized and scientific approach to water-storage-tank cleaning. As Founder and CEO, Mr. Singh focuses on innovation, service quality, operational discipline and long-term customer relationships. His leadership style emphasizes personal guidance and team development. He works closely with his professionals as a mentor and guide, encouraging a supportive working environment based on trust, responsibility and teamwork.",
  // Punchier version — use only where a longer narrative bio is wanted (INFO-BANK §2, primary bio).
  founderBioLong:
    "Mr. Gurdev Singh is a visionary leader and a driving force behind the success of the Clean Tank Services industry. Widely recognized as a go-to operations expert, he seamlessly blends technology with business strategy to deliver outstanding results. He began his career in business and sales with Brand Godrej, where he developed a strong foundation in customer engagement and market understanding. Building on this experience, he ventured into the service industry, bringing with him a forward-thinking mindset and a passion for excellence. With over 35 years of experience, Mr. Singh has played a pivotal role in transforming the industry through innovation, dedication, and a deep understanding of market needs. As the founder, his leadership continues to take the company to new heights, setting benchmarks and shaping the future of the business. Beyond his professional achievements, Mr. Singh is known for his personal approach to leadership. He supports his team not just as a leader, but as a mentor and guide, fostering a family-like environment that inspires trust, loyalty, and success.",
} as const;

export type Clients = typeof clients;
export const clients = {
  government: [
    "LIC of India",
    "MES (Military Engineering Services)",
    "UPSIDC",
    "BSNL",
    "ALIMCO",
    "ALIMO",
    "Cantonment Board",
    "Cantonment Boards",
    "CPWD",
    "Municipal Corporations",
    "National Investigation Agency (NIA)",
    "Sports Authority of India (SAI)",
  ],
  healthcare: [
    "Regency Hospital",
    "Krishna Hospital",
    "AIIMS",
    "Max Hospital",
    "Fortis Hospital",
    "Paras Hospital",
    "Sohana Hospital",
    "Apollo Hospital",
  ],
  industrial: ["Z-Square"],
  hospitalityAndResidential: [
    "Hotel Landmark",
    "Hotel Mandakini",
    "Hotel Bliss",
    "Kanha Galaxy",
    "Kanha International",
    "Kanak Galaxy",
    "Kanak International",
    "Hotel Celebration",
    "TDI",
    "MR",
  ],
  institutional: [
    "Agriculture University",
    "IIT Kanpur",
    "IITs across India",
    "NITs across India",
    "NIT Hamirpur (H.P.)",
    "CSIR institutions across India",
    "IIM Lucknow",
    "HBTU",
    "Rama University",
    "Apollo Institute of Technology",
    "KIT",
    "Law College",
    "Guru Har Rai Academy",
    "Virendra Swarup Education Centre (Kanpur)",
    "Viren Swaroop Education Centre, Kanpur",
  ],
} as const;

// The five client groups, per INFO-BANK §7. These are client groups, not market
// segments — the same five labels are used wherever groups are shown (the
// clients page and the "Who We Serve" section), so they stay in one place.
export const clientGroupLabels: Record<keyof typeof clients, string> = {
  government: "Government",
  healthcare: "Healthcare",
  industrial: "Industrial",
  hospitalityAndResidential: "Hospitality & Residential",
  institutional: "Institutional",
};

export type Franchise = typeof franchise;
export const franchise = {
  investmentRange: "₹3 lakh – ₹8 lakh depending on model",
  suggestedStartupLevel: "From approximately ₹3 lakh",
  royalty: "3.5% per month, as applicable to the selected model",
  indicativeRoi: "40% or above, subject to actual business performance",
  indicativePaybackPeriod: "4–6 months, subject to actual business performance",
  officeRequirement:
    "Approximately 150 sq. ft. or suitable home-based setup (small office / home / shop)",
  agreementPeriod: "3 years",
  market: "Residential, commercial, institutional & industrial",
  businessSupport:
    "Training, marketing, lead generation, sales & operational support",
  // Mandatory next to any franchise figures (INFO-BANK §8, verbatim).
  financialDisclaimer:
    "All investment, revenue, ROI and payback figures are indicative business projections and are not guaranteed returns unless specifically stated in the executed franchise agreement. Actual results may vary depending on territory, customer acquisition, sales volume, pricing, operating expenses, manpower, local competition and other business conditions.",
} as const;

// Service-results / liability qualifier (INFO-BANK §6 responsibility rule +
// §11 item 7, verbatim). Render this next to any "bacteria-free / safe"
// water-quality claim.
export const serviceResultsQualifier =
  "Cleaning and disinfection are intended to improve the cleanliness and hygiene of the tank. Stored-water condition/quality also depends on source-water quality, plumbing, tank condition, environmental conditions and subsequent maintenance.";

// Canonical 5-step cleaning process (INFO-BANK §5A, owner-confirmed). The
// older 6-step version with a 5% food-grade HCl algae wash is superseded and
// must not be used.
export const cleaningProcessSteps: {
  mainIcon: SvgIconComponent | IconType;
  imageSrc: string | StaticImageData;
  title: string;
  description: string;
  smallDescription: string;
  bottomIconText?: string;
  bottomIcon?: SvgIconComponent | IconType;
}[] = [
  {
    mainIcon: WaterDropOutlined,
    imageSrc:
      "https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&w=600",
    title: "De-watering",
    description:
      "Water remaining in the tank is removed using mechanical pumps to prepare the tank for cleaning.",
    smallDescription:
      "Mechanical pumps remove remaining water to prepare the tank for cleaning.",
  },
  {
    mainIcon: CleaningServicesOutlined,
    imageSrc:
      "https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&w=600",
    title: "High-Pressure\nCleaning",
    description:
      "All walls, floor and roof are cleaned using a high-pressure water jet pump — up to 250 bar — subject to site and equipment requirements.",
    smallDescription:
      "High-pressure water jet pump (up to 250 bar) cleans all walls, floor and roof.",
    bottomIconText: "Up to 250 Bar",
  },
  {
    mainIcon: DeleteSweepOutlined,
    imageSrc:
      "https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&w=600",
    title: "Sludge & Water\nRemoval",
    description:
      "Remaining sludge, sediment and water are removed from the floor using an industrial vacuum cleaner.",
    smallDescription:
      "An industrial vacuum cleaner removes remaining sludge, sediment and water from the floor.",
  },
  {
    mainIcon: VerifiedOutlined,
    imageSrc:
      "https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&w=600",
    title: "Disinfection",
    description:
      "A non-toxic, biodegradable, eco-friendly anti-bacterial agent is sprayed to disinfect the tank from harmful pathogens, supported by Govt-approved laboratory certification and documentation.",
    smallDescription:
      "Spraying of a non-toxic, biodegradable, eco-friendly anti-bacterial agent to disinfect the tank.",
    bottomIconText: "Govt-Approved Lab Certification",
  },
  {
    mainIcon: BiotechOutlined,
    imageSrc:
      "https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&w=600",
    title: "Ultra-Violet\nRadiation Treatment",
    description:
      "Ultra-violet radiation treatment inside the tank helps kill remaining suspended or floating bacteria — an additional treatment, where applicable.",
    smallDescription:
      "UV radiation treatment inside the tank kills remaining suspended or floating bacteria, where applicable.",
    bottomIconText: "Where Applicable",
  },
];
