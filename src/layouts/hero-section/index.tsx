import Button, { ButtonProps } from "@components/button";
import Chip from "@components/chip";
import { P } from "@components/html";
import {
  HeroSectionImage,
  HeroSectionSplitGrid,
  HeroSectionTitle,
  HeroSectionWrapper,
  heroSectionWrapperStyles,
  splitHeroSectionWrapperStyles,
} from "@layouts/hero-section/styles";
import { HeroSectionProps } from "@layouts/hero-section/types";
import { useLenis } from "lenis/react";
import { useMemo, useRef } from "react";

const getTitle = (title: HeroSectionProps["title"]) => {
  if (typeof title === "string") {
    return <HeroSectionTitle>{title}</HeroSectionTitle>;
  }

  const { text, highlight } = title;

  if (!highlight) {
    return <HeroSectionTitle>{text}</HeroSectionTitle>;
  }

  const highlightStart = text.indexOf(highlight);

  if (highlightStart < 0) {
    return <HeroSectionTitle>{text}</HeroSectionTitle>;
  }

  const textBeforeHighlight = text.slice(0, highlightStart);
  const textAfterHighlight = text.slice(highlightStart + highlight.length);

  return (
    <HeroSectionTitle>
      {textBeforeHighlight}
      <span>{highlight}</span>
      {textAfterHighlight}
    </HeroSectionTitle>
  );
};

const ctaMapper = (
  { text, ...props }: NonNullable<HeroSectionProps["CTAs"]>[number],
  index: number,
) => {
  return (
    <Button key={`hero-section-cta-${index}`} {...(props as ButtonProps)}>
      {text}
    </Button>
  );
};

const HeroSectionLayout = ({
  imgSrc,
  title,
  CTAs = [],
  chip,
  subtitle,
  layout = "default",
  rightPanel,
}: HeroSectionProps) => {
  const ref = useRef<HTMLImageElement>(null);
  useLenis(() => {
    const img = ref.current;
    if (!img) return;
    img.style.transform = `translateY(${window.scrollY * 0.5}px)`;
  }, []);
  const secondContainer = useMemo(() => {
    return (
      <HeroSectionImage
        ref={ref}
        src={imgSrc}
        alt={""}
        width={5173}
        height={3510}
        sizes="100vw"
        preload
        loading="eager"
        quality={100}
        fetchPriority="high"
      />
    );
  }, [imgSrc]);

  const hasRightPanel = !!rightPanel;
  const isSplitLayout = layout === "split" && hasRightPanel;

  const content = (
    <>
      <div className="content-wrapper">
        {chip && (
          <Chip
            $backgroundColor={"secondary"}
            $backgroundColorWeight="800"
            $textColorWeight={"100"}
            className="chip"
          >
            {chip.toUpperCase()}
          </Chip>
        )}
        {getTitle(title)}
        {subtitle && (
          <P
            $color="accent"
            $colorWeight="1000"
            $colorAlpha={0.85}
            className="sub-title"
            $size="s"
            $margin="1.5rem 0"
          >
            {subtitle}
          </P>
        )}
        <div className="btns-container">{CTAs.map(ctaMapper)}</div>
      </div>
      {hasRightPanel && <div className="right-panel-wrapper">{rightPanel}</div>}
    </>
  );

  return (
    <HeroSectionWrapper
      bg={"var(--color-primary-400)"}
      secondContainer={secondContainer}
      wrapperCss={
        isSplitLayout
          ? [heroSectionWrapperStyles, splitHeroSectionWrapperStyles]
          : heroSectionWrapperStyles
      }
      className={isSplitLayout ? "split-layout" : ""}
    >
      {isSplitLayout ? (
        <HeroSectionSplitGrid $hasRightPanel={hasRightPanel}>
          {content}
        </HeroSectionSplitGrid>
      ) : (
        content
      )}
    </HeroSectionWrapper>
  );
};

export default HeroSectionLayout;
