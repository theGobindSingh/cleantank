import Button from "@components/button";
import Chip from "@components/chip";
import { H2, H3, P } from "@components/html";
import {
  FranchiseFormCard,
  FranchiseFormField,
  FranchiseFormInput,
  FranchiseFormLabel,
  FranchiseLeft,
  FranchisePointItem,
  FranchisePointList,
  FranchiseSectionWrapper,
  FranchiseTwoCol,
} from "@modules/home/styles";
import { FranchiseSectionProps } from "@modules/home/types";

const franchisePointMapper = ({
  icon: Icon,
  title,
  description,
}: NonNullable<FranchiseSectionProps["points"]>[number]) => (
  <FranchisePointItem key={title}>
    <Icon className="point-icon" />
    <div className="point-content">
      <H3
        $size="1xs"
        $weight="700"
        $color="neutral"
        $colorWeight="1000"
        $margin="0"
      >
        {title}
      </H3>
      <P
        $size="3xs"
        $color="neutral"
        $colorWeight="700"
        $margin="0"
        $lineHeight="1.6"
      >
        {description}
      </P>
    </div>
  </FranchisePointItem>
);

const FranchiseSection = ({
  chip,
  title,
  points = [],
  ctaText,
  ctaHref,
}: FranchiseSectionProps) => (
  <FranchiseSectionWrapper bg="var(--color-primary-100)">
    <FranchiseTwoCol>
      <FranchiseLeft>
        {chip && (
          <Chip
            $backgroundColor="secondary"
            $backgroundColorWeight="700"
            $textColorWeight="100"
          >
            {chip}
          </Chip>
        )}
        <H2 $weight="700" $color="neutral" $colorWeight="1000" $margin="0">
          {title ?? ""}
        </H2>
        {points.length > 0 && (
          <FranchisePointList>
            {points.map(franchisePointMapper)}
          </FranchisePointList>
        )}
        {ctaText && ctaHref && (
          <Button
            href={ctaHref}
            $variant="filled"
            $color="secondary"
            $colorWeight="700"
            $textColor="primary"
            $textColorWeight="100"
            $fontWeight="600"
          >
            {ctaText}
          </Button>
        )}
      </FranchiseLeft>
      <FranchiseFormCard>
        <H3
          $size="s"
          $weight="600"
          $color="neutral"
          $colorWeight="1000"
          $margin="0 0 0.5rem"
        >
          Start Your Inquiry
        </H3>
        <FranchiseFormField>
          <FranchiseFormLabel htmlFor="f-name">Full Name</FranchiseFormLabel>
          <FranchiseFormInput
            id="f-name"
            type="text"
            placeholder="Rajesh Kumar"
            autoComplete="name"
          />
        </FranchiseFormField>
        <FranchiseFormField>
          <FranchiseFormLabel htmlFor="f-phone">
            Phone Number
          </FranchiseFormLabel>
          <FranchiseFormInput
            id="f-phone"
            type="tel"
            placeholder="+91 98765 43210"
            autoComplete="tel"
          />
        </FranchiseFormField>
        <FranchiseFormField>
          <FranchiseFormLabel htmlFor="f-city">City / State</FranchiseFormLabel>
          <FranchiseFormInput
            id="f-city"
            type="text"
            placeholder="Mumbai, Maharashtra"
          />
        </FranchiseFormField>
        <Button
          type="submit"
          $variant="filled"
          $color="secondary"
          $colorWeight="700"
          $textColor="primary"
          $textColorWeight="100"
          $fontWeight="600"
        >
          Send Inquiry
        </Button>
      </FranchiseFormCard>
    </FranchiseTwoCol>
  </FranchiseSectionWrapper>
);

export default FranchiseSection;
