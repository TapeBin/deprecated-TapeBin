import { AppProps } from "next/dist/shared/lib/router/router";
import "../styles/global.css";
import "@fontsource/roboto";
import "@fontsource/lobster";
import "@fontsource/fira-code";
import "@fontsource/source-code-pro";
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { userAtom } from "../states/user";
import { editorAtom, setItem } from "../states/editor";
import { ToastContainer } from "react-toastify";
import axios from "../utils/axios";
import { createInstance, MatomoProvider } from "@datapunt/matomo-tracker-react";

interface User {
  loginFailed: boolean;
  username: string;
  githubId: string;
  discordId: string;
  creationDate: Date;
}

export default function App({ Component, pageProps }: AppProps) {
  const [isLoaded, setLoaded] = useState(false);
  const [_, setUser] = useAtom(userAtom);
  const [__, setEditor] = useAtom(editorAtom);
  const instance = createInstance({
    urlBase: "http://localhost:8080",
    siteId: 2
  });

  useEffect(() => {

    setEditor(prevState => ({
      ...prevState,
      theme: setItem("theme", "one_dark"),
      fontSize: setItem("fontSize", "15px"),
      fontFamily: setItem("fontFamily", "Fira Code"),
      printMargin: setItem("printMargin", "false") === "true",
      tabWidth: setItem("tabWidth", "4"),
      languageId: setItem("languageId", "181"),
    }));

    axios
      .get<User>("user", {
        withCredentials: true,
      })
      .then((response) => {
        if (!response.data.loginFailed && response.data.username) {
          setUser((prevState) => ({
            ...prevState,
            isLoggedIn: true,
            username: response.data.username,
            discordId: response.data.discordId,
            githubId: response.data.githubId,
            // profileImage: `https://avatars.githubusercontent.com/u/${response.data.githubId}?v=3`,
            creationDate: new Date(response.data.creationDate),
          }));
        }

        setLoaded(true);
      });

  }, []);


  return (
    <MatomoProvider value={instance}>
      {isLoaded &&
      <Component {...pageProps} />}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
        limit={4}
      />
    </MatomoProvider>
  );
}
