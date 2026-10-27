import { revalidatePath } from "next/cache";
import type { RequestContext } from "payload";

// For content that shows on several pages: a save rebuilds every page in every language.
// Scripts outside Next (seeding) pass `context: { disableRevalidate: true }`.
export const revalidateSite = <T>({
  doc,
  context,
}: {
  doc: T;
  context: RequestContext;
}) => {
  if (!context.disableRevalidate) revalidatePath("/[lang]", "layout");
  return doc;
};
