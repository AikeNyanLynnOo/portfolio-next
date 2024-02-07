import * as React from "react";

// Redux
import { Provider, useSelector } from "react-redux";
import { wrapper } from "@/src/store/store";
import PropTypes from "prop-types";
import Head from "next/head";

import "../public/css/globalStyles.css";
import { useRouter } from "next/router";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  const router = useRouter();

  const theme = React.useMemo(
    () =>
      createTheme({
        breakpoints: {
          values: {
            // xs: 0,
            // sm: 600,
            // md: 900,
            // mlg: 1200,
            // lg: 1390,
            // xl: 1536,
            // xxl: 1780,
            xs: 0,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
          },
        },
      }),
    [],
  );

  return (
    <Provider store={store}>
      {/* <CacheProvider value={emotionCache}> */}
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>
          {router.pathname
            .substring(1)
            .replace(/\b\w/g, (match) => match.toUpperCase())}
        </title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      {/* </CacheProvider> */}
    </Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp; // need to check is there required to wrap with redux
