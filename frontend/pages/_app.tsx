import { AppProps } from "next/dist/shared/lib/router/router";
import "../styles/global.css";
import "@fontsource/roboto";
import "@fontsource/lobster";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useAtom } from "jotai";
import { userAtom } from "../states/user";
import { editorAtom, setItem } from "../states/editor";

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
  useEffect(() => {
    setEditor({
      theme: setItem("theme", "one_dark"),
      fontSize: setItem("fontSize", "15px"),
      fontFamily: setItem("fontFamily", "Fira Code"),
      printMargin: setItem("printMargin", "false") === "true",
      mode: setItem("mode", "java"),
    });

    axios
      .get<User>(`${process.env.BACK_END}/user`, { withCredentials: true })
      .then((response) => {
        if (!response.data.loginFailed) {
          setUser((prevState) => ({
            ...prevState,
            isLoggedIn: true,
            username: response.data.username,
            githubId: response.data.githubId,
            profileImage: `https://avatars.githubusercontent.com/u/${response.data.githubId}?v=3`,
            creationDate: new Date(response.data.creationDate),
          }));
        }

        setLoaded(true);
      });
  }, []);

  return isLoaded && <Component {...pageProps} />;
}
