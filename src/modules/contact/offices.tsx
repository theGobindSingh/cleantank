import Button from "@components/button";
import { H3, P } from "@components/html";
import { Office } from "@constants";
import StandardSectionLayout from "@layouts/standard-section";
import {
  ComplianceNote,
  OfficeCard,
  OfficeGrid,
} from "@modules/contact/styles";
import { OfficesSectionProps } from "@modules/contact/types";

const officeMapper = ({ label, address, phone }: Office) => {
  return (
    <OfficeCard key={label}>
      <H3
        $size="4xs"
        $weight="800"
        $color="neutral"
        $colorWeight="1000"
        $margin="0 0 0.4em 0"
      >
        {label}
      </H3>
      <P
        $size="4xs"
        $color="neutral"
        $colorWeight="900"
        $lineHeight="1.55"
        $margin="0 0 0.6em 0"
      >
        {address}
      </P>
      <Button
        href={`tel:+91${phone}`}
        $variant="text"
        $textColor="secondary"
        $textColorWeight="700"
        $fontWeight="700"
      >
        +91 {phone}
      </Button>
    </OfficeCard>
  );
};

const OfficesSection = ({
  title,
  description,
  offices,
  gstin,
  pan,
  isoWording,
}: OfficesSectionProps) => {
  return (
    <StandardSectionLayout
      title={title}
      description={description}
      element="section"
    >
      <OfficeGrid>{offices.map(officeMapper)}</OfficeGrid>
      <ComplianceNote>
        GSTIN: {gstin} · PAN: {pan}
        <br />
        {isoWording}
      </ComplianceNote>
    </StandardSectionLayout>
  );
};

export default OfficesSection;
