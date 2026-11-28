import config from "@payload-config";
import { getPayload } from "payload";
import { writeFileSync } from "node:fs";
const payload = await getPayload({ config });
const out: Record<string, unknown> = {};
for (const locale of ["en", "hi", "pa"] as const) {
  const r = await payload.find({ collection: "pages", where: { slug: { equals: "franchise-guide" } }, locale, fallbackLocale: false, depth: 0, limit: 1 });
  const d = r.docs[0] as Record<string, unknown>; delete d.updatedAt; out[locale] = d;
}
writeFileSync(process.env.SNAP_OUT!, JSON.stringify(out, null, 1));
process.exit(0);
