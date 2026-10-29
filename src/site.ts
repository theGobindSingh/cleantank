/**
 * Site-wide identity and contacts, shared by every page, metadata, robots,
 * sitemap and the OG image. Change a value here and it changes everywhere.
 * Contacts are exactly as in docs/ref/INFO-BANK.md §1.
 */
export const site = {
  // Off until launch: Sentry and PostHog (and so the consent banner) stay
  // paused even with their keys set. docs/LAUNCH.md lists what to check first.
  isLive: false,
  // Off for now (owner's call, 28 Oct 2026): the about page's client list
  // hides the work completion certificates. They stay in Payload.
  showClientCertificates: false,
  name: "Clean Tank Services",
  // Brand lines, always written exactly like this.
  descriptor: "Scientific & Mechanized Water Tank Cleaning",
  tagline: "Clean Tank, Healthy Life",
  endorsement: "An Initiative of Gobind Galaxy",
  legalName: "Gobind Galaxy",
  description:
    "Scientific and mechanized cleaning and disinfection of water storage tanks for homes, housing societies, institutions and industry. An initiative of Gobind Galaxy, Kanpur.",
  // Set SITE_URL in production so canonical and social URLs are absolute.
  url: process.env.SITE_URL ?? "http://localhost:3000",
  // Digits only, with the country code; format for display as +91 94535 17514.
  phone: "919453517514",
  whatsapp: "919453517514",
  email: "admin@cleantankservices.com",
  offices: [
    {
      label: "Regd. Office",
      address: "109/122, Nehru Nagar, R.K. Nagar, Kanpur Nagar-208012, U.P.",
      phone: "919453517514",
    },
    {
      label: "Correspondence Office & Marketing/Sales Office, Punjab",
      address:
        "B-3/26, Jamuna Apartments, Ch-Kurali Highway, NH-5, Khanpur, Kharar, SAS Nagar-140301, Punjab",
      phone: "918699339947",
    },
  ],
  gstin: "09LFS1473F5ZU",
  // MSME (Udyam) registration of Gobind Galaxy.
  udyam: "UDYAM-UP-43-0011042",
  // Registered on GeM too; owner's call: never publish the seller ID, it goes to clients on request.
  // Shown in English on every language, beside the registrations above.
  otherRegistrations: "EPFO, ESI, Income Tax, BSNL enlistment",
  // INFO-BANK §1, ISO certificate. Never "accredited" or "internationally recognised".
  iso: {
    standard: "ISO 9001:2015",
    issuer: "Q2A-UK Certification Board",
    number: "Q2A-2026-0401T118011",
    validTo: "2029-03-31",
    verifyUrl: "https://q2acb.uk",
    // An image in public/; null hides the about page's "View certificate" button.
    certificate: null as { src: string; width: number; height: number } | null,
  },
};

// Owner's call: the site leaves out the registered office (Kanpur); it stays here for records.
const isNotRegisteredOffice = (office: (typeof site.offices)[number]) => {
  return office.label !== "Regd. Office";
};

export const shownOffices = site.offices.filter(isNotRegisteredOffice);
