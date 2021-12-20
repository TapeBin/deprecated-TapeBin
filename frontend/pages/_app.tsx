import { AppProps } from "next/dist/shared/lib/router/router";
import "../styles/global.css";
import "@fontsource/roboto";
import "@fontsource/lobster";
import "@fontsource/fira-code";
import "@fontsource/source-code-pro";
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect } from "react";
import { atom, useAtom } from "jotai";
import { userAtom } from "../states/user";
import { editorAtom, setItem } from "../states/editor";
import { ToastContainer } from "react-toastify";
import axios from "../utils/axios";
import { AxiosResponse } from "axios";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { createInstance, MatomoProvider } from "@datapunt/matomo-tracker-react";
import { Router } from "next/router";
import { CSSTransition, TransitionGroup } from "react-transition-group";

interface User {
    loginFailed: boolean;
    username: string;
    githubId: string;
    discordId: string;
    creationDate: Date;
    profilePicture: string;
}

export const pageAtom = atom({
    isLoaded: false,
});

export default function App({ Component, pageProps }: AppProps) {
    const [_, setPage] = useAtom(pageAtom);
    const [user, setUser] = useAtom(userAtom);
    const [__, setEditor] = useAtom(editorAtom);
    const instance = createInstance({
        urlBase: "https://statistics.tapeb.in",
        siteId: 1
    });

    useEffect(() => {

        Router.events.on("routeChangeStart", (url) => {
            setPage(prevState => ({ ...prevState, isLoaded: false }));
        });

        Router.events.on("routeChangeComplete", (url) => {
            setPage(prevState => ({ ...prevState, isLoaded: true }));
        });

        //@ts-ignore
        setEditor(prevState => ({
            ...prevState,
            theme: setItem("theme", "one_dark"),
            fontSize: setItem("fontSize", "15px"),
            fontFamily: setItem("fontFamily", "Fira Code"),
            printMargin: setItem("printMargin", "false") === "true",
            tabWidth: setItem("tabWidth", "4"),
            languageId: parseInt(setItem("languageId", "-1")),
        }));


        if (!user.isLoggedIn) {
            axios.get<User>("user", { withCredentials: true })
                .then((response: any) => {
                    console.log(response.data);
                    if (response.status !== 500 && response.data.user) {
                        const user = response.data.user;
                        setUser((prevState) => ({
                            ...prevState,
                            isLoggedIn: true,
                            username: user.username,
                            discordId: user.discordId,
                            githubId: user.githubId,
                            profileImage: user.githubId
                                ? `https://avatars.githubusercontent.com/u/${user.githubId}?v=3`
                                : "",
                            creationDate: new Date(user.creationDate),
                        }));

                        if (user.discordId)
                            axios.get("discordImage").then((res: AxiosResponse<any>) => {
                                setUser(prevState => ({
                                    ...prevState,
                                    profileImage: res.data.toString()
                                }));
                            });

                    }
                    setPage(prevState => ({ ...prevState, isLoaded: true }));
                });
        }


    }, []);


    return (
        <MatomoProvider value={instance}>
            <DefaultSeo {...SEO} />
            {/*<TransitionGroup in={page.isLoaded} timeout={150} classNames="fade">*/}
            <Component {...pageProps} />
            {/*</TransitionGroup>*/}
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
