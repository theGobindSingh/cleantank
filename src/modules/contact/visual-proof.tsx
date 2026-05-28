import { P } from "@components/html";
import StandardSectionLayout from "@layouts/standard-section";
import { visualProofIcon } from "@modules/contact/constants";
import {
  ProofItem,
  ProofStrip,
  VisualProofBody,
  VisualProofImage,
  VisualProofImageFrame,
} from "@modules/contact/styles";
import { VisualProofSectionProps } from "@modules/contact/types";

const ProofIcon = visualProofIcon;

const proofItemMapper = (item: string) => {
  return (
    <ProofItem key={item}>
      <ProofIcon className="proof-icon" />
      <P
        $size="1xs"
        $weight="700"
        $color="neutral"
        $colorWeight="200"
        $lineHeight="1.35"
      >
        {item}
      </P>
    </ProofItem>
  );
};

const VisualProofSection = ({
  chip,
  title,
  description,
  image,
  imageAlt,
  proofItems,
}: VisualProofSectionProps) => {
  return (
    <StandardSectionLayout
      chip={chip}
      title={title}
      description={description}
      element="section"
      bg="var(--color-primary-1000)"
    >
      <VisualProofBody>
        <VisualProofImageFrame>
          <VisualProofImage
            src={image}
            alt={imageAlt}
            sizes="(max-width: 1024px) 90vw, 55vw"
          />
        </VisualProofImageFrame>
        <ProofStrip>{proofItems.map(proofItemMapper)}</ProofStrip>
      </VisualProofBody>
    </StandardSectionLayout>
  );
};

export default VisualProofSection;
