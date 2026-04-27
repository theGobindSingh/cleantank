import Chip from "@/src/components/chip";
import { H2, H3, P } from "@/src/components/html";
import {
  TechnologyImage,
  TechnologyImageWrapper,
  TechnologyLeft,
  TechnologyPointItem,
  TechnologyPointList,
  TechnologyRight,
  TechnologyTitleBlock,
  TechnologyWrapper,
} from "@/src/modules/about/styles";
import { TechnologySectionProps } from "@/src/modules/about/types";

const pointMapper = ({
  icon: Icon,
  title,
  description,
}: NonNullable<TechnologySectionProps["points"]>[number]) => {
  return (
    <TechnologyPointItem key={title}>
      <Icon className="point-icon" />
      <div className="point-content">
        <H3
          $size="1xs"
          $weight="700"
          $color="primary"
          $colorWeight="200"
          $margin="0"
        >
          {title}
        </H3>
        <P
          $size="3xs"
          $color="neutral"
          $colorWeight="400"
          $margin="0"
          $lineHeight="1.7"
        >
          {description}
        </P>
      </div>
    </TechnologyPointItem>
  );
};

const TechnologySection = ({
  chip,
  title,
  points = [],
  images = [],
}: TechnologySectionProps) => {
  const [firstImage, secondImage] = images;

  return (
    <TechnologyWrapper element="section" bg="var(--color-neutral-1000)">
      <TechnologyLeft>
        <TechnologyTitleBlock>
          {chip && (
            <Chip
              $backgroundColor="secondary"
              $backgroundColorWeight="800"
              $textColorWeight="100"
            >
              {chip.toUpperCase()}
            </Chip>
          )}
          {title && (
            <H2
              $margin={chip ? "1rem 0 0" : "0"}
              $weight="700"
              $color="primary"
              $colorWeight="100"
              $lineHeight="1.2"
              style={{ whiteSpace: "pre-line" }}
            >
              {title}
            </H2>
          )}
        </TechnologyTitleBlock>
        <TechnologyPointList>{points.map(pointMapper)}</TechnologyPointList>
      </TechnologyLeft>
      <TechnologyRight>
        {firstImage && (
          <TechnologyImageWrapper $tall>
            <TechnologyImage
              src={firstImage.src}
              alt={firstImage.alt}
              fill
              sizes="(max-width: 1024px) 90vw, 42vw"
            />
          </TechnologyImageWrapper>
        )}
        {secondImage && (
          <TechnologyImageWrapper>
            <TechnologyImage
              src={secondImage.src}
              alt={secondImage.alt}
              fill
              sizes="(max-width: 1024px) 90vw, 42vw"
            />
          </TechnologyImageWrapper>
        )}
      </TechnologyRight>
    </TechnologyWrapper>
  );
};

export default TechnologySection;
