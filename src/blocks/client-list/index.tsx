import type { Client, ClientCategory, ClientListBlock } from "@/payload-types";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import { H2, H3, P } from "@components/html";
import type { Locale } from "@i18n";
import config from "@payload-config";
import { tw } from "@utils/tw";
import { getPayload } from "payload";

interface ClientListProps extends ClientListBlock {
  locale: Locale;
}

const categoryId = (client: Client) => {
  return typeof client.category === "number"
    ? client.category
    : client.category.id;
};

const renderName = (client: Client) => {
  return <li key={client.id}>{client.name}</li>;
};

/**
 * Every cleared client by name, one ruled cell per sector in the admin's
 * order: stacked on phones, two columns from `md`, three from `lg`.
 */
const ClientList = async ({
  heading,
  text,
  anchor,
  locale,
}: ClientListProps) => {
  const payload = await getPayload({ config });
  const [{ docs: categories }, { docs: clients }] = await Promise.all([
    payload.find({
      collection: "client-categories",
      sort: "_order",
      pagination: false,
      locale,
    }),
    payload.find({
      collection: "clients",
      where: { cleared: { equals: true } },
      sort: "_order",
      pagination: false,
      depth: 0,
    }),
  ]);

  const renderCategory = (category: ClientCategory) => {
    const isInCategory = (client: Client) => {
      return categoryId(client) === category.id;
    };
    const names = clients.filter(isInCategory);
    if (names.length === 0) return null;
    return (
      <li
        key={category.id}
        className="flex flex-col gap-4 bg-surface p-6 md:p-10"
      >
        <H3 $size="h4" $margin="0">
          {category.name}
        </H3>
        <ul className="flex flex-col gap-2 text-pretty">
          {names.map(renderName)}
        </ul>
      </li>
    );
  };

  return (
    <CommonFullWidthWrapper
      wrapperProps={anchor ? { id: anchor } : {}}
      className="flex flex-col gap-10 py-16 md:gap-12 md:py-20 lg:py-24"
    >
      <div className="flex flex-col gap-4">
        <H2 $margin="0">{heading}</H2>
        {text && (
          <P className="max-w-[60ch] text-pretty text-fg-muted">{text}</P>
        )}
      </div>
      <ul
        className={tw(
          // a short last row stretches its last cell, so no row ends in an empty cell
          "grid gap-px overflow-hidden rounded-xs border border-border bg-border md:grid-cols-2 lg:grid-cols-3",
          "md:max-lg:[&>li:last-child:nth-child(odd)]:col-span-2",
          "lg:[&>li:last-child:nth-child(3n+1)]:col-span-3 lg:[&>li:last-child:nth-child(3n+2)]:col-span-2",
        )}
      >
        {categories.map(renderCategory)}
      </ul>
    </CommonFullWidthWrapper>
  );
};

export default ClientList;
