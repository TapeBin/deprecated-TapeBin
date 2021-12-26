import React, { useEffect, useState } from "react";
import Navbar from "../../components/bar/Navbar";
import Login from "../../components/login/Login";
import Footer from "../../components/footer/Footer";
import Meta from "../../components/seo/Meta";
import { useMatomo } from "@datapunt/matomo-tracker-react";
import { isCookieConsent } from "../../utils/routes";
import { Router, useRouter } from "next/router";
import { resetCookieConsentValue } from "react-cookie-consent";

const Index = () => {
    const { trackPageView } = useMatomo();
    const [isLoaded, setLoaded] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (isCookieConsent()) {
            trackPageView({
                documentTitle: "login",
            });
            setLoaded(true);
        }

    }, []);

    const resetCookies = () => {
        resetCookieConsentValue();
        router.reload()
    }

    return (
        <div className="flex flex-row bg-gray-800" style={{ width: "100vw", height: "100vh" }}>
            <Meta title="Login" url="https://tapeb.in/login"/>
            <Navbar/>
            <div className="mx-auto mt-28 flex flex-col justify-between">
                {isLoaded && <Login/>}
                {!isLoaded &&
                <div className="flex flex-col text-center text-gray-100">
                    In order to login, you must give consent cookies!
                    <div>
                        Click <a href="#" onClick={resetCookies} className="text-proColor">here</a> to get the consent banner!
                    </div>
                    <div>
                        After giving consent, reload the page.
                    </div>
                </div>}
                <div className="pb-4 mt-16">
                    <Footer/>
                </div>
            </div>
        </div>
    )
};


export default Index;
