type Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

interface UnsplashOptions {
  quality?: Enumerate<101>;
}

/** The image at `images.unsplash.com/photo-<photoId>`, in the browser's best format. */
export const unsplash = (
  photoId: string,
  { quality = 80 }: UnsplashOptions = {},
): string => {
  return `https://images.unsplash.com/photo-${photoId}?auto=format&q=${quality}`;
};

/**
 * The image of the Pexels photo numbered `photoId`. Pexels ignores `q`, so
 * there is no quality option.
 *
 * shortcut: some old photos have other file names and 404 here (34950 is
 * `pexels-photo.jpg`), use their image address directly if one is needed.
 */
export const pexels = (photoId: string): string => {
  return `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg`;
};
