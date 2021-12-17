import React, { useEffect, useState } from "react";
import Navbar from "../../components/bar/Navbar";
import Topbar from "../../components/bar/Topbar";
import dynamic from "next/dynamic";
import Settingsbar from "../../components/bar/Settingsbar";
import Head from "next/head";
import Meta from "../../components/seo/Meta";
import { useAtom } from "jotai";
import { pageAtom } from "../_app";
import { useMatomo } from "@datapunt/matomo-tracker-react";

const DynamicEditor = dynamic(
    () => {
        return import("../../components/editor/Editor");
    },
    { ssr: false }
);

const TEXT = `function reverse(string) {
  let reversed = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }

  return reversed;
}
`;


const Index = () => {
    const [page] = useAtom(pageAtom);
    const { trackPageView } = useMatomo();

    useEffect(() => {
        trackPageView({
            documentTitle: "settings",
        });
    }, []);

    return (
        <div className="flex flex-row" style={{ width: "100vw", height: "100vh" }}>
            <Meta title="Settings" url="https://tapeb.in/settings"/>
            <Navbar/>
            {page.isLoaded && <Settingsbar/>}
            <div className="flex flex-col w-full h-full overflow-hidden">
                <Topbar>
                </Topbar>
                <DynamicEditor value={TEXT} mode={"javascript"}/>
            </div>
        </div>
    )
};

export default Index;
