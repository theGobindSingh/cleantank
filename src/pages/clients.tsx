import Clients from "@modules/clients";
import { ClientsProps } from "@modules/clients/types";
import { GetStaticProps } from "next";

const ClientsPage = ({ clients }: ClientsProps) => {
  return <Clients clients={clients} />;
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

  const toDisplayName = (filename: string) => {
    return path.basename(filename, path.extname(filename));
  };

  const categories = fs
    .readdirSync(IMAGES_DIR, { withFileTypes: true })
    .filter((entry) => {
      return entry.isDirectory();
    })
    .map((entry) => {
      return entry.name;
    });

  const clients: ClientsProps["clients"] = {};

  for (const category of categories) {
    const categoryDir = path.join(IMAGES_DIR, category);
    const files = fs.readdirSync(categoryDir).filter((f) => {
      return IMAGE_EXTENSIONS.has(path.extname(f).toLowerCase());
    });
    const key = category as keyof ClientsProps["clients"];
    clients[key] = files.map((filename) => {
      return {
        name: toDisplayName(filename),
        src: `${IMAGES_URL_BASE}/${category}/${filename}`,
      };
    });
  }

  return { props: { clients } };
};

export default ClientsPage;
