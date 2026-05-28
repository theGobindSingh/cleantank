import Button from "@components/button";
import { H3, P } from "@components/html";
import {
  ContactFormCard,
  ContactFormFieldWrapper,
  ContactFormInput,
  ContactFormLabel,
  ContactFormSelect,
  ContactFormTextarea,
} from "@modules/contact/styles";
import { ContactFormField, ContactFormProps } from "@modules/contact/types";
import {
  useEasyGoogleForm,
  UseEasyGoogleFormParams,
} from "@webadeva/use-easy-google-form";
import { FormEvent, SubmitEvent, useMemo, useRef } from "react";
import { toast } from "react-toastify";

const isContactFormConfigured = ({
  gFormId,
  links,
}: ContactFormProps["gFormConfig"]) => {
  return (
    !gFormId.includes("REPLACE_") &&
    links.every(({ entryId }) => {
      return !entryId.includes("REPLACE_");
    })
  );
};

const fieldMapper = ({
  id,
  label,
  type,
  placeholder,
  autoComplete,
  required,
  options = [],
}: ContactFormField) => {
  const isWide = type === "textarea";
  const className = isWide ? "wide" : undefined;

  if (type === "select") {
    return (
      <ContactFormFieldWrapper key={id} className={className}>
        <ContactFormLabel htmlFor={id}>{label}</ContactFormLabel>
        <ContactFormSelect id={id} required={required} defaultValue="">
          <option value="" disabled>
            Select project type
          </option>
          {options.map((option) => {
            return (
              <option value={option} key={option}>
                {option}
              </option>
            );
          })}
        </ContactFormSelect>
      </ContactFormFieldWrapper>
    );
  }

  if (type === "textarea") {
    return (
      <ContactFormFieldWrapper key={id} className={className}>
        <ContactFormLabel htmlFor={id}>{label}</ContactFormLabel>
        <ContactFormTextarea
          id={id}
          placeholder={placeholder}
          required={required}
        />
      </ContactFormFieldWrapper>
    );
  }

  return (
    <ContactFormFieldWrapper key={id} className={className}>
      <ContactFormLabel htmlFor={id}>{label}</ContactFormLabel>
      <ContactFormInput
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
      />
    </ContactFormFieldWrapper>
  );
};

const ContactForm = ({ fields, gFormConfig, submitText }: ContactFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const isConfigured = isContactFormConfigured(gFormConfig);
  const easyParams = useMemo<UseEasyGoogleFormParams>(() => {
    return {
      formRef,
      gFormId: gFormConfig.gFormId,
      links: gFormConfig.links,
      onSubmitExtra: () => {
        formRef.current?.reset();
        toast.success("Your site audit request has been sent successfully.");
      },
    };
  }, [gFormConfig.gFormId, gFormConfig.links]);
  const submitHandler = useEasyGoogleForm(easyParams);

  const guardedSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    if (!isConfigured) {
      event.preventDefault();
      toast.info(
        "Contact form setup is pending. Please call or email CleanTank Services.",
      );
      return;
    }

    submitHandler(event as unknown as SubmitEvent<HTMLFormElement>);
  };

  return (
    <ContactFormCard onSubmit={guardedSubmitHandler} ref={formRef}>
      <div className="form-intro" style={{ paddingBottom: "0.8em" }}>
        <H3
          $size="s"
          $weight="800"
          $color="primary"
          $colorWeight="300"
          $margin="0"
          style={{ letterSpacing: "0.01em" }}
        >
          Business Inquiry
        </H3>
        <P
          $size="4xs"
          $color="neutral"
          $colorWeight="400"
          $margin="0.4rem 0 0"
          $lineHeight="1.62"
        >
          Share the basics and our team will respond with the best audit path.
        </P>
      </div>
      {fields.map(fieldMapper)}
      <div className="form-actions" style={{ marginTop: "0.35em" }}>
        <Button
          type="submit"
          $variant="filled"
          $size="lg"
          $color="secondary"
          $colorWeight="700"
          $textColor="primary"
          $textColorWeight="100"
          $fontWeight="800"
          $borderRadius="0.57rem"
          style={{
            paddingInline: "2.4em",
            boxShadow: "0 2.5px 10px 0 rgba(80,80,90,0.01)",
          }}
        >
          {submitText}
        </Button>
      </div>
    </ContactFormCard>
  );
};

export default ContactForm;
