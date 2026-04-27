import { Global } from "@emotion/react";
import { ThemeProvider } from "@kami-ui/next-theme";
import GlobalLayout from "@layouts/global";
import { globalStyles } from "@styles/global";
import theme from "@styles/theme";
import "lenis/dist/lenis.css";
import ReactLenis, { LenisRef } from "lenis/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { Bounce, ToastContainer } from "react-toastify";

const App = ({ Component, pageProps }: AppProps) => {
  const lenisRef = useRef<LenisRef>(null);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      // smooth scroll to top
      lenisRef.current?.lenis?.scrollTo(0, {
        duration: 0.6,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Bounce}
        theme="dark"
      />
      <ReactLenis root ref={lenisRef} />
    </ThemeProvider>
  );
};

export default App;
