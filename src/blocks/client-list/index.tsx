import type {
  Client,
  ClientCategory,
  ClientListBlock,
  Media,
} from "@/payload-types";
import { site } from "@/site";
import DocumentDialog from "@components/document-dialog";
import { H3 } from "@components/html";
import Section from "@components/section";
import { getDictionary, type Locale } from "@i18n";
import config from "@payload-config";
import { tw } from "@utils/tw";
import { getPayload } from "payload";

interface ClientListProps extends ClientListBlock {
  locale: Locale;
}

type Certificate = NonNullable<Client["certificates"]>[number];

const categoryId = (client: Client) => {
  return typeof client.category === "number"
    ? client.category
    : client.category.id;
};

/**
 * Every cleared client by name, one ruled cell per sector in the admin's
 * order: stacked on phones, two columns from `md`, three from `lg`. A client
 * with work completion certificates gets a text button per certificate,
 * while `site.showClientCertificates` is on.
 */
const ClientList = async ({
  heading,
  text,
  anchor,
  locale,
}: ClientListProps) => {
  const { clients: labels, credentials } = getDictionary(locale);

  const renderCertificate = (certificate: Certificate) => {
    // depth 1 populates the upload
    const file = certificate.file as Media;
    const year = String(new Date(certificate.date).getUTCFullYear());
    return (
      <DocumentDialog
        key={certificate.id}
        src={file.url ?? ""}
        alt={file.alt}
        width={file.width ?? 1600}
        height={file.height ?? 2263}
        caption={certificate.work}
        variant="text"
        openLabel={labels.certificate.replace("{year}", year)}
        closeLabel={credentials.close}
      />
    );
  };

  const renderName = (client: Client) => {
    const certificates = site.showClientCertificates
      ? (client.certificates ?? [])
      : [];
    return (
      <li key={client.id} className="flex flex-col gap-1">
        {client.name}
        {certificates.length > 0 && (
          <div className="flex flex-wrap gap-x-4 text-(length:--fs-small) [&>button]:min-h-6">
            {certificates.map(renderCertificate)}
          </div>
        )}
      </li>
    );
  };

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
      depth: 1,
      locale,
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
    <Section heading={heading} text={text} anchor={anchor}>
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
    </Section>
  );
};

export default ClientList;
