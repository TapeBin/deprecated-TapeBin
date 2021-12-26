import React, { useEffect, useLayoutEffect, useState } from "react";
import Meta from "../../components/seo/Meta";
import Navbar from "../../components/bar/Navbar";
import Footer from "../../components/footer/Footer";
import dynamic from "next/dynamic";
import { useMatomo } from "@datapunt/matomo-tracker-react";
import { isCookieConsent } from "../../utils/routes";
import { useRouter } from "next/router";

const MarkdownContainer = dynamic(() => {
    return import("../../components/markdown/MarkdownContainer")
}, { ssr: false })

const index = () => {
    const { trackPageView } = useMatomo();
    const router = useRouter();
    useEffect(() => {
        if (isCookieConsent())
            trackPageView({
                documentTitle: "privacy",
            });

    }, []);

    useLayoutEffect(() => {
        setTimeout(() => {
            const anchor = router.asPath.split("#")[1];
            if (anchor) {
                const el = document.getElementById(anchor);
                if (el) {
                    el.scrollIntoView();
                }
            }
        }, 1000);

    }, []);

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
    )
        ;
}


export default index;