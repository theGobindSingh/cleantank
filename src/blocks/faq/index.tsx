import type { FaqBlock } from "@/payload-types";
import { P } from "@components/html";
import { iconProps } from "@components/icon";
import Section from "@components/section";
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
    <Section heading={heading}>
      <div className="max-w-[80ch] border-t border-border">
        {items.map(renderItem)}
      </div>
    </Section>
  );
};

export default Faq;
