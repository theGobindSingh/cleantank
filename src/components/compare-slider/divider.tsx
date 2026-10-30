import { iconProps } from "@components/icon";
import { tw } from "@utils/tw";
import { EqualIcon } from "lucide-react";

/**
 * The visible line and drag handle at `--split`. Rendered right after the
 * range input, so the handle shows its focus ring through `peer`.
 */
const Divider = ({ handleClassName }: { handleClassName: string }) => {
  return (
    <>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-(--split) w-0.5 -translate-x-1/2 bg-white"
      />
      <span
        aria-hidden="true"
        className={tw(
          "pointer-events-none absolute left-(--split) flex h-11 w-4 -translate-x-1/2 items-center justify-center rounded-sm bg-white text-primary-900 group-active:text-primary-600 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white",
          handleClassName,
        )}
      >
        {/* Lucide has no plain two-bar icon; a turned equals sign draws one */}
        <EqualIcon
          {...iconProps}
          strokeWidth={2}
          className="size-3.5 rotate-90"
        />
      </span>
    </>
  );
};

export default Divider;
