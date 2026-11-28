import Actions from "@/blocks/actions";
import type { FranchiseModelsBlock } from "@/payload-types";
import Highlight from "@components/highlight";
import { H3 } from "@components/html";
import type { Locale } from "@i18n";

interface ApplyProps {
  apply: FranchiseModelsBlock["apply"];
  locale: Locale;
}

/**
 * The copy column's closing subheading and accent button; nothing until
 * heading, label and link are all set. `grow` and `justify-end` push it to
 * the column's foot, so from `2xl` the button's bottom meets the cards' bottom;
 * `pt-4` keeps the minimum gap under the copy when the column is not taller.
 */
const Apply = ({ apply, locale }: ApplyProps) => {
  if (!apply?.heading || !apply.label || !apply.href) return null;
  return (
    <div className="flex grow flex-col justify-end gap-4 pt-4 2xl:contain-inline-size">
      <H3 $size="h3" $margin="0">
        <Highlight
          text={apply.heading}
          highlight={apply.highlight}
          className="text-accent-600"
        />
      </H3>
      <Actions
        actions={[{ label: apply.label, href: apply.href }]}
        locale={locale}
        isAccent
        isDarkHover
      />
    </div>
  );
};

export default Apply;
