import Button from "@components/button";
import Chip from "@components/chip";
import {
  HeroSectionImage,
  HeroSectionWrapper,
  heroSectionWrapperStyles,
} from "@components/hero-section/styles";
import { HeroSectionProps } from "@components/hero-section/types";
import { H1, P, Span } from "@components/html";
import { useCallback, useMemo } from "react";

const getTitle = (title: HeroSectionProps["title"]) => {
  if (typeof title === "string") {
    return (
      <H1 $margin="0" className="title">
        {title}
      </H1>
    );
  }
  const { text, highlight } = title;
  const parts = text.split(highlight);
  return (
    <H1 $margin="0" className="title">
      {parts[0]}
      <Span style={{ color: "var(--color-primary-300)" }}>{highlight}</Span>
      {parts[1]}
    </H1>
  );
};

const HeroSection = ({
  imgSrc,
  title,
  CTAs = [],
  chip,
  imgAlt,
  subtitle,
}: HeroSectionProps) => {
  const secondContainer = useMemo(() => {
    return (
      <HeroSectionImage
        src={imgSrc}
        alt={imgAlt ?? (typeof title === "string" ? title : title?.text)}
        width={5173}
        height={3510}
        sizes="100vw"
        preload
        loading="eager"
        quality={100}
        fetchPriority="high"
      />
    );
  }, [imgSrc, imgAlt, title]);
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
