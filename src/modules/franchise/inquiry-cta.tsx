import Button from "@components/button";
import { H3, P, Span } from "@components/html";
import StandardSectionLayout from "@layouts/standard-section";
import {
  FranchiseInquiryAssuranceItem,
  FranchiseInquiryAssuranceList,
  FranchiseInquiryAssurancePanel,
  FranchiseInquiryField,
  FranchiseInquiryFormCard,
  FranchiseInquiryGrid,
  FranchiseInquiryInput,
  FranchiseInquiryLabel,
  FranchiseInquirySelect,
} from "@modules/franchise/styles";
import {
  FranchiseInquiryField as FranchiseInquiryFieldType,
  FranchiseInquirySectionProps,
} from "@modules/franchise/types";
import {
  useEasyGoogleForm,
  UseEasyGoogleFormParams,
} from "@webadeva/use-easy-google-form";
import { FormEvent, SubmitEvent, useMemo, useRef } from "react";
import { toast } from "react-toastify";

const formFieldMapper = ({
  id,
  label,
  placeholder,
  type,
  autoComplete,
  required,
}: FranchiseInquiryFieldType) => {
  return (
    <FranchiseInquiryField key={id} className="full-row">
      <FranchiseInquiryLabel htmlFor={id}>{label}</FranchiseInquiryLabel>
      <FranchiseInquiryInput
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
      />
    </FranchiseInquiryField>
  );
};

const assuranceMapper = (assurance: string) => {
  return (
    <FranchiseInquiryAssuranceItem key={assurance}>
      <span className="assurance-dot" />
      <P
        $size="3xs"
        $color="neutral"
        $colorWeight="400"
        $margin="0"
        $lineHeight="1.6"
      >
        {assurance}
      </P>
    </FranchiseInquiryAssuranceItem>
  );
};

const FranchiseInquirySection = ({
  chip,
  title,
  description,
  formTitle,
  formDescription,
  submitText,
  investmentRangeLabel,
  investmentRangePlaceholder,
  fields = [],
  investmentRanges = [],
  assurances = [],
  fieldIds,
  gFormConfig,
}: FranchiseInquirySectionProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  const easyParams = useMemo<UseEasyGoogleFormParams>(() => {
    return {
      formRef,
      gFormId: gFormConfig.gFormId,
      links: gFormConfig.links,
      onSubmitExtra: () => {
        formRef.current?.reset();
        toast.success("Your franchise inquiry has been sent successfully.");
      },
    };
  }, [gFormConfig.gFormId, gFormConfig.links]);

  const submitHandler = useEasyGoogleForm(easyParams);

  const guardedSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    const formElement = formRef.current;

    if (!formElement) {
      event.preventDefault();
      toast.error("Unable to submit right now. Please try again.");
      return;
    }

    const cityField = formElement.querySelector(`#${fieldIds.cityRegion}`);
    const investmentField = formElement.querySelector(
      `#${fieldIds.investmentRange}`,
    );
    const hiddenCityInvestmentField = formElement.querySelector(
      `#${fieldIds.cityInvestment}`,
    );

    const cityValue =
      cityField instanceof HTMLInputElement ? cityField.value.trim() : "";
    const investmentValue =
      investmentField instanceof HTMLSelectElement ? investmentField.value : "";

    if (
      !(hiddenCityInvestmentField instanceof HTMLInputElement) ||
      !cityValue ||
      !investmentValue
    ) {
      event.preventDefault();
      toast.info("Please complete all required fields before submitting.");
      return;
    }

    hiddenCityInvestmentField.value = `${cityValue} | Investment: ${investmentValue}`;

    try {
      submitHandler(event as unknown as SubmitEvent<HTMLFormElement>);
    } catch {
      toast.error(
        "Unable to submit inquiry right now. Please use the contact desk.",
      );
    }
  };

  return (
    <StandardSectionLayout
      chip={chip}
      title={title}
      description={description}
      element="section"
      bg="var(--color-neutral-1000)"
      wrapperProps={{ id: "franchise-inquiry" }}
    >
      <FranchiseInquiryGrid>
        <FranchiseInquiryAssurancePanel>
          <H3
            $size="s"
            $weight="700"
            $color="primary"
            $colorWeight="100"
            $margin="0"
          >
            Built for serious operators
          </H3>
          <P
            $size="3xs"
            $color="neutral"
            $colorWeight="400"
            $margin="0"
            $lineHeight="1.65"
          >
            We evaluate market readiness, operating intent, and fit to help you
            build a high-confidence franchise foundation.
          </P>
          {assurances.length > 0 && (
            <FranchiseInquiryAssuranceList>
              {assurances.map(assuranceMapper)}
            </FranchiseInquiryAssuranceList>
          )}
        </FranchiseInquiryAssurancePanel>
        <FranchiseInquiryFormCard onSubmit={guardedSubmitHandler} ref={formRef}>
          <div className="form-intro full-row">
            <H3
              $size="s"
              $weight="700"
              $color="primary"
              $colorWeight="100"
              $margin="0"
            >
              {formTitle}
            </H3>
            <P
              $size="4xs"
              $color="neutral"
              $colorWeight="500"
              $margin="0.45rem 0 0"
              $lineHeight="1.6"
            >
              {formDescription}
            </P>
          </div>
          {fields.map(formFieldMapper)}
          <FranchiseInquiryField className="full-row">
            <FranchiseInquiryLabel htmlFor={fieldIds.investmentRange}>
              {investmentRangeLabel}
            </FranchiseInquiryLabel>
            <FranchiseInquirySelect
              id={fieldIds.investmentRange}
              required
              defaultValue=""
            >
              <option value="" disabled>
                {investmentRangePlaceholder}
              </option>
              {investmentRanges.map((rangeValue) => {
                return (
                  <option key={rangeValue} value={rangeValue}>
                    {rangeValue}
                  </option>
                );
              })}
            </FranchiseInquirySelect>
          </FranchiseInquiryField>
          <input
            id={fieldIds.cityInvestment}
            type="hidden"
            className="full-row"
          />
          <div className="form-actions full-row">
            <Button
              type="submit"
              $variant="filled"
              $size="lg"
              $color="secondary"
              $colorWeight="800"
              $textColor="primary"
              $textColorWeight="100"
              $fontWeight="700"
              $borderRadius="md"
            >
              {submitText}
            </Button>
            <Span
              $size="4xs"
              $color="neutral"
              $colorWeight="500"
              $margin="0.7rem 0 0"
              className="form-note"
            >
              Prefer direct conversation? Use our contact desk for immediate
              support.
            </Span>
            <Button
              href="/contact"
              $variant="text"
              $textColor="secondary"
              $textColorWeight="700"
              $fontWeight="700"
              className="contact-link-btn"
            >
              Contact franchise desk
            </Button>
          </div>
        </FranchiseInquiryFormCard>
      </FranchiseInquiryGrid>
    </StandardSectionLayout>
  );
};

export default FranchiseInquirySection;
