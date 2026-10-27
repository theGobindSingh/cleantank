import Link from "@components/link";
import { localePath, type Locale } from "@i18n";
import { tw } from "@utils/tw";

export interface Action {
  id?: string | null;
  label: string;
  href: string;
}

interface ActionsProps {
  actions: Action[] | null | undefined;
  locale: Locale;
  className?: string;
}

/** A block's buttons: the first filled, the second outlined, full width on phones. */
const Actions = ({ actions, locale, className }: ActionsProps) => {
  if (!actions || actions.length === 0) return null;

  const renderAction = (action: Action, index: number) => {
    const href = action.href.startsWith("/")
      ? localePath(locale, action.href)
      : action.href;
    return (
      <Link
        key={action.id ?? index}
        href={href}
        variant={index === 0 ? "filled" : "outlined"}
        size="md"
        className="w-full justify-center md:w-auto"
      >
        {action.label}
      </Link>
    );
  };

  return (
    <div className={tw("flex flex-wrap gap-4", className)}>
      {actions.map(renderAction)}
    </div>
  );
};

export default Actions;
