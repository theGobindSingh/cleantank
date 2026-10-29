import type { Testimonial, TestimonialsBlock } from "@/payload-types";
import { site } from "@/site";
import { P } from "@components/html";
import Section from "@components/section";
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

// A quote from a certificate has no name, so the role takes its place.
const renderQuote = (item: Testimonial) => {
  return (
    <QuoteCard
      key={item.id}
      quote={item.quote}
      name={item.name ?? item.role}
      caption={
        item.name ? `${item.role}, ${item.organisation}` : item.organisation
      }
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
    <Section heading={heading}>
      <ul className="grid gap-px overflow-hidden rounded-xs border border-border bg-border lg:grid-cols-3">
        {showPlaceholders
          ? PLACEHOLDER_KEYS.map(renderPlaceholder)
          : shown.map(renderQuote)}
      </ul>
    </Section>
  );
};

export default Testimonials;
