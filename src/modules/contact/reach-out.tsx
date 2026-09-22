import Button from "@components/button";
import { H3, P, Span } from "@components/html";
import StandardSectionLayout from "@layouts/standard-section";
import ContactForm from "@modules/contact/contact-form";
import {
  ContactDetailsPanel,
  ContactGrid,
  ContactMethodRow,
  EnquiryTypeCard,
  EnquiryTypeGrid,
} from "@modules/contact/styles";
import {
  ContactMethod,
  EnquiryTypeItem,
  ReachOutSectionProps,
} from "@modules/contact/types";

const contactMethodMapper = ({
  icon: Icon,
  title,
  value,
  href,
}: ContactMethod) => {
  return (
    <ContactMethodRow key={title}>
      <div className="method-icon">
        <Icon />
      </div>
      <div className="method-content">
        <Span
          $size="4xs"
          $weight="700"
          $color="primary"
          $colorWeight="1000"
          $letterSpacing="0.08em"
        >
          {title.toUpperCase()}
        </Span>
        <Button
          href={href}
          $variant="text"
          $textColor="primary"
          $textColorWeight="1000"
          $fontWeight="700"
          className="method-link"
        >
          {value}
        </Button>
      </div>
    </ContactMethodRow>
  );
};

const enquiryTypeMapper = ({ title, description }: EnquiryTypeItem) => {
  return (
    <EnquiryTypeCard key={title}>
      <H3
        $size="4xs"
        $weight="800"
        $color="neutral"
        $colorWeight="1000"
        $margin="0 0 0.35em 0"
      >
        {title}
      </H3>
      <P
        $size="4xs"
        $color="neutral"
        $colorWeight="900"
        $lineHeight="1.55"
        $margin="0"
      >
        {description}
      </P>
    </EnquiryTypeCard>
  );
};

const ReachOutSection = ({
  title,
  description,
  enquiryTypes,
  fields,
  gFormConfig,
  methods,
  submitText,
}: ReachOutSectionProps) => {
  return (
    <StandardSectionLayout
      title={title}
      description={description}
      element="section"
      headingLevel="h1"
      bg="var(--color-neutral-1000)"
    >
      <EnquiryTypeGrid>{enquiryTypes.map(enquiryTypeMapper)}</EnquiryTypeGrid>
      <ContactGrid>
        <ContactForm
          fields={fields}
          gFormConfig={gFormConfig}
          submitText={submitText}
        />
        <ContactDetailsPanel>
          <H3
            $size="s"
            $weight="800"
            $color="primary"
            $colorWeight="1000"
            $margin="0 0 0.45em 0"
            css={{ letterSpacing: ".02em" }}
          >
            Direct Contact
          </H3>
          <P
            $size="4xs"
            $color="primary"
            $colorWeight="1000"
            $colorAlpha={0.75}
            $margin="0 0 0.6em 0"
            $lineHeight="1.55"
          >
            The form above cannot be submitted yet — please reach us directly
            instead.
          </P>
          {methods.map(contactMethodMapper)}
        </ContactDetailsPanel>
      </ContactGrid>
    </StandardSectionLayout>
  );
};

export default ReachOutSection;
