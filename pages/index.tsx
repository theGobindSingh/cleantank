import HomeModule from "@modules/home";
import Head from "next/head";

const HomePage = () => (
  <>
    <Head>
      <title>Clean Tank Services | Home</title>
      <meta
        name="description"
        content="Clean Tank Services provides top-notch cleaning solutions for residential and commercial spaces."
      />
    </Head>
    <HomeModule />
  </>
);

export default HomePage;
