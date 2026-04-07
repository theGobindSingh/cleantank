import { H3, P } from "@components/html";
import StandardSectionLayout from "@layouts/standard-section";
import { breakpoints } from "@styles/global";
import { useEffect, useRef } from "react";
import { IconCard, IconCardList, iconCardSectionCss } from "./styles";
import { IconCardItem, IconCardSectionLayoutProps } from "./types";

const Card = ({ icon: Icon, title, description }: IconCardItem) => {
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const callback: IntersectionObserverCallback = (entries) => {
      const screenWidth = window.innerWidth;
      const { isIntersecting = false } = entries[0] ?? ({} as never);
      if (screenWidth > breakpoints.phone.max) {
        ref.current?.classList.remove("active");
        return;
      }
      if (isIntersecting) {
        ref.current?.classList.add("active");
      } else {
        ref.current?.classList.remove("active");
      }
    };
    const observer = new IntersectionObserver(callback, { threshold: 0.95 });
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <IconCard ref={ref}>
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
    </IconCard>
  );
};

const cardMapper = (props: IconCardItem) => {
  return <Card key={props.title} {...props} />;
};

const IconCardSectionLayout = ({
  chip,
  title,
  description,
  items = [],
  areNumbersVisible = true,
}: IconCardSectionLayoutProps) => {
  return (
    <StandardSectionLayout
      chip={chip}
      title={title}
      description={description}
      css={iconCardSectionCss}
    >
      {items.length > 0 && (
        <IconCardList
          className={areNumbersVisible ? "numbers-visible" : undefined}
        >
          {items.map(cardMapper)}
        </IconCardList>
      )}
    </StandardSectionLayout>
  );
};

export default IconCardSectionLayout;
