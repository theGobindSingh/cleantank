// Run by `pnpm vercel-build` between the migration and the build: refetches
// every client's logo link, so a logo changed at the source reaches the site.
// The clients' save hook does the work and keeps the copy when the bytes match.
// A failure only logs a warning; it never fails the deploy.
import config from "@payload-config";
import { getPayload } from "payload";

const refresh = async () => {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "clients",
    where: { logoUrl: { exists: true } },
    pagination: false,
    depth: 0,
  });
  for (const client of docs) {
    const updated = await payload.update({
      collection: "clients",
      id: client.id,
      data: {},
      context: { disableRevalidate: true, refetchLogo: true },
    });
    if (updated.logoFetchError) {
      payload.logger.warn(`Logo for ${client.name}: ${updated.logoFetchError}`);
    }
  }
  payload.logger.info(`Refreshed ${docs.length} client logo links`);
};

try {
  await refresh();
} catch (error) {
  console.warn("Could not refresh client logos:", error);
}
process.exit(0);
