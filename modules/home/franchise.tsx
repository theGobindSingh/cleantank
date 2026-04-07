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
} from "@modules/home/styles";
import { FranchiseSectionProps } from "@modules/home/types";
import {
  useEasyGoogleForm,
  UseEasyGoogleFormParams,
} from "@webadeva/use-easy-google-form";
import { useMemo, useRef } from "react";
import { toast } from "react-toastify";

const franchisePointMapper = ({
  icon: Icon,
  title,
  description,
}: NonNullable<FranchiseSectionProps["points"]>[number]) => {
  return (
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
};

const FranchiseSection = ({
  chip,
  title,
  points = [],
  ctaText,
  ctaHref,
}: FranchiseSectionProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const easyParams = useMemo<UseEasyGoogleFormParams>(() => {
    return {
      formRef,
      gFormId: "10_RNU0U5WCSnjPnWOyFzAvuULvgIsQsHNvB874olga0",
      links: [
        {
          type: "text",
          entryId: "entry.1259236425",
          formId: "f-name",
        },
        {
          type: "text",
          entryId: "entry.2064195984",
          formId: "f-phone",
        },
        {
          type: "text",
          entryId: "entry.1131631286",
          formId: "f-city",
        },
      ],
      onSubmitExtra: () => {
        formRef.current?.reset();
        toast.success("Your inquiry has been sent successfully!");
      },
    };
  }, []);
  const submitHandler = useEasyGoogleForm(easyParams);
  return (
    <FranchiseSectionWrapper bg="var(--color-primary-100)">
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
        {ctaText && (
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
      <FranchiseFormCard onSubmit={submitHandler} ref={formRef}>
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
            placeholder="Your Full Name"
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
    </FranchiseSectionWrapper>
  );
};

export default FranchiseSection;
