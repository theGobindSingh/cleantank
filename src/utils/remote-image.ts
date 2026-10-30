// `images.remotePatterns` in next.config.js as regexes. The test holds the two in step.
const allowedImages = [
  { hostname: "images.unsplash.com", pathname: /^\/photo-[^/]+$/ },
  { hostname: "images.pexels.com", pathname: /^\/photos\/./ },
];

/** Whether next/image will take `value`; it refuses any other remote URL. */
export const isAllowedImageUrl = (value: string): boolean => {
  const url = URL.parse(value);
  if (url?.protocol !== "https:" || url.port) return false;
  const isSameHost = (image: (typeof allowedImages)[number]) => {
    return image.hostname === url.hostname;
  };
  const allowed = allowedImages.find(isSameHost);
  return allowed?.pathname.test(url.pathname) ?? false;
};
