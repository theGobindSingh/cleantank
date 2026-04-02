import { Span } from "@components/html";
import { HeroStripItemWrapper, HeroStripWrapper } from "@modules/home/styles";
import { HeroStripProps } from "@modules/home/types";

const HeroStrip = ({ items }: HeroStripProps) => {
  const itemMapper = (
    { icon: Icon, subTitle, title }: HeroStripProps["items"][number],
    index: number,
  ) => (
    <HeroStripItemWrapper key={`hero-strip-item-${index}`}>
      <Icon className="icon" />
      <Span
        $size="s"
        $weight="800"
        $color="primary"
        $colorWeight="100"
        className="title"
      >
        {title}
      </Span>
      <Span
        $size="4xs"
        $weight="700"
        $color="neutral"
        $colorWeight="300"
        className="sub-title"
      >
        {subTitle.toUpperCase()}
      </Span>
    </HeroStripItemWrapper>
  );
  return (
    <HeroStripWrapper bg={"var(--color-neutral-900)"}>
      {items.map(itemMapper)}
    </HeroStripWrapper>
  );
};

export default HeroStrip;
