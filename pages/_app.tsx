import '../styles/globals.css'
import {AppProps} from "next/app";
import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { theme } from '../styles/theme';
import { SideBar } from '../containers/SideBar';

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SideBar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp