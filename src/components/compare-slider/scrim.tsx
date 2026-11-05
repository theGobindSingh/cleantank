/**
 * The scrim over the photos, in the colour the slider sets as `--scrim`.
 * Rendered before the divider and handle, so they stay on top of it.
 */
const Scrim = () => {
  // from lg only: solid on the left to the page container's seventh column
  // (90%, at most 1800 px), faded out by the ninth; below lg no text sits on the photos
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-0 hidden w-[calc((100%-min(90%,1800px))/2+min(90%,1800px)*9/12)] bg-linear-to-r from-(--scrim)/50 from-50% to-transparent lg:block"
    />
  );
};

export default Scrim;
