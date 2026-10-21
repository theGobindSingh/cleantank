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
  language: {
    label: "Language",
  },
};

export type Dictionary = typeof en;
