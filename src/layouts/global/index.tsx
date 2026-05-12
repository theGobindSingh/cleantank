import Footer from "@components/footer";
import HeadMeta from "@components/head-meta";
import Header from "@components/header";
import { Fragment, ReactNode } from "react";

const GlobalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <Header />
      <HeadMeta />
      <main
        css={{
          width: "100%",
        }}
      >
        {children}
      </main>
      <Footer />
    </Fragment>
  );
};

export default GlobalLayout;
