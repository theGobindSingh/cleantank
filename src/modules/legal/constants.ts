import { contact } from "@constants";
import { LegalClause, LegalPageMeta } from "@modules/legal/types";

export const privacyPolicyMeta: LegalPageMeta = {
  chip: "Legal",
  title: "Privacy Policy",
  description:
    "How Clean Tank Services collects, uses and protects the information you share with us.",
};

export const termsMeta: LegalPageMeta = {
  chip: "Legal",
  title: "Terms & Conditions",
  description:
    "The terms that govern your use of the Clean Tank Services website and our services.",
};

export const privacyPolicyClauses: LegalClause[] = [
  {
    heading: "Introduction",
    body: "CLEAN TANK SERVICES, an initiative of GOBIND GALAXY, respects the privacy of its visitors and customers and is committed to handling personal information responsibly.",
  },
  {
    heading: "Information We Collect",
    body: "We may collect your name, phone number, email address, company or organisation, service location, tank-related information, service or franchise requirements, and any other information you voluntarily provide to us.",
  },
  {
    heading: "How We Use Your Information",
    body: "We use the information collected to respond to enquiries, provide quotations or service information, schedule services, manage annual maintenance contracts (AMC), respond to franchise enquiries, communicate about requested services, improve our customer-service processes, and maintain business and service records.",
  },
  {
    heading: "Security",
    body: "We take reasonable administrative and technical measures to protect your information against unauthorised access, misuse, alteration or disclosure.",
  },
  {
    heading: "Sharing of Information",
    body: "We do not sell or disclose your information for unrelated purposes. It may be shared where reasonably necessary to provide the services you have requested, to comply with applicable law, or to protect our rights and security.",
  },
  {
    heading: "Cookies",
    body: "We may use cookies or similar technologies for functionality, analytics or other legitimate purposes, depending on the platform and third-party services in use.",
  },
  {
    heading: "Third-Party Services",
    body: "Analytics, communication, payment or other platforms integrated with our website may have their own privacy practices, which we encourage you to review.",
  },
  {
    heading: "Your Requests",
    body: "Visitors may ask about the personal information they have submitted to us, subject to applicable law and reasonable verification.",
  },
  {
    heading: "Updates to This Policy",
    body: "This privacy policy may be updated periodically to reflect changes in our practices or applicable law.",
  },
  {
    heading: "Contact Us",
    body: `For any questions about this privacy policy, please contact us at ${contact.emails.admin.label}.`,
  },
];

export const termsClauses: LegalClause[] = [
  {
    heading: "General",
    body: "This website is operated by GOBIND GALAXY under the brand CLEAN TANK SERVICES. By using this website, visitors agree to be bound by these terms and conditions.",
  },
  {
    heading: "Services",
    body: "We provide professional water-storage-tank cleaning and related maintenance services. The exact scope of a service varies by tank type, capacity, construction, accessibility, site conditions and customer requirements.",
  },
  {
    heading: "Service Assessment",
    body: "Before carrying out a service, the company may assess the tank, site conditions, access, water level, sludge accumulation and other relevant factors.",
  },
  {
    heading: "Pricing",
    body: "Pricing is determined by the scope of work, tank capacity, location, site conditions, manpower, equipment and other factors, and may vary from site to site.",
  },
  {
    heading: "Customer Responsibilities",
    body: "Customers are expected to provide reasonable access to the tank, premises and required utilities, and to ensure authorised personnel are available to enable the service to be carried out.",
  },
  {
    heading: "Water Supply",
    body: "Customers are responsible for arranging water availability, alternate supply where needed, and restoration of normal water usage during and after cleaning.",
  },
  {
    heading: "Service Results",
    body: "Our cleaning and disinfection services are intended to improve the cleanliness and hygiene of the tank. The condition and quality of stored water also depends on source-water quality, plumbing, tank condition, environmental conditions and subsequent maintenance, and these factors remain outside the scope of our responsibility.",
  },
  {
    heading: "Annual Maintenance Contracts (AMC)",
    body: "AMC services are subject to the specific commercial terms, schedule, scope and conditions agreed with the customer.",
  },
  {
    heading: "Emergency Services",
    body: "24x7 support is subject to service-area coverage, manpower, equipment availability and operating conditions.",
  },
  {
    heading: "Franchise",
    body: "Any franchise arrangement is governed by a separate franchise agreement. Figures on this website relating to investment, ROI, payback or potential are indicative unless expressly incorporated into the executed agreement.",
  },
  {
    heading: "Intellectual Property",
    body: "Website content, the brand name, logos, photographs and graphics may not be reproduced without our prior authorisation.",
  },
  {
    heading: "Website Information",
    body: "We make reasonable efforts to keep information on this website accurate. Specifications, availability and terms may be updated from time to time.",
  },
  {
    heading: "Contact",
    body: "For any questions about these terms, please reach out via the contact details published on this website.",
  },
];
