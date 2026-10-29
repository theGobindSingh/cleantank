import { iconProps } from "@components/icon";
import { tw } from "@utils/tw";
import { ChevronsLeftRightIcon } from "lucide-react";

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
          "pointer-events-none absolute left-(--split) flex size-11 -translate-x-1/2 items-center justify-center rounded-xs border-2 border-white bg-primary-900 text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white",
          handleClassName,
        )}
      >
        <ChevronsLeftRightIcon {...iconProps} className="size-5" />
      </span>
    </>
  );
};

export default Divider;
