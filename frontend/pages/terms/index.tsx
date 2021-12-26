import React, { useEffect } from "react";
import Meta from "../../components/seo/Meta";
import Navbar from "../../components/bar/Navbar";
import Footer from "../../components/footer/Footer";
import dynamic from "next/dynamic";
import { isCookieConsent } from "../../utils/routes";
import { useMatomo } from "@datapunt/matomo-tracker-react";

const MarkdownContainer = dynamic(() => {
    return import("../../components/markdown/MarkdownContainer")
}, { ssr: false })

const index = () => {
    const { trackPageView } = useMatomo();
    useEffect(() => {
        if (isCookieConsent())
            trackPageView({
                documentTitle: "terms",
            });

    }, []);

    return (
        <>
            <Meta title="Terms" url="https://tapeb.in/terms"/>
            <div className="flex flex-row bg-gray-800 overflow-y-auto" style={{ width: "100vw", height: "100vh" }}>
                <Navbar/>
                <div className="w-[900px] mx-auto mt-28 flex flex-col">
                    <div className="w-full">
                        <MarkdownContainer fileName="ToS"/>
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