/*
 * Interface strings that must work without the CMS: error and 404 pages,
 * control labels, the holding contact and under-development pages. Page content
 * belongs in Payload.
 */
export const en = {
  notFound: {
    code: "Error 404",
    title: "Page not found",
    description: "We could not find that page.",
    home: "Go to home",
  },
  underDevelopment: {
    code: "Coming soon",
    title: "We are still building this page",
    description:
      "Call us or send a WhatsApp message for anything you need in the meantime.",
    contact: "Contact us",
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
    intro:
      "Call, send a WhatsApp message or write to us. For a price, tell us your area and the size of your tank.",
    call: "Call",
    callHint: "Talk to us about a cleaning or an AMC.",
    whatsapp: "WhatsApp",
    whatsappHint:
      "The chat opens with a short form. Fill it in and send it, and we will give you a price.",
    // Pre-filled in WhatsApp chats opened from the site: a short form, so the first message can be quoted.
    whatsappText:
      "Hello, I would like a price for cleaning my water tank.\nArea:\nTank size (litres):\nOverhead or underground:",
    email: "Email",
    emailHint: "For quotations, documents and anything in writing.",
    offices: "Office.",
  },
  consent: {
    text: "This site uses cookies to understand how visitors use it, so we can improve it. Nothing is stored unless you agree.",
    accept: "Accept",
    decline: "Decline",
  },
  header: {
    nav: "Main",
    menu: "Menu",
    solutions: "Solutions",
    /** Order is the header's order; homes and organisations sit under Solutions. */
    links: {
      homes: "Homes",
      organisations: "Organisations",
      process: "Process",
      about: "About",
      contact: "Contact",
      franchise: "Franchise",
    },
    /** One line under each Solutions link. */
    hints: {
      homes: "For your family's tank",
      organisations: "Societies, institutions, offices and government",
    },
  },
  footer: {
    sitemap: "Site map",
    legal: "Legal",
    certified: "Certified",
    isoIssuer: "(for {holder} by {issuer})",
    rights: "All rights reserved.",
    gemSeller: "Registered seller",
    links: {
      home: "Home",
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
    certificate: "Certificate, {year}",
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
  prices: {
    size: "Tank size",
    price: "Price",
    upTo: "Up to {max}\u00a0L",
    range: "{min} to {max}\u00a0L",
    above: "Above {min}\u00a0L",
    perLitre: "{price} per litre",
    steps: "Multi-tank discount",
    oneTank: "1 tank",
    stepRange: "{min} to {max}",
    stepFrom: "{min} or more",
    fullPrice: "Full price",
    percentOff: "{percent}% off",
    reached: "(your tanks)",
    calculator: "Work out your price",
    tank: "Tank {n} size in litres",
    add: "Add another tank",
    discuss: "Over {min}\u00a0L: let's discuss the discount on this tank.",
    remove: "Remove tank {n}",
    subtotal: "Price",
    discount: "Discount ({percent}%)",
    gst: "GST ({percent}%)",
    total: "Total",
  },
  language: {
    label: "Language",
  },
};

export type Dictionary = typeof en;
