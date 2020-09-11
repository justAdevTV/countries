import { AppProvider } from "../components";
import theme from "../components/_base/theme";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider theme={theme}>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
