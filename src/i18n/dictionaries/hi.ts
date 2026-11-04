import type { Dictionary } from "./en";

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
    whatsapp: "WhatsApp",
    whatsappHint:
      "चैट एक छोटे फ़ॉर्म के साथ खुलती है। उसे भरकर भेजें, हम आपको क़ीमत बताएँगे।",
    whatsappText:
      "नमस्ते, मुझे अपनी पानी की टंकी की सफ़ाई की क़ीमत जाननी है।\nइलाक़ा:\nटंकी का आकार (लीटर):\nछत वाली या ज़मीन के नीचे:",
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
    links: {
      home: "होम",
      homes: "घरों के लिए",
      organisations: "संस्थाओं के लिए",
      franchise: "फ़्रैंचाइज़ी के लिए",
      process: "प्रक्रिया",
      about: "हमारे बारे में",
      contact: "संपर्क",
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
      clients: "हमारे क्लाइंट",
      privacy: "गोपनीयता नीति",
      terms: "नियम और शर्तें",
    },
    cookieSettings: "कुकी सेटिंग्स",
  },
  process: {
    whereApplicable: "जहाँ लागू हो",
    index: "प्रक्रिया के चरण",
    step: "चरण",
    purpose: "यह क्यों ज़रूरी है",
    equipment: "उपकरण",
  },
  clients: {
    pause: "क्लाइंट लोगो रोकें",
    play: "क्लाइंट लोगो चलाएँ",
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
      "प्लेसहोल्डर: क्लाइंट की अनुमति से लिया गया उद्धरण यहाँ आएगा।",
    placeholderName: "नाम",
    placeholderCaption: "पद, संस्था",
  },
  compare: {
    label: "सफ़ाई से पहले और बाद",
    before: "पहले",
    after: "बाद में",
  },
  prices: {
    size: "टंकी का साइज़",
    price: "क़ीमत",
    upTo: "{max}\u00a0लीटर तक",
    range: "{min} से {max}\u00a0लीटर",
    above: "{min}\u00a0लीटर से ज़्यादा",
    perLitre: "{price} प्रति लीटर",
    steps: "ज़्यादा टंकियों पर छूट",
    oneTank: "1 टंकी",
    stepRange: "{min} से {max}",
    stepFrom: "{min} या ज़्यादा",
    fullPrice: "पूरी क़ीमत",
    percentOff: "{percent}% छूट",
    reached: "(आपकी टंकियाँ)",
    calculator: "अपनी क़ीमत निकालें",
    tank: "टंकी {n} का साइज़ (लीटर में)",
    add: "एक और टंकी जोड़ें",
    remove: "टंकी {n} हटाएँ",
    subtotal: "क़ीमत",
    discount: "छूट ({percent}%)",
    gst: "GST ({percent}%)",
    total: "कुल",
  },
  language: {
    label: "भाषा",
  },
};
