import Button from "@components/button";
import type { Dictionary } from "@i18n";
import { useId, type ChangeEvent } from "react";
import { formatRupees } from "./price";

export interface Tank {
  key: number;
  value: string;
}

// Up to 99,99,999 L: past any real tank, and every amount still fits its row.
const MAX_DIGITS = 7;

interface TankRowProps {
  tank: Tank;
  index: number;
  price: number | undefined;
  /** Shown under the field when the tank's band has no set discount. */
  note: string | undefined;
  canRemove: boolean;
  labels: Dictionary["prices"];
  onChange: (key: number, value: string) => void;
  onRemove: (key: number) => void;
}

/**
 * One tank's size field, its price on the label line, an optional note under
 * it, and a remove button when there are others.
 */
const TankRow = ({
  tank,
  index,
  price,
  note,
  canRemove,
  labels,
  onChange,
  onRemove,
}: TankRowProps) => {
  const id = useId();
  const n = String(index + 1);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(
      tank.key,
      event.target.value.replace(/\D/g, "").slice(0, MAX_DIGITS),
    );
  };
  const handleRemove = () => {
    onRemove(tank.key);
  };
  return (
    <li className="flex flex-col gap-1.5">
      <div className="flex items-baseline justify-between gap-3">
        <label
          htmlFor={id}
          className="font-mono text-(length:--fs-caption) font-medium tracking-[0.08em] uppercase"
        >
          {labels.tank.replace("{n}", n)}
        </label>
        <span className="shrink-0 font-mono whitespace-nowrap tabular-nums">
          {price === undefined ? "" : formatRupees(Math.round(price))}
        </span>
      </div>
      <input
        id={id}
        value={tank.value}
        onChange={handleChange}
        inputMode="numeric"
        autoComplete="off"
        aria-describedby={note ? `${id}-note` : undefined}
        className="h-12 w-full min-w-0 rounded-sm border border-border-control bg-surface px-3 text-(length:--fs-body) text-fg"
      />
      {note && (
        <p
          id={`${id}-note`}
          className="text-(length:--fs-small) text-caution-800 dark:text-caution-200"
        >
          {note}
        </p>
      )}
      {canRemove && (
        <Button variant="text" onClick={handleRemove} className="self-start">
          {labels.remove.replace("{n}", n)}
        </Button>
      )}
    </li>
  );
};

export default TankRow;
