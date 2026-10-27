import type { Testimonial, TestimonialsBlock } from "@/payload-types";
import { site } from "@/site";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import { H2, P } from "@components/html";
import { getDictionary, type Locale } from "@i18n";
import type { ReactNode } from "react";

interface TestimonialsProps extends TestimonialsBlock {
  locale: Locale;
}

// Until launch, marked placeholder cards stand in for missing quotes so the
// layout can be reviewed. They never render once `site.isLive` is on.
const PLACEHOLDER_KEYS = ["first", "second", "third"];

// Populated quotes that still have permission; a quote unticked after being
// picked drops out here.
const isShown = (item: number | Testimonial): item is Testimonial => {
  return typeof item === "object" && Boolean(item.permission);
};

interface QuoteCardProps {
  quote: string;
  name: string;
  caption: string;
}

const QuoteCard = ({ quote, name, caption }: QuoteCardProps): ReactNode => {
  return (
    <li className="flex bg-surface p-6 md:p-10">
      <figure className="flex flex-col gap-6">
        <blockquote className="grow">
          <P $size="body-l" $margin="0" className="text-pretty">
            “{quote}”
          </P>
        </blockquote>
        <figcaption className="flex flex-col gap-1">
          <span className="font-semibold text-heading">{name}</span>
          <span className="text-(length:--fs-small) text-fg-muted">
            {caption}
          </span>
        </figcaption>
      </figure>
    </li>
  );
};

const renderQuote = (item: Testimonial) => {
  return (
    <QuoteCard
      key={item.id}
      quote={item.quote}
      name={item.name}
      caption={`${item.role}, ${item.organisation}`}
    />
  );
};

/**
 * Up to three quotes in ruled cells, three columns from `lg` up. With no
 * quote picked it renders nothing, or before launch, marked placeholders.
 */
const Testimonials = ({ heading, items, locale }: TestimonialsProps) => {
  const shown = (items ?? []).filter(isShown);
  const showPlaceholders = shown.length === 0 && !site.isLive;
  if (shown.length === 0 && !showPlaceholders) return null;

  const { testimonials: labels } = getDictionary(locale);
  const renderPlaceholder = (key: string) => {
    return (
      <QuoteCard
        key={key}
        quote={labels.placeholderQuote}
        name={labels.placeholderName}
        caption={labels.placeholderCaption}
      />
    );
  };

  return (
    <CommonFullWidthWrapper className="flex flex-col gap-10 py-16 md:gap-12 md:py-20 lg:py-24">
      <H2 $margin="0">{heading}</H2>
      <ul className="grid gap-px overflow-hidden rounded-xs border border-border bg-border lg:grid-cols-3">
        {showPlaceholders
          ? PLACEHOLDER_KEYS.map(renderPlaceholder)
          : shown.map(renderQuote)}
      </ul>
    </CommonFullWidthWrapper>
  );
};

export default Testimonials;
