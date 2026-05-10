interface ClientProp {
  name: string;
  src: string;
}

type ClientType = "industrial" | "institutional" | "healthcare" | "government";

export interface ClientsProps {
  className?: string;
  clients: {
    [index in ClientType]?: ClientProp[];
  };
}

export type ClientsCategoryData = {
  [index in ClientType]?: {
    title: string;
    description: string;
    chip: string;
  };
};
