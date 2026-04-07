import { H3, P } from "@components/html";
import HomeSectionLayout from "@layouts/home-section";
import {
  HomeProcessSectionItem,
  HomeProcessSectionItemWrapper,
  processExtraCss,
} from "@modules/home/styles";
import { HomeProcessSectionProps } from "@modules/home/types";
import { breakpoints } from "@styles/global";
import { useEffect, useRef } from "react";

const Item = ({
  icon: Icon,
  title,
  description,
}: NonNullable<HomeProcessSectionProps["items"]>[number]) => {
  const ref = useRef<HTMLLIElement>(null);
  useEffect(() => {
    //intersection observer for animation
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
    const observer = new IntersectionObserver(callback, {
      threshold: 0.95,
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <HomeProcessSectionItem ref={ref}>
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
};

const itemsMapper = (
  props: NonNullable<HomeProcessSectionProps["items"]>[number],
) => {
  return <Item key={props.title} {...props} />;
};

const HomeProcessSection = ({
  title,
  description,
  items = [],
}: HomeProcessSectionProps) => {
  return (
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
};

export default HomeProcessSection;
