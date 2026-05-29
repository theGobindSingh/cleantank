import { H2, H3, P, Span } from "@components/html";
import HeroSection from "@layouts/hero-section";
import {
  FranchiseHeroHighlightItem,
  FranchiseHeroHighlightList,
  FranchiseHeroStatGrid,
  FranchiseHeroStatItem,
  FranchiseHeroTrustHeader,
  FranchiseHeroTrustPanel,
} from "@modules/franchise/styles";
import { FranchiseHeroSectionProps } from "@modules/franchise/types";

const statMapper = ({
  label,
  value,
  supportingText,
  isPlaceholder,
}: NonNullable<FranchiseHeroSectionProps["stats"]>[number]) => {
  return (
    <FranchiseHeroStatItem
      key={`${label}-${value}`}
      $isPlaceholder={!!isPlaceholder}
    >
      <Span
        $size="4xs"
        $weight="700"
        $color="neutral"
        $colorWeight="700"
        $letterSpacing="0.08em"
      >
        {label.toUpperCase()}
      </Span>
      <Span $size="1xs" $weight="800" $color="neutral" $colorWeight="1000">
        {value}
      </Span>
      <Span $size="4xs" $color="neutral" $colorWeight="700" $lineHeight="1.5">
        {supportingText}
      </Span>
    </FranchiseHeroStatItem>
  );
};

const highlightMapper = ({
  icon: Icon,
  title,
  description,
}: NonNullable<FranchiseHeroSectionProps["highlights"]>[number]) => {
  return (
    <FranchiseHeroHighlightItem key={title}>
      <Icon className="highlight-icon" />
      <div className="highlight-copy">
        <H3
          $size="3xs"
          $weight="700"
          $color="neutral"
          $colorWeight="1000"
          $margin="0"
        >
          {title}
        </H3>
        <P
          $size="4xs"
          $color="neutral"
          $colorWeight="700"
          $margin="0"
          $lineHeight="1.6"
        >
          {description}
        </P>
      </div>
    </FranchiseHeroHighlightItem>
  );
};

const FranchiseHeroSection = ({
  chip,
  title,
  subtitle,
  imgSrc,
  CTAs = [],
  trustCardTitle,
  trustCardDescription,
  stats = [],
  highlights = [],
  footnote,
}: FranchiseHeroSectionProps) => {
  return (
    <HeroSection
      title={title}
      imgSrc={imgSrc}
      CTAs={CTAs}
      layout="split"
      {...(chip !== undefined ? { chip } : {})}
      {...(subtitle !== undefined ? { subtitle } : {})}
      rightPanel={
        <FranchiseHeroTrustPanel>
          <FranchiseHeroTrustHeader>
            <H2
              $size="s"
              $weight="700"
              $color="neutral"
              $colorWeight="1000"
              $margin="0"
            >
              {trustCardTitle}
            </H2>
            <P
              $size="4xs"
              $color="neutral"
              $colorWeight="700"
              $margin="0"
              $lineHeight="1.6"
            >
              {trustCardDescription}
            </P>
          </FranchiseHeroTrustHeader>
          {stats.length > 0 && (
            <FranchiseHeroStatGrid>
              {stats.map(statMapper)}
            </FranchiseHeroStatGrid>
          )}
          {highlights.length > 0 && (
            <FranchiseHeroHighlightList>
              {highlights.map(highlightMapper)}
            </FranchiseHeroHighlightList>
          )}
          {footnote && (
            <P
              $size="4xs"
              $color="neutral"
              $colorWeight="700"
              $margin="0"
              $lineHeight="1.5"
              $colorAlpha={0.78}
              className="hero-footnote"
            >
              {footnote}
            </P>
          )}
        </FranchiseHeroTrustPanel>
      }
    />
  );
};

export default FranchiseHeroSection;
