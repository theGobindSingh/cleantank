import type { Dictionary } from "./en";

export const hi: Dictionary = {
  notFound: {
    code: "त्रुटि 404",
    title: "पेज नहीं मिला",
    description: "हमें यह पेज नहीं मिला।",
    home: "होम पेज पर जाएँ",
  },
  error: {
    code: "त्रुटि",
    title: "कुछ गड़बड़ हो गई",
    description:
      "एक अनपेक्षित त्रुटि हुई। फिर से कोशिश करें, या थोड़ी देर बाद आएँ।",
    retry: "फिर से कोशिश करें",
    home: "होम पेज पर जाएँ",
  },
  theme: {
    toggle: "रंग थीम बदलें",
  },
  contact: {
    title: "संपर्क",
    call: "कॉल करें",
    whatsapp: "WhatsApp",
    email: "ईमेल",
    offices: "कार्यालय",
  },
  language: {
    label: "भाषा",
  },
};
