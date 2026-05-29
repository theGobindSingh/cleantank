import Chip from "@components/chip";
import { H1, H2, P } from "@components/html";
import { HomeSectionWrapper } from "@layouts/standard-section/styles";
import { StandardSectionLayoutProps } from "@layouts/standard-section/types";

const StandardSectionLayout = ({
  chip,
  title,
  description,
  headingLevel = "h2",
  children,
  bg,
  element,
  wrapperProps,
  className,
}: StandardSectionLayoutProps) => {
  const Heading = headingLevel === "h1" ? H1 : H2;

  return (
    <HomeSectionWrapper
      bg={bg!}
      element={element}
      wrapperProps={wrapperProps}
      className={className!}
    >
      {chip && (
        <Chip
          $backgroundColor="secondary"
          $backgroundColorWeight="800"
          $textColorWeight="100"
          className="chip"
        >
          {String(chip).toUpperCase()}
        </Chip>
      )}
      <Heading
        $margin={chip ? "1rem 0 0" : "0"}
        $weight="700"
        className="title"
      >
        {title}
      </Heading>
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
};

export default StandardSectionLayout;
