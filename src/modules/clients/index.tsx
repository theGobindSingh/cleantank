import HeroSection from "@/src/layouts/hero-section";
import StandardSectionLayout from "@/src/layouts/standard-section";
import { clientsHeroProps } from "@/src/modules/clients/constants";
import {
  ClientCard,
  ClientCardsWrapper,
  ClientCardTitle,
} from "@/src/modules/clients/styles";
import { ClientsProps } from "@/src/modules/clients/types";
import Image from "next/image";
import { Fragment } from "react";

const Clients = (_: ClientsProps) => {
  return (
    <Fragment>
      <HeroSection {...clientsHeroProps} />
      <StandardSectionLayout
        title="Institutional Partnerships"
        description="Empowering academic and research hubs with sterile water systems."
        chip="Academic Leaders"
      >
        <ClientCardsWrapper>
          <ClientCard>
            <div className="img-wrapper">
              <Image src="" alt="" width={200} height={200} />
            </div>
            <ClientCardTitle className="title">IIT Bombay</ClientCardTitle>
          </ClientCard>
          <ClientCard>
            <div className="img-wrapper">
              <Image src="" alt="" width={200} height={200} />
            </div>
            <ClientCardTitle className="title">IIT Delhi</ClientCardTitle>
          </ClientCard>
        </ClientCardsWrapper>
      </StandardSectionLayout>
    </Fragment>
  );
};

export default Clients;
