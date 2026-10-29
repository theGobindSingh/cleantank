import type { FaqBlock } from "@/payload-types";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import { H2, P } from "@components/html";
import { iconProps } from "@components/icon";
import { PlusIcon } from "lucide-react";

type Item = FaqBlock["items"][number];

const renderItem = (item: Item, index: number) => {
  return (
    <details key={item.id ?? index} className="group border-b border-border">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-(length:--fs-h4) leading-snug font-semibold text-heading [&::-webkit-details-marker]:hidden">
        {item.question}
        <PlusIcon
          {...iconProps}
          className="mt-1 size-5 shrink-0 transition-transform duration-150 group-open:rotate-45"
        />
      </summary>
      <P className="max-w-[68ch] pb-6 text-pretty text-fg-muted">
        {item.answer}
      </P>
    </details>
  );
};

/** Plain questions and answers as native `details`, so they work without JS. */
const Faq = ({ heading, items }: FaqBlock) => {
  return (
    <CommonFullWidthWrapper className="flex flex-col gap-6 py-16 md:gap-8 md:py-20 lg:py-24">
      <H2 $margin="0">{heading}</H2>
      <div className="max-w-[80ch] border-t border-border">
        {items.map(renderItem)}
      </div>
    </CommonFullWidthWrapper>
  );
};

export default Faq;
