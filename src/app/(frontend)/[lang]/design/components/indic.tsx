import { H3, P, Span } from "@components/html";
import LanguageSwitcher from "@components/language-switcher";
import Computed from "./computed";
import Section from "./section";

const TYPE_PROPS = [
  "font-family",
  "line-height",
  "letter-spacing",
  "text-transform",
  "font-stretch",
];

interface Script {
  lang: "hi" | "pa";
  name: string;
  font: string;
  heading: string;
  body: string;
}

// Sample lines for the type specimen; they need a native-speaker review like all Indic copy
const SCRIPTS: Script[] = [
  {
    lang: "hi",
    name: "Hindi · Devanagari",
    font: "Anek Devanagari",
    heading: "वैज्ञानिक टंकी सफ़ाई",
    body: "हर सफ़ाई एक ही पाँच चरणों की प्रक्रिया से होती है। सेवा के बाद ग्राहक को सफ़ाई प्रमाणपत्र मिलता है।",
  },
  {
    lang: "pa",
    name: "Punjabi · Gurmukhi",
    font: "Anek Gurmukhi",
    heading: "ਵਿਗਿਆਨਕ ਟੈਂਕੀ ਸਫ਼ਾਈ",
    body: "ਹਰ ਸਫ਼ਾਈ ਇੱਕੋ ਪੰਜ ਪੜਾਵਾਂ ਦੀ ਪ੍ਰਕਿਰਿਆ ਨਾਲ ਹੁੰਦੀ ਹੈ। ਸੇਵਾ ਤੋਂ ਬਾਅਦ ਗਾਹਕ ਨੂੰ ਸਫ਼ਾਈ ਸਰਟੀਫਿਕੇਟ ਮਿਲਦਾ ਹੈ।",
  },
];

const renderScript = (script: Script) => {
  return (
    <div
      key={script.lang}
      className="flex min-w-0 flex-col gap-4 rounded-sm border border-border bg-surface p-6"
    >
      <Span
        $size="caption"
        className="font-mono font-semibold tracking-[0.08em] text-fg-muted uppercase"
      >
        {script.name} · {script.font}
      </Span>
      <Computed properties={TYPE_PROPS}>
        {/* uppercase and the 78% width are applied on purpose: the Indic rule overrides both */}
        <H3
          lang={script.lang}
          $size="h2"
          $margin="0"
          className="uppercase font-stretch-78%"
        >
          {script.heading}
        </H3>
      </Computed>
      <Computed properties={["font-size", "line-height"]}>
        <P lang={script.lang} className="max-w-[60ch]">
          {script.body}
        </P>
      </Computed>
    </div>
  );
};

/** Devanagari and Gurmukhi rules, proven live, and the language switcher. */
const Indic = () => {
  return (
    <Section
      id="languages"
      number={7}
      title="Hindi and Punjabi"
      intro="The site is in English, Hindi and Punjabi. Indic text is never capitalised, letter-spaced or condensed, and gets more line height. defaults.css enforces this on anything inside lang=hi or lang=pa, and it beats utilities: the headings below carry uppercase and 78% width classes, and the computed values show both are cancelled."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {SCRIPTS.map(renderScript)}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-3">
          <H3 $margin="0">Mixed lines</H3>
          <P>
            Keep each word in its own script and mark the Indic part:{" "}
            <span lang="hi">टंकी</span> cleaning, or on a Hindi page{" "}
            <span lang="hi">
              <span lang="en">CLEAN TANK</span> की सेवा
            </span>{" "}
            with the brand name wrapped in lang=en so it keeps its caps.
          </P>
          <P $size="small" className="text-fg-muted">
            Line height: body 1.65 (hi) and 1.6 (pa); headings 1.35 (hi) and 1.3
            (pa). Indic measure 35 to 60 characters. Digits are 0 to 9 in all
            three languages. Plex Mono has no Indic glyphs, so Indic labels fall
            back to Anek. Sentences end with the danda (।).
          </P>
        </div>
        <div className="flex flex-col gap-3">
          <H3 $margin="0">Language switcher</H3>
          <LanguageSwitcher
            locale="en"
            path="/design"
            label="Language (example)"
          />
          <P $size="small" className="text-fg-muted">
            Each language is named in its own script, with lang and hreflang.
            The current one is bold with aria-current. No flags and no redirect
            by location or browser language. Links that change the language load
            the page in full (Link native). This reference stays in English
            under every language.
          </P>
        </div>
      </div>
    </Section>
  );
};

export default Indic;
