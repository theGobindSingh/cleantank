import { H2, P } from "@components/html";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  number: number;
  title: string;
  intro: ReactNode;
  children: ReactNode;
}

/** A numbered spec-sheet section: number and mono reference tag above the H2. */
const Section = ({ id, number, title, intro, children }: SectionProps) => {
  const index = String(number).padStart(2, "0");
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-4 border-t border-border bg-bg py-16 even:bg-bg-subtle md:py-20 lg:py-24"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-4 md:px-8 lg:px-10">
        <header className="flex max-w-[68ch] flex-col gap-3">
          <span className="font-mono text-(length:--fs-caption) font-medium tracking-widest text-fg-muted uppercase">
            {index}&nbsp;&nbsp;REF CT-DS-{index}
          </span>
          <H2 id={`${id}-title`} $margin="0">
            {title}
          </H2>
          <P className="text-fg-muted">{intro}</P>
        </header>
        {children}
      </div>
    </section>
  );
};

export default Section;
