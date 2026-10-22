import type { HeroBlock, Media } from "@/payload-types";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import CompareSlider, { type CompareImage } from "@components/compare-slider";
import { H1, P } from "@components/html";
import Link from "@components/link";
import { getDictionary, localePath, type Locale } from "@i18n";

interface HeroProps extends HeroBlock {
  locale: Locale;
}

type Action = NonNullable<HeroBlock["actions"]>[number];

// Uploads arrive populated at depth 1; an id alone means the file is missing.
const toImage = (media: number | Media): CompareImage | null => {
  if (typeof media === "number" || !media.url) return null;
  return { src: media.url, alt: media.alt };
};

/**
 * Heading, one line and up to two actions on flat navy, filling the screen
 * below the header but for a 1rem peek of the next section. From `lg` up the
 * comparison fills the hero under a scrim that is solid behind the text and
 * fades out to the right; below that they stack.
 */
const Hero = ({ heading, text, before, after, actions, locale }: HeroProps) => {
  const { compare } = getDictionary(locale);
  const beforeImage = toImage(before);
  const afterImage = toImage(after);

  const renderAction = (action: Action, index: number) => {
    const href = action.href.startsWith("/")
      ? localePath(locale, action.href)
      : action.href;
    return (
      <Link
        key={action.id ?? index}
        href={href}
        variant={index === 0 ? "filled" : "outlined"}
        size="md"
      >
        {action.label}
      </Link>
    );
  };

  return (
    <CommonFullWidthWrapper
      wrapperProps={{ "data-surface": "band" }}
      wrapperClassName="relative flex-col min-h-[calc(65svh-var(--header-height))] [--color-band:var(--color-primary-900)]"
      // pointer events pass through to the comparison beside the text
      className="pointer-events-none relative z-10"
      beforeContainer={
        // the scrim is solid behind the text (to the wrapper's seventh column: 90%, at most 1800 px) and fades out by the ninth
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-1 hidden w-[calc((100%-min(90%,1800px))/2+min(90%,1800px)*9/12)] bg-linear-to-r from-primary-900/80 from-50% to-transparent lg:block"
        />
      }
      afterContainer={
        beforeImage &&
        afterImage && (
          <CompareSlider
            before={beforeImage}
            after={afterImage}
            label={compare.label}
            beforeLabel={compare.before}
            afterLabel={compare.after}
            wideStart={75}
            className="aspect-3/2 w-full grow lg:absolute lg:inset-0 lg:aspect-auto"
          />
        )
      }
    >
      <div className="pointer-events-auto flex flex-col gap-6 py-16 lg:w-7/12 lg:py-24 lg:pr-10">
        <H1 $size="display" $margin="0">
          {heading}
        </H1>
        <P $size="body-l" className="max-w-[50ch] text-pretty">
          {text}
        </P>
        {actions && actions.length > 0 && (
          <div className="flex flex-wrap gap-4 pt-2">
            {actions.map(renderAction)}
          </div>
        )}
      </div>
    </CommonFullWidthWrapper>
  );
};

export default Hero;
