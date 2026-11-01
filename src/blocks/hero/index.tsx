import Actions from "@/blocks/actions";
import { toImage } from "@/blocks/to-image";
import type { HeroBlock } from "@/payload-types";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import CompareSlider from "@components/compare-slider";
import Highlight from "@components/highlight";
import { H1 } from "@components/html";
import { getDictionary, type Locale } from "@i18n";

interface HeroProps extends HeroBlock {
  locale: Locale;
}

/**
 * Heading and up to two actions over the before/after comparison, which
 * fills the hero. The slider's scrim keeps the text readable: from `lg` up
 * the text sits on the left, below that at the bottom, with the drag handle
 * above it. The words listed in `highlight` show in accent 500.
 */
const Hero = ({
  heading,
  highlight,
  before,
  after,
  actions,
  locale,
}: HeroProps) => {
  const { compare } = getDictionary(locale);
  const beforeImage = toImage(before);
  const afterImage = toImage(after);

  return (
    <CommonFullWidthWrapper
      wrapperProps={{ "data-surface": "band" }}
      isContainerCenter={false}
      // no margin above a block with its own background: page ground would show as a strip
      wrapperClassName="relative mb-8 flex-col items-center justify-end min-h-[calc(90svh-var(--header-height)-var(--contact-bar-height))] lg:justify-center lg:min-h-[calc(65svh-var(--header-height))] md:mb-10 lg:mb-12 [&:has(+[class*=bg-])]:mb-0 [--color-band:var(--color-primary-900)]"
      // pointer events pass through to the comparison, except on the buttons
      className="pointer-events-none relative z-10"
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
            handleClassName="top-[22%] lg:top-auto lg:bottom-4"
            scrimColor="var(--color-accent-950)"
            // ! beats the slider's own `relative`, so it fills the hero
            className="absolute! inset-0"
          />
        )
      }
    >
      <div className="flex flex-col gap-6 py-10 lg:w-7/12 lg:py-24 lg:pr-10">
        <H1 $size="display" $margin="0" className="max-w-[11ch]">
          <Highlight
            text={heading}
            highlight={highlight}
            className="text-accent-500"
          />
        </H1>
        {/* <P $size="body-l" className="max-w-[50ch] text-pretty">
          {text}
        </P> */}
        <Actions
          actions={actions}
          locale={locale}
          className="pointer-events-auto pt-2"
        />
      </div>
    </CommonFullWidthWrapper>
  );
};

export default Hero;
