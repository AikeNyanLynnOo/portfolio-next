import * as React from "react";

// Redux
import { Provider, useSelector } from "react-redux";
import { wrapper } from "@/src/store/store";
import PropTypes from "prop-types";
import Head from "next/head";

import "../public/css/globalStyles.css";
import { useRouter } from "next/router";

function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  const router = useRouter();

  
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
      <Component {...pageProps} />
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
