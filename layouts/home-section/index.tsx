import Chip from "@components/chip";
import { H2, P } from "@components/html";
import { HomeSectionWrapper } from "@layouts/home-section/styles";
import { HomeSectionLayoutProps } from "@layouts/home-section/types";

const HomeSectionLayout = ({
  chip,
  title,
  description,
  children,
  bg,
  element,
  className,
}: HomeSectionLayoutProps) => (
  <HomeSectionWrapper
    {...(bg ? { bg } : {})}
    {...(element ? { element } : {})}
    {...(className ? { className } : {})}
  >
    {chip && (
      <Chip
        $backgroundColor="secondary"
        $backgroundColorWeight="800"
        $textColorWeight="100"
      >
        {String(chip).toUpperCase()}
      </Chip>
    )}
    <H2 $margin={chip ? "1rem 0 0" : "0"} $weight="700" className="title">
      {title}
    </H2>
    {description && (
      <P
        className="desc"
        $margin="0.75rem 0 0"
        $size="s"
        $color="neutral"
        $colorWeight="400"
      >
        {description}
      </P>
    )}
    {children}
  </HomeSectionWrapper>
);

export default HomeSectionLayout;
