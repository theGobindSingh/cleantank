import tankImage from "@images/tank.png";
import {
  AccessTimeRounded,
  AssignmentTurnedInRounded,
  EmailRounded,
  LocationOnRounded,
  PhoneRounded,
} from "@mui/icons-material";

import { businessContactDetails } from "@constants";
import {
  ContactFormProps,
  ReachOutSectionProps,
  VisualProofSectionProps,
} from "./types";

export const reachOutSectionMeta: Pick<
  ReachOutSectionProps,
  "chip" | "title" | "description"
> = {
  chip: "CONTACT",
  title: "Talk to CleanTank Services",
  description:
    "Request a site audit for residential societies, commercial buildings, hospitals, schools, institutions, government facilities, or high-capacity industrial tanks.",
};

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
    id: "contact-organization",
    label: "Organization / facility name",
    type: "text",
    placeholder: "Society, institution, or company name",
    autoComplete: "organization",
    required: true,
  },
  {
    id: "contact-phone",
    label: "Phone number",
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
    id: "contact-location",
    label: "City / service location",
    type: "text",
    placeholder: "Mumbai, Maharashtra",
    autoComplete: "address-level2",
    required: true,
  },
  {
    id: "contact-project-type",
    label: "Project type",
    type: "select",
    required: true,
    options: [
      "Residential Society",
      "Commercial Building",
      "Hospital / Healthcare",
      "School / Institution",
      "Government Facility",
      "Industrial Tank",
    ],
  },
  {
    id: "contact-message",
    label: "Message / tank details",
    type: "textarea",
    placeholder:
      "Share tank size, quantity, urgency, access notes, or audit requirements.",
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
      entryId: "entry.REPLACE_ORGANIZATION",
      formId: "contact-organization",
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
      entryId: "entry.REPLACE_LOCATION",
      formId: "contact-location",
    },
    {
      type: "dropdown",
      entryId: "entry.REPLACE_PROJECT_TYPE",
      formId: "contact-project-type",
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
    title: "Phone",
    value: businessContactDetails.phone.label,
    href: businessContactDetails.phone.href,
  },
  {
    icon: EmailRounded,
    title: "Email",
    value: businessContactDetails.email.label,
    href: businessContactDetails.email.href,
  },
  {
    icon: LocationOnRounded,
    title: "Service Area",
    value: businessContactDetails.serviceArea,
  },
  {
    icon: AccessTimeRounded,
    title: "Hours",
    value: businessContactDetails.hours,
  },
];

export const contactSubmitText = "Request a Site Audit";

export const visualProofSectionMeta: Pick<
  VisualProofSectionProps,
  "chip" | "title" | "description"
> = {
  chip: "AUDIT READY",
  title: "A documented protocol for serious facilities",
  description:
    "Every cleaning assignment is handled with a repeatable machine-led process, compliance-minded reporting, and sterile treatment standards.",
};

export const visualProofImage = tankImage;

export const visualProofImageAlt =
  "Industrial water tank cleaning equipment used by CleanTank Services";

export const visualProofItems: VisualProofSectionProps["proofItems"] = [
  "ISO 9001:2015",
  "5-step scientific protocol",
  "Government-grade compliance",
];

export const visualProofIcon = AssignmentTurnedInRounded;
