import config from "@payload-config";
import { getPayload } from "payload";

const payload = await getPayload({ config });
const write = process.env.CT_WRITE === "1";
const next = {
  en: { heading: "Make Work Your Way.", highlight: "Your" },
  hi: { heading: "काम को अपने तरीक़े से ढालें।", highlight: "अपने" },
  pa: { heading: "ਕੰਮ ਨੂੰ ਆਪਣੇ ਢੰਗ ਨਾਲ ਢਾਲੋ।", highlight: "ਆਪਣੇ" },
} as const;

const found = await payload.find({ collection: "pages", where: { slug: { equals: "franchise-guide" } }, depth: 0, limit: 2, locale: "en", fallbackLocale: false });
if (found.docs.length !== 1) throw new Error(`pages found: ${found.docs.length}`);
const id = found.docs[0].id;

for (const locale of ["en", "hi", "pa"] as const) {
  const doc = await payload.findByID({ collection: "pages", id, locale, fallbackLocale: false, depth: 0 });
  const layout = (doc.layout ?? []) as Array<Record<string, unknown>>;
  const idx = layout.findIndex((b) => b.blockType === "hero");
  console.log(locale, "block", idx, JSON.stringify(layout.map((b) => [b.blockType, b.id])));
  console.log(locale, "BEFORE", JSON.stringify({ heading: layout[idx].heading, highlight: layout[idx].highlight }));
  if (!write) continue;
  const { heading, highlight } = next[locale];
  if (!heading.includes(highlight)) throw new Error(`highlight not in heading: ${locale}`);
  const updated = layout.map((b, i) => (i === idx ? { ...b, heading, highlight } : b));
  await payload.update({ collection: "pages", id, locale, data: { layout: updated }, context: { disableRevalidate: true } });
  console.log(locale, "SAVED");
}
process.exit(0);
