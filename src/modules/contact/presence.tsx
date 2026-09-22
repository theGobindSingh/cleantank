import { P } from "@components/html";
import StandardSectionLayout from "@layouts/standard-section";
import {
  ProofItem,
  ProofStrip,
  VisualProofBody,
  VisualProofImage,
  VisualProofImageFrame,
} from "@modules/contact/styles";
import { PresenceSectionProps } from "@modules/contact/types";
import { AccessTimeRounded, PublicRounded } from "@mui/icons-material";

const PresenceSection = ({
  chip,
  title,
  description,
  image,
  imageAlt,
  states,
  technicalRepresentativesLine,
  emergencyLine,
}: PresenceSectionProps) => {
  return (
    <StandardSectionLayout
      chip={chip}
      title={title}
      description={description}
      element="section"
      css={{
        paddingTop: "0rem",
      }}
    >
      <VisualProofBody>
        {image ? (
          <VisualProofImageFrame>
            <VisualProofImage
              src={image}
              alt={imageAlt ?? ""}
              sizes="(max-width: 1024px) 90vw, 55vw"
            />
          </VisualProofImageFrame>
        ) : null}
        <ProofStrip style={{ marginTop: "0.7em" }}>
          <ProofItem>
            <PublicRounded className="proof-icon" />
            <P
              $size="1xs"
              $weight="700"
              $color="neutral"
              $colorWeight="200"
              $lineHeight="1.35"
            >
              {`Serving ${states.length} states: ${states.join(", ")}. ${technicalRepresentativesLine}.`}
            </P>
          </ProofItem>
          <ProofItem>
            <AccessTimeRounded className="proof-icon" />
            <P
              $size="1xs"
              $weight="700"
              $color="neutral"
              $colorWeight="200"
              $lineHeight="1.35"
            >
              {emergencyLine}
            </P>
          </ProofItem>
        </ProofStrip>
      </VisualProofBody>
    </StandardSectionLayout>
  );
};

export default PresenceSection;
