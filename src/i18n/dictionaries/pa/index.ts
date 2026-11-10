import type { Dictionary } from "../en";
import { prices } from "./prices";

export const pa: Dictionary = {
  notFound: {
    code: "ਗਲਤੀ 404",
    title: "ਪੰਨਾ ਨਹੀਂ ਮਿਲਿਆ",
    description: "ਸਾਨੂੰ ਇਹ ਪੰਨਾ ਨਹੀਂ ਮਿਲਿਆ।",
    home: "ਹੋਮ ਪੇਜ 'ਤੇ ਜਾਓ",
  },
  underDevelopment: {
    code: "ਜਲਦੀ ਆ ਰਿਹਾ ਹੈ",
    title: "ਇਹ ਪੰਨਾ ਹਾਲੇ ਤਿਆਰ ਹੋ ਰਿਹਾ ਹੈ",
    description:
      "ਤਦ ਤੱਕ ਕਿਸੇ ਵੀ ਜਾਣਕਾਰੀ ਲਈ ਸਾਨੂੰ ਕਾਲ ਕਰੋ ਜਾਂ WhatsApp 'ਤੇ ਸੁਨੇਹਾ ਭੇਜੋ।",
    contact: "ਸੰਪਰਕ ਕਰੋ",
  },
  error: {
    code: "ਗਲਤੀ",
    title: "ਕੁਝ ਗਲਤ ਹੋ ਗਿਆ",
    description:
      "ਇੱਕ ਅਣਕਿਆਸੀ ਗਲਤੀ ਆਈ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ, ਜਾਂ ਥੋੜ੍ਹੀ ਦੇਰ ਬਾਅਦ ਆਓ।",
    retry: "ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ",
    home: "ਹੋਮ ਪੇਜ 'ਤੇ ਜਾਓ",
  },
  theme: {
    toggle: "ਰੰਗ ਥੀਮ ਬਦਲੋ",
  },
  contact: {
    title: "ਸੰਪਰਕ",
    intro:
      "ਕਾਲ ਕਰੋ, WhatsApp 'ਤੇ ਸੁਨੇਹਾ ਭੇਜੋ ਜਾਂ ਸਾਨੂੰ ਲਿਖੋ। ਕੀਮਤ ਲਈ ਆਪਣਾ ਇਲਾਕਾ ਅਤੇ ਟੈਂਕੀ ਦਾ ਆਕਾਰ ਦੱਸੋ।",
    call: "ਕਾਲ ਕਰੋ",
    callHint: "ਟੈਂਕੀ ਦੀ ਸਫ਼ਾਈ ਜਾਂ AMC ਬਾਰੇ ਸਾਡੇ ਨਾਲ ਗੱਲ ਕਰੋ।",
    franchise: "ਫ਼ਰੈਂਚਾਇਜ਼ੀ",
    franchiseHint: "ਆਪਣੇ ਇਲਾਕੇ ਵਿੱਚ ਫ਼ਰੈਂਚਾਇਜ਼ੀ ਲਈ ਕਾਲ ਜਾਂ WhatsApp ਕਰੋ।",
    whatsapp: "WhatsApp",
    whatsappHint:
      "ਆਪਣਾ ਇਲਾਕਾ ਅਤੇ ਟੈਂਕੀ ਦਾ ਆਕਾਰ ਦੱਸੋ, ਅਸੀਂ ਤੁਹਾਨੂੰ ਕੀਮਤ ਦੱਸਾਂਗੇ।",
    whatsappText:
      "ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ਮੈਂ ਆਪਣੀ ਪਾਣੀ ਦੀ ਟੈਂਕੀ ਦੀ ਸਫ਼ਾਈ ਦੀ ਕੀਮਤ ਜਾਣਨੀ ਹੈ।",
    email: "ਈਮੇਲ",
    emailHint: "ਕੋਟੇਸ਼ਨ, ਦਸਤਾਵੇਜ਼ਾਂ ਅਤੇ ਲਿਖਤੀ ਗੱਲਬਾਤ ਲਈ।",
    offices: "ਦਫ਼ਤਰ।",
  },
  consent: {
    text: "ਇਹ ਸਾਈਟ ਕੂਕੀਜ਼ ਵਰਤਦੀ ਹੈ, ਤਾਂ ਜੋ ਅਸੀਂ ਸਮਝ ਸਕੀਏ ਕਿ ਲੋਕ ਇਸਨੂੰ ਕਿਵੇਂ ਵਰਤਦੇ ਹਨ ਅਤੇ ਇਸਨੂੰ ਬਿਹਤਰ ਬਣਾ ਸਕੀਏ। ਤੁਹਾਡੀ ਸਹਿਮਤੀ ਤੋਂ ਬਿਨਾਂ ਕੁਝ ਵੀ ਸੇਵ ਨਹੀਂ ਹੁੰਦਾ।",
    accept: "ਸਵੀਕਾਰ ਕਰੋ",
    decline: "ਅਸਵੀਕਾਰ ਕਰੋ",
  },
  header: {
    nav: "ਮੁੱਖ",
    menu: "ਮੀਨੂ",
    solutions: "ਹੱਲ",
    links: {
      home: "ਹੋਮ",
      homes: "ਘਰ",
      organisations: "ਸੰਸਥਾਵਾਂ",
      process: "ਪ੍ਰਕਿਰਿਆ",
      about: "ਸਾਡੇ ਬਾਰੇ",
      contact: "ਸੰਪਰਕ",
      franchise: "ਫ਼ਰੈਂਚਾਇਜ਼ੀ",
    },
    hints: {
      homes: "ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਦੀ ਟੈਂਕੀ ਲਈ",
      organisations: "ਸੁਸਾਇਟੀਆਂ, ਸੰਸਥਾਵਾਂ, ਦਫ਼ਤਰ ਅਤੇ ਸਰਕਾਰ",
    },
  },
  footer: {
    sitemap: "ਸਾਈਟ ਮੈਪ",
    legal: "ਕਾਨੂੰਨੀ ਜਾਣਕਾਰੀ",
    certified: "ਪ੍ਰਮਾਣਿਤ",
    isoIssuer: "({holder} ਲਈ {issuer} ਵੱਲੋਂ)",
    rights: "ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ।",
    gemSeller: "ਰਜਿਸਟਰਡ ਵਿਕਰੇਤਾ",
    links: {
      whyChooseUs: "ਸਾਨੂੰ ਕਿਉਂ ਚੁਣੋ",
      clients: "ਸਾਡੇ ਗਾਹਕ",
      privacy: "ਪਰਦੇਦਾਰੀ ਨੀਤੀ",
      terms: "ਨਿਯਮ ਅਤੇ ਸ਼ਰਤਾਂ",
    },
    cookieSettings: "ਕੂਕੀ ਸੈਟਿੰਗਾਂ",
  },
  process: {
    whereApplicable: "ਜਿੱਥੇ ਲਾਗੂ ਹੋਵੇ",
    step: "ਪੜਾਅ",
    purpose: "ਇਹ ਕਿਉਂ ਜ਼ਰੂਰੀ ਹੈ",
    equipment: "ਉਪਕਰਨ",
  },
  clients: {
    pause: "ਗਾਹਕਾਂ ਦੇ ਲੋਗੋ ਰੋਕੋ",
    play: "ਗਾਹਕਾਂ ਦੇ ਲੋਗੋ ਚਲਾਓ",
    certificate: "ਸਰਟੀਫ਼ਿਕੇਟ, {year}",
  },
  credentials: {
    view: "ਸਰਟੀਫ਼ਿਕੇਟ ਵੇਖੋ",
    close: "ਬੰਦ ਕਰੋ",
    firm: "ਰਜਿਸਟਰਡ ਫ਼ਰਮ",
    firmValue: "{name}, ਕਾਨਪੁਰ, ਉੱਤਰ ਪ੍ਰਦੇਸ਼",
    iso: "ਗੁਣਵੱਤਾ ਪ੍ਰਬੰਧਨ",
    isoValue:
      "{standard} ਪ੍ਰਮਾਣਿਤ ({issuer}), ਸਰਟੀਫ਼ਿਕੇਟ ਨੰਬਰ {number}, {validTo} ਤੱਕ ਜਾਇਜ਼।",
    verify: "{host} 'ਤੇ ਜਾਂਚੋ",
    certificateAlt: "{holder} ਦਾ {standard} ਸਰਟੀਫ਼ਿਕੇਟ",
    msme: "MSME (ਉਦਯਮ) ਰਜਿਸਟ੍ਰੇਸ਼ਨ",
    gem: "GeM (ਗਵਰਨਮੈਂਟ ਈ-ਮਾਰਕੀਟਪਲੇਸ)",
    gemValue:
      "ਰਜਿਸਟਰਡ ਵਿਕਰੇਤਾ। ਵਿਕਰੇਤਾ ID ਬੇਨਤੀ 'ਤੇ ਗਾਹਕਾਂ ਨੂੰ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ।",
    other: "ਹੋਰ ਰਜਿਸਟ੍ਰੇਸ਼ਨ",
  },
  testimonials: {
    placeholderQuote: "ਪਲੇਸਹੋਲਡਰ: ਗਾਹਕ ਦੀ ਇਜਾਜ਼ਤ ਨਾਲ ਲਿਆ ਹਵਾਲਾ ਇੱਥੇ ਆਵੇਗਾ।",
    placeholderName: "ਨਾਮ",
    placeholderCaption: "ਅਹੁਦਾ, ਸੰਸਥਾ",
  },
  hero: {
    certified: "{standard} ਪ੍ਰਮਾਣਿਤ",
    since: "{year} ਤੋਂ",
  },
  compare: {
    label: "ਸਫ਼ਾਈ ਤੋਂ ਪਹਿਲਾਂ ਅਤੇ ਬਾਅਦ",
    before: "ਪਹਿਲਾਂ",
    after: "ਬਾਅਦ ਵਿੱਚ",
  },
  prices,
  language: {
    label: "ਭਾਸ਼ਾ",
  },
};
