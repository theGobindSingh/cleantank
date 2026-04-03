import { H3, P } from "@components/html";
import HomeSectionLayout from "@layouts/home-section";
import {
  HomeProcessSectionItem,
  HomeProcessSectionItemWrapper,
  processExtraCss,
} from "@modules/home/styles";
import { HomeProcessSectionProps } from "@modules/home/types";

const itemsMapper = ({
  icon: Icon,
  title,
  description,
}: NonNullable<HomeProcessSectionProps["items"]>[number]) => (
  <HomeProcessSectionItem key={title}>
    <Icon className="icon" />
    <H3
      $size="1xs"
      $weight="700"
      $color="primary"
      $colorWeight="200"
      $margin="1.75em 0 1.25em 0"
      className="card-title"
    >
      {title}
    </H3>
    <P $color="neutral" $size="3xs" $weight="500" className="card-desc">
      {description}
    </P>
  </HomeProcessSectionItem>
);

const HomeProcessSection = ({
  title,
  description,
  items = [],
}: HomeProcessSectionProps) => (
  <HomeSectionLayout
    title={title}
    description={description}
    css={processExtraCss}
  >
    {items.length > 0 && (
      <HomeProcessSectionItemWrapper>
        {items.map(itemsMapper)}
      </HomeProcessSectionItemWrapper>
    )}
  </HomeSectionLayout>
);

export default HomeProcessSection;
