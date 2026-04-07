import { Global } from "@emotion/react";
import { ThemeProvider } from "@kami-ui/next-theme";
import { globalStyles } from "@styles/global";
import theme from "@styles/theme";
import type { AppProps } from "next/app";
import { Bounce, ToastContainer } from "react-toastify";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
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
    </ThemeProvider>
  );
};

export default App;
