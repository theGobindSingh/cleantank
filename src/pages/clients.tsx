import { clients as clientsData } from "@constants";
import Clients from "@modules/clients";
import { ClientsProps } from "@modules/clients/types";
import { GetStaticProps } from "next";

const ClientsPage = ({ clients }: ClientsProps) => {
  return (
    <>
      <Clients clients={clients} />
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components -- gsp
export const getStaticProps: GetStaticProps<ClientsProps> = async () => {
  const fs = (await import("fs")).default;
  const path = (await import("path")).default;

  const IMAGES_DIR = path.join(
    process.cwd(),
    "public",
    "assets",
    "images",
    "clients",
  );
  const IMAGES_URL_BASE = "/assets/images/clients";
  const IMAGE_EXTENSIONS = new Set([
    ".png",
    ".jpg",
    ".jpeg",
    ".webp",
    ".gif",
    ".svg",
  ]);

  const normalize = (name: string) => {
    return name.trim().toLowerCase();
  };

  const buildImageLookup = (category: string) => {
    const categoryDir = path.join(IMAGES_DIR, category);
    if (!fs.existsSync(categoryDir)) return new Map<string, string>();

    const files = fs.readdirSync(categoryDir).filter((f) => {
      return IMAGE_EXTENSIONS.has(path.extname(f).toLowerCase());
    });

    const lookup = new Map<string, string>();
    for (const filename of files) {
      const displayName = path.basename(filename, path.extname(filename));
      lookup.set(
        normalize(displayName),
        `${IMAGES_URL_BASE}/${category}/${filename}`,
      );
    }
    return lookup;
  };

  const clients: ClientsProps["clients"] = {};

  for (const category of Object.keys(
    clientsData,
  ) as (keyof typeof clientsData)[]) {
    const names = clientsData[category] ?? [];
    const imageLookup = buildImageLookup(category);
    clients[category] = names.map((name) => {
      const src = imageLookup.get(normalize(name));
      return src ? { name, src } : { name };
    });
  }

  return { props: { clients } };
};

export default ClientsPage;
