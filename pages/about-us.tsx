import AboutModule from "@modules/about";
import Head from "next/head";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>
          About Us | Clean Tank Services — India's Premier Tank Cleaning Company
        </title>
        <meta
          name="description"
          content="Learn how Clean Tank Services became India's most trusted water tank cleaning company — ISO 9001:2015 certified, government-empanelled, operating across 8 states with 5000+ completed projects."
        />
        <meta property="og:title" content="About Us | Clean Tank Services" />
        <meta
          property="og:description"
          content="A decade of precision engineering and government-grade compliance. Clean Tank Services — defining the standard of tank purity across India."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://cleantankservices.in/about-us"
        />
      </Head>
      <AboutModule />
    </>
  );
};

export default AboutPage;
