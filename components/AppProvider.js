import { ThemeProvider } from "styled-components";
import GlobalStyle from "./_base/GlobalStyle";
import Head from "next/head";
import PropTypes from "prop-types";

function AppProvider({ children, theme }) {
  // Header data
  function Meta() {
    return (
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Font - Spartan Import */}
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap"
          rel="stylesheet"
        />
        {/* Favicon Import */}
        <link rel="shortcut icon" type="image/png" href="/favicon-32x32.png" />

        <title>Job Listings</title>
      </Head>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <Meta />
        {children}
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object.isRequired,
};

export default AppProvider;
