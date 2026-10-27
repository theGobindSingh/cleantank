import type { Client, ClientsBandBlock, Media } from "@/payload-types";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import { H2 } from "@components/html";
import { getDictionary, type Locale } from "@i18n";
import config from "@payload-config";
import Image from "next/image";
import { getPayload } from "payload";
import type { CSSProperties } from "react";
import Marquee from "./marquee";

interface ClientsBandProps extends ClientsBandBlock {
  locale: Locale;
}

// Seconds per client, so a longer list scrolls at the same speed.
const SECONDS_PER_CLIENT = 3;

// The query only returns clients with a logo, so `logo` is populated here.
const renderClient = (client: Client) => {
  const logo = client.logo as Media;
  return (
    <li key={client.id} className="flex h-10 shrink-0 items-center md:h-14">
      <Image
        src={logo.url ?? ""}
        alt={client.name}
        width={logo.width ?? 160}
        height={logo.height ?? 56}
        unoptimized
        loading="eager"
        className="h-10 w-auto max-w-36 object-contain md:h-14 md:max-w-48"
      />
    </li>
  );
};

/**
 * A grey band with a short label and the logos of cleared clients scrolling
 * past (owner's call). Logos are SVG, served as uploaded. Clients without a
 * logo stay out; with none, the band is not rendered.
 */
const ClientsBand = async ({ heading, locale }: ClientsBandProps) => {
  const { clients: labels } = getDictionary(locale);
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "clients",
    where: { cleared: { equals: true }, logo: { exists: true } },
    sort: "_order",
    pagination: false,
  });
  if (docs.length === 0) return null;

  const list = docs.map(renderClient);

  return (
    <CommonFullWidthWrapper
      wrapperClassName="border-y border-border bg-bg-subtle"
      className="flex flex-col gap-4 py-8 lg:flex-row lg:items-center lg:gap-10"
    >
      <H2
        $size="ref"
        $margin="0"
        className="shrink-0 font-mono tracking-widest text-fg-muted uppercase"
      >
        {heading}
      </H2>
      <Marquee pauseLabel={labels.pause} playLabel={labels.play}>
        <div className="min-w-0 grow overflow-hidden mask-x-from-90% mask-x-to-100% motion-reduce:overflow-x-auto">
          <div
            style={
              {
                "--marquee-duration": `${docs.length * SECONDS_PER_CLIENT}s`,
              } as CSSProperties
            }
            className="flex w-max marquee-track"
          >
            <ul className="flex gap-8 pr-8 md:gap-12 md:pr-12">{list}</ul>
            <ul
              aria-hidden="true"
              className="flex gap-8 pr-8 motion-reduce:hidden md:gap-12 md:pr-12"
            >
              {list}
            </ul>
          </div>
        </div>
      </Marquee>
    </CommonFullWidthWrapper>
  );
};

export default ClientsBand;
