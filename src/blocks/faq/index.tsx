import type { FaqBlock } from "@/payload-types";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import { P } from "@components/html";
import { iconProps } from "@components/icon";
import SectionHeadline from "@components/section-headline";
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

/**
 * Plain questions and answers as native `details`, so they work without JS.
 * From `lg` up the heading sits in the left five columns and the questions in
 * the right seven; below that they stack.
 */
const Faq = ({ heading, highlight, items }: FaqBlock) => {
  return (
    <CommonFullWidthWrapper className="grid gap-10 py-8 md:gap-12 md:py-10 lg:grid-cols-12 lg:gap-6 lg:py-12">
      <div className="lg:col-span-5">
        <SectionHeadline heading={heading} highlight={highlight} />
      </div>
      <div className="max-w-[80ch] self-start border-t border-border lg:col-span-7">
        {items.map(renderItem)}
      </div>
    </CommonFullWidthWrapper>
  );
};

export default Faq;
