import { AppProps } from "next/dist/shared/lib/router/router";
import "../styles/global.css";
import "@fontsource/roboto";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
