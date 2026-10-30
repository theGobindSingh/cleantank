import type { AudiencesBlock } from "@/payload-types";
import { H3, P } from "@components/html";
import { iconProps } from "@components/icon";
import Link from "@components/link";
import Section from "@components/section";
import { localePath, type Locale } from "@i18n";
import { ArrowRightIcon } from "lucide-react";

interface AudiencesProps extends AudiencesBlock {
  locale: Locale;
}

type Door = AudiencesBlock["doors"][number];

/**
 * The gateway's three doors as cells of a ruled grid; each cell's link covers
 * the whole cell and leads to its audience's page. Three columns from `lg` up, stacked below.
 */
const Audiences = ({ heading, highlight, doors, locale }: AudiencesProps) => {
  const renderDoor = (door: Door, index: number) => {
    return (
      <li
        key={door.id ?? index}
        className="relative flex flex-col gap-3 bg-surface p-6 outline-1 -outline-offset-1 outline-transparent has-[a:hover]:outline-border-strong md:p-10"
      >
        <H3 $size="h3" $margin="0">
          {door.title}
        </H3>
        <P className="grow text-pretty text-fg-muted">{door.text}</P>
        {/* the link's ::after covers the cell, so the whole card is clickable */}
        <Link
          href={localePath(locale, door.href)}
          className="mt-3 inline-flex items-center gap-2 self-start font-semibold after:absolute after:inset-0 after:content-['']"
        >
          {door.linkLabel}
          <ArrowRightIcon {...iconProps} strokeWidth={2} className="size-4" />
        </Link>
      </li>
    );
  };

  return (
    <Section heading={heading} highlight={highlight}>
      <ul className="grid gap-px overflow-hidden rounded-xs border border-border bg-border lg:grid-cols-3">
        {doors.map(renderDoor)}
      </ul>
    </Section>
  );
};

export default Audiences;
