import HeroSection from "@layouts/hero-section";
import StandardSectionLayout from "@layouts/standard-section";
import {
  clientsCategoryData,
  clientsHeroProps,
} from "@modules/clients/constants";
import {
  ClientCard,
  ClientCardsWrapper,
  ClientCardTitle,
} from "@modules/clients/styles";
import { ClientsProps } from "@modules/clients/types";
import Image from "next/image";
import { Fragment, useCallback } from "react";

const clientsMapper = (
  client: NonNullable<
    ClientsProps["clients"][keyof ClientsProps["clients"]]
  >[number],
) => {
  return (
    <ClientCard key={client.name}>
      <div className="img-wrapper">
        <Image src={client.src} alt={client.name} width={150} height={150} />
      </div>
      <ClientCardTitle className="title">{client.name}</ClientCardTitle>
    </ClientCard>
  );
};

const Clients = ({ clients = {} }: ClientsProps) => {
  const clientsCategoryMapper = useCallback(
    (category: string) => {
      const clientCategoryData =
        clientsCategoryData[category as keyof typeof clientsCategoryData];
      if (!clientCategoryData) return null;

      const client = clients[category as keyof typeof clients];
      if (!client || client?.length === 0) return null;

      const { title, description, chip } = clientCategoryData;

      return (
        <StandardSectionLayout
          key={category}
          title={title}
          description={description}
          chip={chip}
        >
          <ClientCardsWrapper>{client.map(clientsMapper)}</ClientCardsWrapper>
        </StandardSectionLayout>
      );
    },
    [clients],
  );
  return (
    <Fragment>
      <HeroSection {...clientsHeroProps} />
      {Object.keys(clients).map(clientsCategoryMapper)}
    </Fragment>
  );
};

export default Clients;
