import type { ValuePropBlock } from "@/payload-types";
import { H3, P } from "@components/html";
import StepMarker from "@components/step-marker";
import { tw } from "@utils/tw";

type Item = NonNullable<ValuePropBlock["items"]>[number];

interface ListProps {
  items: Item[];
}

/**
 * The numbered list beside the text: the process track's stacked layout at
 * every width, each item's title and line beside its node.
 */
const List = ({ items }: ListProps) => {
  const renderItem = (item: Item, index: number) => {
    const isLast = index === items.length - 1;
    return (
      <li key={item.id ?? index} className="grid grid-cols-[auto_1fr] gap-x-4">
        <StepMarker number={index + 1} isLast={isLast} />
        <div className={tw("flex flex-col gap-2", !isLast && "pb-10")}>
          <H3 $size="h4" $margin="0">
            {item.title}
          </H3>
          <P className="text-pretty text-fg-muted">{item.line}</P>
        </div>
      </li>
    );
  };

  return (
    <ol className="grid max-w-md self-start lg:col-start-3">
      {items.map(renderItem)}
    </ol>
  );
};

export default List;
