/*
 * Interface strings that must work without the CMS: error and 404 pages,
 * control labels, the holding contact and under-development pages. Page content
 * belongs in Payload.
 */
import { prices } from "./prices";

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
    franchise: "Franchise",
    franchiseHint: "Call or WhatsApp about a franchise in your area.",
    whatsapp: "WhatsApp",
    whatsappHint:
      "Tell us your area and the size of your tank, and we will give you a price.",
    // Pre-filled in WhatsApp chats opened from the site; the price list's calculator adds its figures instead.
    whatsappText: "Hello, I would like a price for cleaning my water tank.",
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
    /** Header order; homes and organisations sit under Solutions. */
    links: {
      home: "Home",
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
      whyChooseUs: "Why Choose Us",
      clients: "Clients",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
    },
    cookieSettings: "Cookie settings",
  },
  process: {
    whereApplicable: "Where applicable",
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
  hero: {
    certified: "{standard} certified",
    since: "Since {year}",
  },
  compare: {
    label: "Before and after cleaning",
    before: "Before",
    after: "After",
  },
  prices,
  language: {
    label: "Language",
  },
};

export type Dictionary = typeof en;
