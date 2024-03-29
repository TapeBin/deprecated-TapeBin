import React, { useEffect } from "react";
import Meta from "../../components/seo/Meta";
import Navbar from "../../components/bar/Navbar";
import Footer from "../../components/footer/Footer";
import { useMatomo } from "@datapunt/matomo-tracker-react";
import { isCookieConsent } from "../../utils/routes";

const Index = () => {
    const { trackPageView } = useMatomo();

    useEffect(() => {
        if (isCookieConsent())
            trackPageView({
                documentTitle: "404",
            });
    }, []);

    return (
        <>
            <Meta title="404 Error" url="https://tapeb.in/404"/>
            <div className="flex flex-row bg-gray-800" style={{ width: "100vw", height: "100vh" }}>
                <Navbar/>
                <div className="w-full h-full mx-auto pt-28 flex flex-col justify-between">
                    <div className="flex flex-col items-center space-y-4">
                        <img src="./images/crying.svg" className="w-[128px]" alt="404 Not Found"/>
                        <div className="text-center text-4xl text-gray-100">
                            This page could not be found!
                        </div>
                    </div>

                    <div className="mb-4">
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;