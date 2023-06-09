import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

//MUi Themes
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../themes/index";

//
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";

//Cache provide MUI
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import createEmotionCache from "../src/createEmotionCache";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

//Global css
import "../styles/globals.css";

//style data grid table
import 'react-data-grid/lib/styles.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // Create rtl cache
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
