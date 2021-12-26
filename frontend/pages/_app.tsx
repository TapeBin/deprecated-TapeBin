import { AppProps } from "next/dist/shared/lib/router/router";
import "../styles/global.css";
import "../styles/cookieButton.css";
import "@fontsource/roboto";
import "@fontsource/lobster";
import "@fontsource/fira-code";
import "@fontsource/source-code-pro";
import 'react-toastify/dist/ReactToastify.css';
import "../styles/notification.css";
import React, { useEffect, useRef } from "react";
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
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";
import CookieConsent  from "react-cookie-consent";

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
    maintenance: false,
    maintenanceNotification: "",
    notify: false,
    notification: "",
    url: ""
});

export default function App({ Component, pageProps }: AppProps) {
    const [_, setPage] = useAtom(pageAtom);
    const [user, setUser] = useAtom(userAtom);
    const [__, setEditor] = useAtom(editorAtom);
    const ref = useRef<LoadingBarRef>(null)
    let instance = createInstance({
        urlBase: "https://statistics.tapeb.in",
        siteId: 1
    });

    useEffect(() => {

        Router.events.on("routeChangeStart", (url) => {
            setPage(prevState => ({ ...prevState, isLoaded: false }));
            if (ref && ref.current)
                ref.current.staticStart(0);

        });

        Router.events.on("routeChangeComplete", (url) => {
            setPage(prevState => ({ ...prevState, isLoaded: true }));
            if (ref && ref.current)
                ref.current.complete();
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

        axios.get("configuration")
            .then((response: any) => {
                setPage(prevState => ({
                    ...prevState,
                    maintenance: response.data.maintenance,
                    maintenanceNotification: response.data.maintenanceNotification,
                    notify: response.data.notify,
                    notification: response.data.notification,
                    url: response.data.url
                }));
            });


        if (!user.isLoggedIn) {
            axios.get<User>("user", { withCredentials: true })
                .then((response) => {
                    if (response.status !== 500 && response.data.username) {
                        setUser((prevState) => ({
                            ...prevState,
                            isLoggedIn: true,
                            username: response.data.username,
                            discordId: response.data.discordId,
                            githubId: response.data.githubId,
                            profileImage: response.data.githubId
                                ? `https://avatars.githubusercontent.com/u/${response.data.githubId}?v=3`
                                : "",
                            creationDate: new Date(response.data.creationDate),
                        }));

                        if (response.data.discordId)
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
            <CookieConsent
                enableDeclineButton
                buttonClasses="cookie-button"
                declineButtonClasses="cookie-button"
                disableButtonStyles={true}
                expires={120}
            >
                This website uses cookies to enhance the user experience. To learn more, go to the <a href="privacy#cookies" className="text-proColor">Cookies
                Policy</a>.
            </CookieConsent>
            <DefaultSeo {...SEO} />
            <LoadingBar color="#00C2FF" ref={ref}/>
            <Component {...pageProps} />
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
