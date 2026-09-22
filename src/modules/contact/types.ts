import { Office } from "@constants";
import { SvgIconComponent } from "@mui/icons-material";
import { StaticImageData } from "next/image";

export interface ContactModuleProps {
  className?: string;
}

export interface ContactSectionMeta {
  chip?: string;
  title: string;
  description?: string;
}

export type ContactFormFieldType =
  | "email"
  | "select"
  | "tel"
  | "textarea"
  | "text";

export interface ContactFormField {
  id: string;
  label: string;
  placeholder?: string;
  type: ContactFormFieldType;
  autoComplete?: string;
  required?: boolean;
  options?: string[];
}

export interface ContactGoogleFormConfig {
  gFormId: string;
  links: {
    entryId: string;
    formId: string;
    type: "dropdown" | "textarea" | "text";
  }[];
}

export interface ContactMethod {
  icon: SvgIconComponent;
  title: string;
  value: string;
  href: string;
}

export interface EnquiryTypeItem {
  title: string;
  description: string;
}

export interface ContactFormProps {
  fields: ContactFormField[];
  gFormConfig: ContactGoogleFormConfig;
  submitText: string;
}

export interface ReachOutSectionProps extends ContactSectionMeta {
  enquiryTypes: EnquiryTypeItem[];
  fields: ContactFormField[];
  gFormConfig: ContactGoogleFormConfig;
  methods: ContactMethod[];
  submitText: string;
}

export interface OfficesSectionProps extends ContactSectionMeta {
  offices: Office[];
  gstin: string;
  pan: string;
  isoWording: string;
}

export interface PresenceSectionProps extends ContactSectionMeta {
  image?: StaticImageData;
  imageAlt?: string;
  states: readonly string[];
  technicalRepresentativesLine: string;
  emergencyLine: string;
}
