import { useRef, type PointerEvent, type RefObject } from "react";

// How far a touch must slide sideways before it drags the divider, so the
// start of a vertical scroll leaves it where it is.
const TOUCH_SLOP_PX = 8;

const positionAt = (element: HTMLElement, clientX: number) => {
  const rect = element.getBoundingClientRect();
  const percent = ((clientX - rect.left) / rect.width) * 100;
  return Math.min(100, Math.max(0, percent));
};

/**
 * Pointer dragging for the divider, on the slider's root. A mouse grabs it
 * anywhere and jumps it there. A touch or pen takes it once it slides
 * sideways from anywhere, jumping it under the finger, or on a tap; vertical
 * swipes still scroll the page (the root is `touch-pan-y`, and a scroll
 * cancels the pointer). Grabbing focuses `inputRef`,
 * so the arrow keys carry on from where the drag left off.
 */
export const useDrag = (
  rootRef: RefObject<HTMLElement | null>,
  inputRef: RefObject<HTMLInputElement | null>,
  onMove: (position: number) => void,
) => {
  // where the pointer went down, until the drag starts
  const pendingRef = useRef<{ x: number; y: number } | null>(null);
  const isDraggingRef = useRef(false);

  const grab = (root: HTMLElement, event: PointerEvent<HTMLElement>) => {
    root.setPointerCapture(event.pointerId);
    pendingRef.current = null;
    isDraggingRef.current = true;
    inputRef.current?.focus({ preventScroll: true });
    onMove(positionAt(root, event.clientX));
  };

  const onPointerDown = (event: PointerEvent<HTMLElement>) => {
    const root = rootRef.current;
    if (!root || event.button !== 0) return;
    if (event.pointerType !== "mouse") {
      pendingRef.current = { x: event.clientX, y: event.clientY };
      return;
    }
    // stops the browser dragging the photo or selecting text instead
    event.preventDefault();
    grab(root, event);
  };

  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    const root = rootRef.current;
    if (!root) return;
    const pending = pendingRef.current;
    if (pending) {
      const dx = Math.abs(event.clientX - pending.x);
      const dy = Math.abs(event.clientY - pending.y);
      if (dx < TOUCH_SLOP_PX || dy > dx) return;
      grab(root, event);
      return;
    }
    if (isDraggingRef.current) onMove(positionAt(root, event.clientX));
  };

  const onPointerCancel = () => {
    pendingRef.current = null;
    isDraggingRef.current = false;
  };

  // A touch that lifts before it slid or scrolled is a tap: move there.
  const onPointerUp = (event: PointerEvent<HTMLElement>) => {
    const root = rootRef.current;
    if (root && pendingRef.current) {
      inputRef.current?.focus({ preventScroll: true });
      onMove(positionAt(root, event.clientX));
    }
    onPointerCancel();
  };

  return { onPointerDown, onPointerMove, onPointerUp, onPointerCancel };
};
