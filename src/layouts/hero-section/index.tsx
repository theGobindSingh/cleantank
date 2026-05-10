import Button from "@components/button";
import Chip from "@components/chip";
import { P } from "@components/html";
import {
  HeroSectionImage,
  HeroSectionTitle,
  HeroSectionWrapper,
  heroSectionWrapperStyles,
} from "@layouts/hero-section/styles";
import { HeroSectionProps } from "@layouts/hero-section/types";
import { useLenis } from "lenis/react";
import { useCallback, useMemo, useRef } from "react";

const getTitle = (title: HeroSectionProps["title"]) => {
  if (typeof title === "string") {
    return <HeroSectionTitle>{title}</HeroSectionTitle>;
  }
  const { text, highlight } = title;
  const parts = text.split(highlight);
  return (
    <HeroSectionTitle>
      {parts[0]}
      <span>{highlight}</span>
      {parts[1]}
    </HeroSectionTitle>
  );
};

const HeroSection = ({
  imgSrc,
  title,
  CTAs = [],
  chip,
  subtitle,
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
  const ctaMapper = useCallback(
    (
      { text, ...props }: NonNullable<HeroSectionProps["CTAs"]>[number],
      index: number,
    ) => {
      return (
        <Button key={`hero-section-cta-${index}`} {...(props as any)}>
          {text}
        </Button>
      );
    },
    [],
  );
  return (
    <HeroSectionWrapper
      bg={"var(--color-primary-400)"}
      secondContainer={secondContainer}
      wrapperCss={heroSectionWrapperStyles}
    >
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
    </HeroSectionWrapper>
  );
};

export default HeroSection;
