import { contact, iso, offices, presence, registrations } from "@constants";
import tankImage from "@images/tank.png";
import { EmailRounded, PhoneRounded, WhatsApp } from "@mui/icons-material";

import {
  ContactFormProps,
  OfficesSectionProps,
  PresenceSectionProps,
  ReachOutSectionProps,
} from "./types";

export const reachOutSectionMeta: Pick<
  ReachOutSectionProps,
  "chip" | "title" | "description"
> = {
  chip: "CONTACT",
  title: "Talk to Clean Tank Services",
  description:
    "Tell us what you need — a cleaning service, an AMC, or a franchise — and our team will get back to you.",
};

export const enquiryTypeItems: ReachOutSectionProps["enquiryTypes"] = [
  {
    title: "Service Enquiry",
    description:
      "Tell us your location, tank type, capacity and cleaning requirement.",
  },
  {
    title: "AMC Enquiry",
    description:
      "Ask us about scheduled annual tank-cleaning and maintenance programmes.",
  },
  {
    title: "Franchise Enquiry",
    description:
      "Get details about available franchise models, investment, territory, training and support.",
  },
];

export const contactFormFields: ContactFormProps["fields"] = [
  {
    id: "contact-full-name",
    label: "Full name",
    type: "text",
    placeholder: "Your full name",
    autoComplete: "name",
    required: true,
  },
  {
    id: "contact-phone",
    label: "Phone",
    type: "tel",
    placeholder: "+91 98765 43210",
    autoComplete: "tel",
    required: true,
  },
  {
    id: "contact-email",
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
    autoComplete: "email",
    required: true,
  },
  {
    id: "contact-organization",
    label: "Organisation / company",
    type: "text",
    placeholder: "Society, institution, or company name (optional)",
    autoComplete: "organization",
  },
  {
    id: "contact-location",
    label: "Service location — city / state",
    type: "text",
    placeholder: "Mumbai, Maharashtra",
    autoComplete: "address-level2",
    required: true,
  },
  {
    id: "contact-enquiry-type",
    label: "Enquiry type",
    type: "select",
    required: true,
    options: ["Service Enquiry", "AMC Enquiry", "Franchise Enquiry"],
  },
  {
    id: "contact-tank-type",
    label: "Tank type",
    type: "text",
    placeholder:
      "Domestic / commercial overhead / commercial underground / institutional / other",
  },
  {
    id: "contact-tank-capacity",
    label: "Approximate tank capacity",
    type: "text",
    placeholder: "e.g. 5,000 L or 2,00,000 L",
  },
  {
    id: "contact-message",
    label: "Message",
    type: "textarea",
    placeholder: "Share any other details about your requirement.",
  },
];

export const contactGoogleFormConfig: ContactFormProps["gFormConfig"] = {
  gFormId: "REPLACE_WITH_CONTACT_GOOGLE_FORM_ID",
  links: [
    {
      type: "text",
      entryId: "entry.REPLACE_FULL_NAME",
      formId: "contact-full-name",
    },
    {
      type: "text",
      entryId: "entry.REPLACE_PHONE",
      formId: "contact-phone",
    },
    {
      type: "text",
      entryId: "entry.REPLACE_EMAIL",
      formId: "contact-email",
    },
    {
      type: "text",
      entryId: "entry.REPLACE_ORGANIZATION",
      formId: "contact-organization",
    },
    {
      type: "text",
      entryId: "entry.REPLACE_LOCATION",
      formId: "contact-location",
    },
    {
      type: "dropdown",
      entryId: "entry.REPLACE_ENQUIRY_TYPE",
      formId: "contact-enquiry-type",
    },
    {
      type: "text",
      entryId: "entry.REPLACE_TANK_TYPE",
      formId: "contact-tank-type",
    },
    {
      type: "text",
      entryId: "entry.REPLACE_TANK_CAPACITY",
      formId: "contact-tank-capacity",
    },
    {
      type: "textarea",
      entryId: "entry.REPLACE_MESSAGE",
      formId: "contact-message",
    },
  ],
};

export const contactMethods: ReachOutSectionProps["methods"] = [
  {
    icon: PhoneRounded,
    title: "Call",
    value: contact.primaryPhone.label,
    href: contact.primaryPhone.href,
  },
  {
    icon: WhatsApp,
    title: "WhatsApp",
    value: contact.whatsapp.label,
    href: contact.whatsapp.href,
  },
  {
    icon: EmailRounded,
    title: "Email",
    value: contact.emails.admin.label,
    href: contact.emails.admin.href,
  },
];

export const contactSubmitText = "Send an Enquiry";

export const officesSectionMeta: Pick<
  OfficesSectionProps,
  "chip" | "title" | "description"
> = {
  chip: "OUR OFFICES",
  title: "Registered & correspondence offices",
  description: "Reach the team closest to your location.",
};

export const officesList: OfficesSectionProps["offices"] = offices;
export const officesGstin = registrations.gstin;
export const officesPan = registrations.pan;
export const officesIsoWording = iso.safeWording;

export const presenceSectionMeta: Pick<
  PresenceSectionProps,
  "chip" | "title" | "description"
> = {
  chip: "PAN-INDIA PRESENCE",
  title: "Wherever your tanks are, we can reach them",
  description:
    "Operations and technical representation across multiple states, backed by round-the-clock emergency support.",
};

export const presenceImage = tankImage;
export const presenceImageAlt =
  "Industrial water tank cleaning equipment used by Clean Tank Services";
export const presenceStates = presence.states;
export const presenceTechnicalRepresentativesLine =
  presence.technicalRepresentativesLine;
export const presenceEmergencyLine =
  "24×7 Emergency Service — for urgent requirements, subject to location, manpower and operational availability.";
