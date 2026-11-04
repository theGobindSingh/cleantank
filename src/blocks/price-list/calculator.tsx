"use client";

import type { PriceListBlock } from "@/payload-types";
import Button from "@components/button";
import { H3 } from "@components/html";
import type { Dictionary } from "@i18n";
import { useState } from "react";
import { discountSteps } from "./labels";
import {
  formatNumber,
  formatRupees,
  quote,
  reachedStep,
  sortTiers,
  tankPrice,
  tierFor,
} from "./price";
import Steps from "./steps";
import TankRow, { type Tank } from "./tank-row";

interface CalculatorProps {
  tiers: PriceListBlock["tiers"];
  /** Sorted by tanks. */
  discounts: NonNullable<PriceListBlock["discounts"]>;
  gstPercent: number;
  labels: Dictionary["prices"];
}

const toLitres = (value: string) => {
  return Number(value.replace(/\D/g, ""));
};

const toTankLitres = (tank: Tank) => {
  return toLitres(tank.value);
};

/**
 * The discount steps, then tank sizes in and the bill out: each tank's price,
 * the multi-tank discount, GST and the total, updated as the visitor types.
 */
const Calculator = ({
  tiers,
  discounts,
  gstPercent,
  labels,
}: CalculatorProps) => {
  const [tanks, setTanks] = useState<Tank[]>([{ key: 0, value: "" }]);
  const sorted = sortTiers(tiers);
  const litres = tanks.map(toTankLitres);
  const bill = quote(litres, tiers, discounts, gstPercent);

  const handleChange = (key: number, value: string) => {
    const update = (tank: Tank) => {
      return tank.key === key ? { key, value } : tank;
    };
    setTanks(tanks.map(update));
  };
  const handleRemove = (key: number) => {
    const keep = (tank: Tank) => {
      return tank.key !== key;
    };
    setTanks(tanks.filter(keep));
  };
  const handleAdd = () => {
    const last = tanks.at(-1)?.key ?? 0;
    setTanks([...tanks, { key: last + 1, value: "" }]);
  };

  const renderTank = (tank: Tank, index: number) => {
    const size = litres[index] ?? 0;
    const tier = size > 0 ? tierFor(size, sorted) : undefined;
    // the band starts above the one before it, as in the table's size labels
    const min = tier && sorted[sorted.indexOf(tier) - 1]?.upTo;
    return (
      <TankRow
        key={tank.key}
        tank={tank}
        index={index}
        price={tier ? tankPrice(size, tier) : undefined}
        note={
          tier && !tier.discount
            ? labels.discuss.replace("{min}", formatNumber(min ?? 0))
            : undefined
        }
        canRemove={tanks.length > 1}
        labels={labels}
        onChange={handleChange}
        onRemove={handleRemove}
      />
    );
  };

  return (
    <div className="flex flex-col gap-6 rounded-sm bg-surface p-4 outline-1 -outline-offset-1 outline-grey-200 md:p-6">
      <H3 $size="h4" $margin="0">
        {labels.calculator}
      </H3>
      {discounts.length > 0 && (
        <Steps
          steps={discountSteps(discounts, labels)}
          reached={reachedStep(bill, discounts)}
          labels={labels}
        />
      )}
      <ul className="flex flex-col gap-5">{tanks.map(renderTank)}</ul>
      <Button variant="outlined" onClick={handleAdd} className="self-start">
        {labels.add}
      </Button>
      <dl
        aria-live="polite"
        className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-2 border-t border-border pt-4 tabular-nums"
      >
        <dt>{labels.subtotal}</dt>
        <dd className="text-right font-mono whitespace-nowrap">
          {formatRupees(bill.subtotal)}
        </dd>
        {bill.discount > 0 && (
          <>
            <dt>
              {labels.discount.replace("{percent}", String(bill.percent))}
            </dt>
            <dd className="text-right font-mono whitespace-nowrap">
              −{formatRupees(bill.discount)}
            </dd>
          </>
        )}
        <dt>{labels.gst.replace("{percent}", String(gstPercent))}</dt>
        <dd className="text-right font-mono whitespace-nowrap">
          {formatRupees(bill.gst)}
        </dd>
        <dt className="font-semibold text-heading">{labels.total}</dt>
        <dd className="text-right font-mono font-semibold whitespace-nowrap text-heading">
          {formatRupees(bill.total)}
        </dd>
      </dl>
    </div>
  );
};

export default Calculator;
