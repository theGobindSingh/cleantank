import Button from "@components/button";
import { H3, P, Span } from "@components/html";
import Link from "@components/link";
import SchemePair, { type Scheme } from "./scheme-pair";
import Section from "./section";

const Tag = ({ children }: { children: string }) => {
  return (
    <Span
      $size="caption"
      className="inline-flex rounded-xs border border-secondary-border bg-secondary-bg px-2 py-0.5 font-semibold text-secondary"
    >
      {children}
    </Span>
  );
};

/** A small page: band header, white and stone sections, a card and a secondary band. */
const MiniPage = (scheme: Scheme) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-xs border border-border">
      <div
        data-surface="band"
        className="flex items-center justify-between gap-4 p-4"
      >
        <Span
          $size="small"
          $weight="700"
          className="tracking-[0.06em] uppercase"
        >
          Clean Tank Services
        </Span>
        <Link href="#surfaces">Services</Link>
      </div>
      <div className="flex flex-col gap-3 bg-bg p-4">
        <H3 $margin="0">Water tank cleaning</H3>
        <span aria-hidden="true" className="block h-[3px] w-12 bg-marker" />
        <P $size="small">
          Body text in <code>fg</code> on <code>bg</code>, with a{" "}
          <Link href="#surfaces">text link</Link>.
        </P>
        <div className="flex flex-wrap gap-2">
          <Tag>Hospitals</Tag>
          <Tag>Schools</Tag>
        </div>
        <div>
          <Button size="sm">Get a Service Quote</Button>
        </div>
      </div>
      <div className="flex flex-col gap-3 border-t border-border bg-bg-subtle p-4">
        <div className="flex flex-col gap-1 rounded-sm border border-border bg-surface p-4">
          <Span $size="small" $weight="600" className="text-heading">
            Card on surface
          </Span>
          <Span $size="caption" className="text-fg-muted">
            Muted text, 1 px border edge, radius 4 px.
          </Span>
        </div>
      </div>
      <div
        data-surface="band"
        className="flex flex-col gap-2 p-4 [--color-band:var(--color-secondary-700)]"
      >
        <Span
          $size="small"
          $weight="700"
          className="tracking-[0.06em] uppercase"
        >
          Secondary emphasis band
        </Span>
        <Span $size="caption" className="text-fg-muted">
          One per page at most. Text turns white inside it.
        </Span>
        <div>
          <Button size="sm" variant="outlined">
            Send an Enquiry
          </Button>
        </div>
      </div>
      <span className="sr-only">{scheme} mode example</span>
    </div>
  );
};

/** How grounds stack: page, stone section, surface card, navy and secondary bands. */
const Surfaces = () => {
  return (
    <Section
      id="surfaces"
      number={4}
      title="Surfaces and modes"
      intro="The same small page in light and dark mode. Sections alternate bg and bg-subtle (white and stone in light mode, two navies in dark) with a 1 px rule between them. Cards sit on surface. Navy bands take the band scope, which re-maps every role inside them. The secondary band is the same scope with its fill switched to secondary 700. Light is the site default, even when the device prefers dark."
    >
      <SchemePair render={MiniPage} />
    </Section>
  );
};

export default Surfaces;
