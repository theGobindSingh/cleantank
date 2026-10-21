import { Span } from "@components/html";
import { ROLES, type Role } from "./data";
import Section from "./section";
import Swatch from "./swatch";

const SCOPES = [
  { label: "Light", attrs: { "data-scheme": "light" } },
  { label: "Dark", attrs: { "data-scheme": "dark" } },
  { label: "Navy band", attrs: { "data-surface": "band" } },
] as const;

const renderRole = (role: Role) => {
  const css = `var(--color-${role.name})`;
  const checks =
    role.kind === "fill" ? [] : [{ label: "on its ground", css: "ground" }];

  const renderScope = (scope: (typeof SCOPES)[number]) => {
    return (
      <td
        key={scope.label}
        {...scope.attrs}
        className="bg-bg p-3 align-top text-fg"
      >
        <Swatch
          css={css}
          name={scope.label}
          checks={checks}
          asBorder={role.kind === "border"}
        />
      </td>
    );
  };

  return (
    <tr key={role.name} className="border-b border-border">
      <th scope="row" className="p-3 text-left align-top font-normal">
        <Span $size="small" className="font-mono font-semibold">
          {role.name}
        </Span>
        <br />
        <Span $size="caption" className="text-fg-muted">
          {role.job}
        </Span>
      </th>
      {SCOPES.map(renderScope)}
    </tr>
  );
};

/** Each semantic role resolved in light mode, dark mode and inside a navy band. */
const Roles = () => {
  return (
    <Section
      id="roles"
      number={3}
      title="Semantic roles"
      intro="Components use roles, never ramp stops, so one component works in every mode. Each row shows the role as it really resolves in light mode, in dark mode and inside a navy band. Text and border roles also show their contrast against the ground they sit on. Use them as utilities: bg-bg, text-fg-muted, border-border-control."
    >
      {/* focusable so keyboard users can scroll it */}
      <div
        role="region"
        aria-label="Semantic roles table"
        tabIndex={0}
        className="overflow-x-auto rounded-sm border border-border"
      >
        <table className="w-full min-w-160 border-collapse">
          <caption className="sr-only">
            Semantic colour roles in each mode
          </caption>
          <thead>
            <tr className="bg-band text-white">
              <th
                scope="col"
                className="p-3 text-left font-mono text-(length:--fs-caption) tracking-[0.08em] uppercase"
              >
                Role
              </th>
              <th
                scope="col"
                className="p-3 text-left font-mono text-(length:--fs-caption) tracking-[0.08em] uppercase"
              >
                Light
              </th>
              <th
                scope="col"
                className="p-3 text-left font-mono text-(length:--fs-caption) tracking-[0.08em] uppercase"
              >
                Dark
              </th>
              <th
                scope="col"
                className="p-3 text-left font-mono text-(length:--fs-caption) tracking-[0.08em] uppercase"
              >
                Navy band
              </th>
            </tr>
          </thead>
          <tbody>{ROLES.map(renderRole)}</tbody>
        </table>
      </div>
    </Section>
  );
};

export default Roles;
