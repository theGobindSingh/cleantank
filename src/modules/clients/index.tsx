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
import { Fragment, useCallback, useEffect, useRef, useState } from "react";

// Module-level Set to persist revealed client names for the session
const revealedClients = new Set<string>();

const ClientCardComponent = ({
  client,
}: {
  client: NonNullable<
    ClientsProps["clients"][keyof ClientsProps["clients"]]
  >[number];
}) => {
  const [visible, setVisible] = useState(() => {
    return revealedClients.has(client.name);
  });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible) return; // Already revealed, skip observer
    const callback: IntersectionObserverCallback = (entries, observer) => {
      const { isIntersecting = false } = entries?.[0] ?? ({} as never);
      if (isIntersecting) {
        setVisible(true);
        revealedClients.add(client.name);
        observer.disconnect();
      }
    };
    const observer = new IntersectionObserver(callback, { threshold: 0.1 });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [visible, client.name]);

  return (
    <ClientCard key={client.name}>
      <div className="img-wrapper" ref={ref}>
        {visible && (
          <Image src={client.src} alt={client.name} width={150} height={150} />
        )}
      </div>
      <ClientCardTitle className="title">{client.name}</ClientCardTitle>
    </ClientCard>
  );
};

const clientsMapper = (
  client: NonNullable<
    ClientsProps["clients"][keyof ClientsProps["clients"]]
  >[number],
) => {
  return <ClientCardComponent key={client.name} client={client} />;
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
