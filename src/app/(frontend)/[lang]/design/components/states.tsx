import { H3, P, Span } from "@components/html";
import { iconProps } from "@components/icon";
import {
  CircleAlert,
  CircleCheck,
  Info,
  TriangleAlert,
  type LucideIcon,
} from "lucide-react";
import { STATES } from "./data";
import SchemePair, { type Scheme } from "./scheme-pair";
import Section from "./section";

type State = (typeof STATES)[number];

const ICONS: Record<State, LucideIcon> = {
  success: CircleCheck,
  caution: TriangleAlert,
  info: Info,
  error: CircleAlert,
};

const COPY: Record<State, [string, string]> = {
  success: ["Service completed", "Cleaning Certificate issued on 03 Oct 2026."],
  caution: [
    "Cleaning due soon",
    "Your tank is due in 7 days. You decide when to book.",
  ],
  info: [
    "Subject to availability",
    "24×7 service depends on location and manpower.",
  ],
  error: ["Phone number missing", "Enter a 10-digit mobile number."],
};

// Literal class strings, so Tailwind generates them
const STYLE: Record<State, string> = {
  success: "border-success-border bg-success-bg text-success",
  caution: "border-caution-border bg-caution-bg text-caution",
  info: "border-info-border bg-info-bg text-info",
  error: "border-error-border bg-error-bg text-error",
};

const renderAlert = (state: State) => {
  const Icon = ICONS[state];
  const [title, body] = COPY[state];
  return (
    <div
      key={state}
      role="note"
      className={`flex gap-3 rounded-sm border p-4 ${STYLE[state]}`}
    >
      <Icon {...iconProps} className="size-5 shrink-0" />
      <div className="flex flex-col gap-0.5">
        <Span $size="small" $weight="700">
          {title}
        </Span>
        <Span $size="small" className="text-fg">
          {body}
        </Span>
      </div>
    </div>
  );
};

const Form = (scheme: Scheme) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={`name-${scheme}`}
          className="font-mono text-(length:--fs-caption) font-medium tracking-[0.08em] uppercase"
        >
          Name (required)
        </label>
        <input
          id={`name-${scheme}`}
          defaultValue="Ravi Kumar"
          className="h-12 rounded-sm border border-border-control bg-surface px-3 text-(length:--fs-body) text-fg"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={`phone-${scheme}`}
          className="font-mono text-(length:--fs-caption) font-medium tracking-[0.08em] uppercase"
        >
          Mobile number (required)
        </label>
        <input
          id={`phone-${scheme}`}
          defaultValue="94535"
          aria-invalid="true"
          aria-describedby={`phone-${scheme}-error`}
          className="h-12 rounded-sm border-2 border-error-border bg-surface px-3 text-(length:--fs-body) text-fg"
        />
        <Span
          id={`phone-${scheme}-error`}
          $size="small"
          className="flex items-center gap-1.5 text-error"
        >
          <CircleAlert {...iconProps} strokeWidth={2} className="size-4" />
          Enter a 10-digit mobile number.
        </Span>
      </div>
    </div>
  );
};

const Alerts = () => {
  return <div className="flex flex-col gap-3">{STATES.map(renderAlert)}</div>;
};

/** Status colours as alerts and form errors, light and dark. */
const States = () => {
  return (
    <Section
      id="states"
      number={10}
      title="Status and forms"
      intro="Success, caution, info and error are for status only, and always come with an icon and a word: colour is never the only signal. Alerts are radius 4 px with a 1 px state border, the state fill, a 20 px icon and a bold title. In dark mode the fill becomes navy 700 and the text and border step to 300."
    >
      <SchemePair render={Alerts} />
      <div className="flex flex-col gap-4">
        <H3 $margin="0">Inputs</H3>
        <P $size="small" className="max-w-[68ch] text-fg-muted">
          48 px tall, radius 4 px, 1 px border-control edge on surface, 16 px
          text. The label sits above in the label style and says required or
          optional in words. An error adds a 2 px error border, an icon and a
          message tied with aria-invalid and aria-describedby. Never disable the
          submit button.
        </P>
        <SchemePair render={Form} />
      </div>
    </Section>
  );
};

export default States;
