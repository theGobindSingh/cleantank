import Actions from "@/blocks/actions";
import { toImage } from "@/blocks/to-image";
import type { HeroBlock } from "@/payload-types";
import { site } from "@/site";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import CompareSlider from "@components/compare-slider";
import Highlight from "@components/highlight";
import { H1, P } from "@components/html";
import { getDictionary, type Locale } from "@i18n";

interface HeroProps extends HeroBlock {
  locale: Locale;
}

/**
 * From `lg` up: heading and up to two actions on the left, over the
 * before/after comparison, which fills the hero behind its scrim. Below `lg`:
 * the comparison on top, then on the page ground the heading, the text, the
 * first action (the contact bar has the rest) and a proof line from
 * src/site.ts. The words listed in `highlight` show in accent 500.
 */
const Hero = ({
  heading,
  highlight,
  text,
  before,
  after,
  actions,
  locale,
}: HeroProps) => {
  const { compare, hero } = getDictionary(locale);
  const beforeImage = toImage(before);
  const afterImage = toImage(after);

  return (
    <CommonFullWidthWrapper
      wrapperProps={{ "data-surface": "band", "data-band-from": "lg" }}
      isContainerCenter={false}
      // no margin above a block with its own background: page ground would show as a strip
      wrapperClassName="relative mb-8 flex-col items-center lg:justify-center lg:min-h-[calc(65svh-var(--header-height))] md:mb-10 lg:mb-12 [&:has(+[class*=bg-])]:mb-0 [--color-band:var(--color-primary-900)]"
      // from lg, pointer events pass through to the comparison, except on the buttons
      className="relative z-10 lg:pointer-events-none"
      afterContainer={
        beforeImage &&
        afterImage && (
          <CompareSlider
            before={beforeImage}
            after={afterImage}
            label={compare.label}
            beforeLabel={compare.before}
            afterLabel={compare.after}
            wideStart={37.5}
            widePeak={85}
            handleClassName="top-1/2 -translate-y-1/2 lg:top-auto lg:bottom-4 lg:translate-y-0"
            scrimColor="var(--color-accent-950)"
            hasParallax
            // below lg on top, 44% of the screen between header and contact bar;
            // from lg the ! beats the slider's own `relative`, so it fills the hero
            className="order-first h-[calc((100svh-var(--header-height)-var(--contact-bar-height))*0.44)] w-full lg:absolute! lg:inset-0 lg:order-0 lg:h-auto"
          />
        )
      }
    >
      <div className="flex flex-col gap-4 pt-6 lg:w-7/12 lg:gap-6 lg:py-24 lg:pr-10">
        <H1 $size="display" $margin="0" className="max-w-[11ch]">
          <Highlight
            text={heading}
            highlight={highlight}
            className="text-accent-500"
          />
        </H1>
        <P
          $size="body"
          $margin="0"
          className="max-w-[50ch] text-pretty lg:hidden"
        >
          {text}
        </P>
        <Actions
          actions={actions}
          locale={locale}
          className="pointer-events-auto pt-2 max-lg:[&>*:not(:first-child)]:hidden"
        />
        <P
          $size="caption"
          $margin="0"
          className="flex flex-wrap gap-x-3 gap-y-1 font-mono font-medium tracking-[0.08em] text-fg-muted uppercase lg:hidden"
        >
          <span>{hero.certified.replace("{standard}", site.iso.standard)}</span>
          <span className="border-l border-border pl-3">
            {hero.since.replace("{year}", String(site.established))}
          </span>
        </P>
      </div>
    </CommonFullWidthWrapper>
  );
};

export default Hero;
