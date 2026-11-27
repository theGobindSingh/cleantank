import Button from "@components/button";
import { P } from "@components/html";
import { useId } from "react";

interface PendingButtonProps {
  label: string;
  note: string | null | undefined;
}

/**
 * A button that isn't ready yet: disabled colours, does nothing, still
 * focusable (`aria-disabled`) so screen readers find it, with the note under
 * it in `fg-muted`, tied to it by `aria-describedby`.
 */
const PendingButton = ({ label, note }: PendingButtonProps) => {
  const noteId = useId();
  return (
    <div className="mt-2 flex flex-col gap-2">
      <Button
        aria-disabled="true"
        aria-describedby={note ? noteId : undefined}
        className="self-start"
      >
        {label}
      </Button>
      {note && (
        <P
          id={noteId}
          $size="small"
          $margin="0"
          className="text-pretty text-fg-muted"
        >
          {note}
        </P>
      )}
    </div>
  );
};

export default PendingButton;
