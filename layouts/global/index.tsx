import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import Footer from "@components/footer";
import Header from "@components/header";
import { Fragment, ReactNode } from "react";

const GlobalLayout = ({ children }: { children: ReactNode }) => (
  <Fragment>
    <Header />
    <CommonFullWidthWrapper element="main">{children}</CommonFullWidthWrapper>
    <Footer />
  </Fragment>
);

export default GlobalLayout;
