// The comparison's opening glide (index.tsx).
export const NARROW_START = 50;
// Unless given a peak, the intro overshoots its start by OVERSHOOT points, then settles back.
const OVERSHOOT = 15;
const OUT_MS = 900;
const BACK_MS = 500;
export const INTRO_MS = OUT_MS + BACK_MS;

export const countOneMore = (count: number) => {
  return count + 1;
};

const easeOut = (progress: number) => {
  return 1 - (1 - progress) ** 3;
};

const easeInOut = (progress: number) => {
  return progress < 0.5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2;
};

/** Divider position `elapsed` ms into the intro: 0 to `peak`, then back to `target`. */
export const introAt = (
  elapsed: number,
  target: number,
  peak = Math.min(target + OVERSHOOT, 95),
) => {
  if (elapsed < OUT_MS) return peak * easeOut(elapsed / OUT_MS);
  const back = Math.min((elapsed - OUT_MS) / BACK_MS, 1);
  return peak + (target - peak) * easeInOut(back);
};

// From lg up, the gap the settled divider keeps right of the text laid over the photos.
const CLEAR_PX = 40;

/**
 * Where the divider settles from `lg` up: CLEAR_PX right of the rendered
 * lines of the text `selector` finds in `frame`'s parent, as a percentage of
 * `frame`, never left of `min`. Measures the visible children's lines, not
 * their boxes, so the language's script width and wrapping count.
 */
export const clearOf = (
  frame: Element | null,
  selector: string | undefined,
  min: number,
) => {
  const text = selector && frame?.parentElement?.querySelector(selector);
  if (!frame || !text) return min;
  const box = frame.getBoundingClientRect();
  const range = document.createRange();
  let right = box.left;
  for (const child of text.children) {
    range.selectNodeContents(child);
    for (const rect of range.getClientRects()) {
      right = Math.max(right, rect.right);
    }
  }
  return Math.max(min, ((right + CLEAR_PX - box.left) / box.width) * 100);
};
