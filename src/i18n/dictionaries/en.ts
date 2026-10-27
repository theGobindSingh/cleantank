/*
 * Interface strings that must work without the CMS: error and 404 pages,
 * control labels, the holding contact page. Page content belongs in Payload.
 */
export const en = {
  notFound: {
    code: "Error 404",
    title: "Page not found",
    description: "We could not find that page.",
    home: "Go to home",
  },
  error: {
    code: "Error",
    title: "Something went wrong",
    description: "An unexpected error occurred. Try again, or come back later.",
    retry: "Try again",
    home: "Go to home",
  },
  theme: {
    toggle: "Switch color theme",
  },
  contact: {
    title: "Contact",
    call: "Call",
    whatsapp: "WhatsApp",
    email: "Email",
    offices: "Offices",
  },
  consent: {
    text: "This site uses cookies to understand how visitors use it, so we can improve it. Nothing is stored unless you agree.",
    accept: "Accept",
    decline: "Decline",
  },
  header: {
    nav: "Main",
    menu: "Menu",
    links: {
      home: "Home",
      homes: "For Homes",
      organisations: "For Organisations",
      franchise: "For Franchise",
      process: "Process",
      about: "About",
      contact: "Contact",
    },
  },
  footer: {
    sitemap: "Site map",
    legal: "Legal",
    certified: "Certified",
    isoIssuer: "(for {holder} by {issuer})",
    rights: "All rights reserved.",
    gemSeller: "Registered seller",
    toBeAdded: "To be added",
    links: {
      whyChooseUs: "Why Choose Us",
      clients: "Clients",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
    },
    cookieSettings: "Cookie settings",
  },
  process: {
    whereApplicable: "Where applicable",
    index: "Process steps",
    step: "Step",
    purpose: "Why it matters",
    equipment: "Equipment",
  },
  clients: {
    pause: "Pause client logos",
    play: "Play client logos",
  },
  credentials: {
    view: "View certificate",
    close: "Close",
    firm: "Registered firm",
    firmValue: "{name}, Kanpur, Uttar Pradesh",
    iso: "Quality management",
    isoValue:
      "{standard} certified ({issuer}), Certificate No. {number}, valid to {validTo}.",
    verify: "Verify at {host}",
    certificateAlt: "{standard} certificate of {holder}",
    msme: "MSME (Udyam) registration",
    gem: "GeM (Government e-Marketplace)",
    gemValue: "Registered seller. Seller ID shared with clients on request.",
    other: "Other registrations",
  },
  testimonials: {
    placeholderQuote:
      "Placeholder: a client's quote goes here once it is collected with their permission.",
    placeholderName: "Name",
    placeholderCaption: "Role, Organisation",
  },
  compare: {
    label: "Before and after cleaning",
    before: "Before",
    after: "After",
  },
  language: {
    label: "Language",
  },
};

export type Dictionary = typeof en;
