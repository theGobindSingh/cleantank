import Actions from "@/blocks/actions";
import type { FranchiseModelsBlock } from "@/payload-types";
import { H3 } from "@components/html";
import type { Locale } from "@i18n";

interface ApplyProps {
  apply: FranchiseModelsBlock["apply"];
  locale: Locale;
}

/** The copy column's closing subheading and accent button; nothing until heading, label and link are all set. */
const Apply = ({ apply, locale }: ApplyProps) => {
  if (!apply?.heading || !apply.label || !apply.href) return null;
  return (
    <div className="mt-4 flex flex-col gap-4 2xl:contain-inline-size">
      <H3 $size="h3" $margin="0">
        {apply.heading}
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
