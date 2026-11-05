import config from "@payload-config";
import { getPayload } from "payload";
const payload = await getPayload({ config });
for (const locale of ["en", "hi", "pa"] as const) {
  const all = JSON.stringify(await payload.find({ collection: "pages", locale, fallbackLocale: false, depth: 0, limit: 100 }));
  const re = /[^"]{0,200}(Certificate|प्रमाण|ਸਰਟੀਫ਼ਿਕੇਟ|सर्टिफ़िकेट|ਸਰਟੀਫਿਕੇਟ|ISO|स्टिकर|ਸਟਿੱਕਰ|sticker|vacuum|वैक्यूम|ਵੈਕਿਊਮ|2008)[^"]{0,200}/g;
  console.log("=====", locale);
  for (const m of new Set(all.match(re) ?? [])) console.log(" ", m);
}
process.exit(0);
