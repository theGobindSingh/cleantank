import type { Dictionary } from "../en";
import { prices } from "./prices";

export const hi: Dictionary = {
  notFound: {
    code: "त्रुटि 404",
    title: "पेज नहीं मिला",
    description: "हमें यह पेज नहीं मिला।",
    home: "होम पेज पर जाएँ",
  },
  underDevelopment: {
    code: "जल्द आ रहा है",
    title: "यह पेज अभी तैयार हो रहा है",
    description:
      "तब तक किसी भी जानकारी के लिए हमें कॉल करें या WhatsApp पर संदेश भेजें।",
    contact: "संपर्क करें",
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
    intro:
      "कॉल करें, WhatsApp पर संदेश भेजें या हमें लिखें। क़ीमत के लिए अपना इलाक़ा और टंकी का आकार बताएँ।",
    call: "कॉल करें",
    callHint: "टंकी की सफ़ाई या AMC के बारे में हमसे बात करें।",
    franchise: "फ़्रैंचाइज़ी",
    franchiseHint: "अपने इलाक़े में फ़्रैंचाइज़ी के लिए कॉल या WhatsApp करें।",
    whatsapp: "WhatsApp",
    whatsappHint: "अपना इलाक़ा और टंकी का आकार बताएँ, हम आपको क़ीमत बताएँगे।",
    whatsappText: "नमस्ते, मुझे अपनी पानी की टंकी की सफ़ाई की क़ीमत जाननी है।",
    email: "ईमेल",
    emailHint: "कोटेशन, दस्तावेज़ और लिखित बातचीत के लिए।",
    offices: "कार्यालय।",
  },
  consent: {
    text: "यह साइट कुकीज़ का उपयोग करती है, ताकि हम समझ सकें कि लोग इसे कैसे इस्तेमाल करते हैं और इसे बेहतर बना सकें। आपकी सहमति के बिना कुछ भी सेव नहीं होता।",
    accept: "स्वीकार करें",
    decline: "अस्वीकार करें",
  },
  header: {
    nav: "मुख्य",
    menu: "मेन्यू",
    solutions: "समाधान",
    links: {
      home: "होम",
      homes: "घर",
      organisations: "संस्थाएँ",
      process: "प्रक्रिया",
      about: "हमारे बारे में",
      contact: "संपर्क",
      franchise: "फ़्रैंचाइज़ी",
    },
    hints: {
      homes: "आपके परिवार की टंकी के लिए",
      organisations: "सोसाइटी, संस्थान, दफ़्तर और सरकार",
    },
  },
  footer: {
    sitemap: "साइट मैप",
    legal: "क़ानूनी जानकारी",
    certified: "प्रमाणित",
    isoIssuer: "({holder} के लिए {issuer} द्वारा)",
    rights: "सर्वाधिकार सुरक्षित।",
    gemSeller: "पंजीकृत विक्रेता",
    links: {
      whyChooseUs: "हमें क्यों चुनें",
      clients: "हमारे ग्राहक",
      privacy: "गोपनीयता नीति",
      terms: "नियम और शर्तें",
    },
    cookieSettings: "कुकी सेटिंग्स",
  },
  process: {
    whereApplicable: "जहाँ लागू हो",
    step: "चरण",
    purpose: "यह क्यों ज़रूरी है",
    equipment: "उपकरण",
  },
  clients: {
    pause: "ग्राहकों के लोगो रोकें",
    play: "ग्राहकों के लोगो चलाएँ",
    certificate: "प्रमाणपत्र, {year}",
  },
  credentials: {
    view: "प्रमाणपत्र देखें",
    close: "बंद करें",
    firm: "पंजीकृत फ़र्म",
    firmValue: "{name}, कानपुर, उत्तर प्रदेश",
    iso: "गुणवत्ता प्रबंधन",
    isoValue:
      "{standard} प्रमाणित ({issuer}), प्रमाणपत्र संख्या {number}, {validTo} तक मान्य।",
    verify: "{host} पर जाँचें",
    certificateAlt: "{holder} का {standard} प्रमाणपत्र",
    msme: "MSME (उद्यम) पंजीकरण",
    gem: "GeM (गवर्नमेंट ई-मार्केटप्लेस)",
    gemValue: "पंजीकृत विक्रेता। विक्रेता ID अनुरोध पर ग्राहकों को दी जाती है।",
    other: "अन्य पंजीकरण",
  },
  testimonials: {
    placeholderQuote:
      "प्लेसहोल्डर: ग्राहक की अनुमति से लिया गया उद्धरण यहाँ आएगा।",
    placeholderName: "नाम",
    placeholderCaption: "पद, संस्था",
  },
  hero: {
    certified: "{standard} प्रमाणित",
    since: "{year} से",
  },
  compare: {
    label: "सफ़ाई से पहले और बाद",
    before: "पहले",
    after: "बाद में",
  },
  prices,
  language: {
    label: "भाषा",
  },
};
