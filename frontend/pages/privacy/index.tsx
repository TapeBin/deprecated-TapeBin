import React, { useEffect } from "react";
import Meta from "../../components/seo/Meta";
import Navbar from "../../components/bar/Navbar";
import Footer from "../../components/footer/Footer";
import dynamic from "next/dynamic";
import { useMatomo } from "@datapunt/matomo-tracker-react";
import { isCookieConsent } from "../../utils/routes";

const MarkdownContainer = dynamic(() => {
    return import("../../components/markdown/MarkdownContainer")
}, { ssr: false })

const index = () => {
    const { trackPageView } = useMatomo();
    useEffect(() => {
        if (isCookieConsent())
            trackPageView({
                documentTitle: "privacy",
            });
    });

    return (
        <>
            <Meta title="Privacy" url="https://tapeb.in/privacy"/>
            <div className="flex flex-row bg-gray-800 overflow-y-auto" style={{ width: "100vw", height: "100vh" }}>
                <Navbar/>
                <div className="w-[900px] mx-auto mt-28 flex flex-col">
                    <div className="w-full">
                        <MarkdownContainer fileName="Privacy"/>
                    </div>
                    <div className="pb-4 mt-16">
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default index;