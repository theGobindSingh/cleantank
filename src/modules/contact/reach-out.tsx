import { H3, P, Span } from "@components/html";
import StandardSectionLayout from "@layouts/standard-section";
import ContactForm from "@modules/contact/contact-form";
import {
  ContactDetailsPanel,
  ContactGrid,
  ContactMethodRow,
} from "@modules/contact/styles";
import { ContactMethod, ReachOutSectionProps } from "@modules/contact/types";

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
        {href ? (
          <a className="method-link" href={href}>
            <P
              $size="3xs"
              $weight="700"
              $color="primary"
              $colorWeight="1000"
              $lineHeight="1.55"
              style={{ wordBreak: "break-word" }}
            >
              {value}
            </P>
          </a>
        ) : (
          <P
            $size="3xs"
            $weight="600"
            $color="accent"
            $colorWeight="1000"
            $lineHeight="1.55"
          >
            {value}
          </P>
        )}
      </div>
    </ContactMethodRow>
  );
};

const ReachOutSection = ({
  // chip,
  title,
  description,
  fields,
  gFormConfig,
  methods,
  submitText,
}: ReachOutSectionProps) => {
  return (
    <StandardSectionLayout
      // chip={chip}
      title={title}
      description={description}
      element="section"
      headingLevel="h1"
      bg="var(--color-neutral-1000)"
    >
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
            style={{ letterSpacing: ".02em" }}
          >
            Direct Contact
          </H3>
          {methods.map(contactMethodMapper)}
        </ContactDetailsPanel>
      </ContactGrid>
    </StandardSectionLayout>
  );
};

export default ReachOutSection;
