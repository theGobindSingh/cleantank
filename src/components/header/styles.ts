/** Type for the header's top-level items: links, the Solutions button and its sidenav label. */
export const ITEM_TYPE =
  "flex min-h-12 items-center justify-start text-[0.875rem] font-bold tracking-[0.06em] uppercase underline-offset-8";

/** The 3 px accent underline on the current page's item. */
export const MARKED =
  "underline decoration-marker decoration-[3px] hover:decoration-[3px]";

/** Whether `path` is the page at `/${page}` or below it. */
export const isOnPage = (path: string, page: string) => {
  return path === `/${page}` || path.startsWith(`/${page}/`);
};
