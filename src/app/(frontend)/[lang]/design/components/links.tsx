import { P, Span } from "@components/html";
import Link from "@components/link";
import SchemePair from "./scheme-pair";
import Section from "./section";

const LinkExamples = () => {
  return (
    <div className="flex flex-col gap-4">
      <P>
        A <Link href="#links">text link</Link> inside running text takes the
        type around it and keeps its underline: 1 px at a 3 px offset, 2 px on
        hover.
      </P>
      <div className="flex flex-wrap items-center gap-3">
        <Link href="#links" variant="filled">
          Explore Our Services
        </Link>
        <Link href="#links" variant="outlined">
          Send an Enquiry
        </Link>
      </div>
      <ul className="flex flex-col gap-2">
        <li>
          <Link href="https://www.iso.org/standard/62085.html">
            External link (new tab, rel=noopener)
          </Link>
        </li>
        <li>
          <Link href="tel:+919453517514">Phone link, same tab</Link>
        </li>
        <li>
          <Link href="/design" native>
            Native link, full page load
          </Link>
        </li>
      </ul>
    </div>
  );
};

/** Link behaviour and looks, light and dark. */
const Links = () => {
  return (
    <Section
      id="links"
      number={9}
      title="Links"
      intro="Every link on the site is Link from @components/link; ESLint blocks next/link and bare <a> elsewhere. Routes use next/link for client navigation. External links, mailto: and tel: render a plain <a>, external ones in a new tab. The native prop forces a plain <a> and a full page load, which the language switcher uses."
    >
      <SchemePair render={LinkExamples} />
      <div data-surface="band" className="flex flex-col gap-3 rounded-sm p-6">
        <Span
          $size="caption"
          className="font-mono font-semibold tracking-[0.08em] uppercase"
        >
          In a navy band
        </Span>
        <LinkExamples />
      </div>
    </Section>
  );
};

export default Links;
