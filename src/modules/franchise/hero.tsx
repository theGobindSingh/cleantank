import { H2, P, Span } from "@components/html";
import HeroSection from "@layouts/hero-section";
import {
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
}: NonNullable<FranchiseHeroSectionProps["stats"]>[number]) => {
  return (
    <FranchiseHeroStatItem key={`${label}-${value}`}>
      <Span
        $size="4xs"
        $weight="700"
        $color="neutral"
        $colorWeight="900"
        $letterSpacing="0.08em"
      >
        {label.toUpperCase()}
      </Span>
      <Span $size="1xs" $weight="800" $color="neutral" $colorWeight="1000">
        {value}
      </Span>
      <Span $size="4xs" $color="neutral" $colorWeight="900" $lineHeight="1.5">
        {supportingText}
      </Span>
    </FranchiseHeroStatItem>
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
              $colorWeight="900"
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
        </FranchiseHeroTrustPanel>
      }
    />
  );
};

export default FranchiseHeroSection;
