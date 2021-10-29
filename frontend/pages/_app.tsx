import { AppProps } from "next/dist/shared/lib/router/router";
import "../styles/global.css";
import "@fontsource/roboto";
import "@fontsource/lobster";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    axios({
      method: "GET",
      withCredentials: true,
      url: `${process.env.BACK_END}/user`,
    }).then((response: AxiosResponse) => {
      setLoaded(true);
    });
  }, []);

  return isLoaded && <Component {...pageProps} />;
}
