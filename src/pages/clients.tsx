import Clients from "@modules/clients";
import { ClientsProps } from "@modules/clients/types";
import axios from "axios";
import { GetStaticProps } from "next";

interface ClientsPageProps {
  clients: ClientsProps["clients"];
  message: string;
}

const ClientsPage = ({ clients }: ClientsPageProps) => {
  return <Clients clients={clients} />;
};

// eslint-disable-next-line react-refresh/only-export-components -- gsp
export const getStaticProps: GetStaticProps<ClientsPageProps> = async () => {
  const { data } = await axios.get<ClientsPageProps>(
    process.env.BASE_URL + "/api/clients",
  );
  return {
    props: data,
  };
};

export default ClientsPage;
