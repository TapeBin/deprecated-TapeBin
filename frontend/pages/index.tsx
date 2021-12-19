import React, { useEffect } from "react";
import Navbar from "../components/bar/Navbar";
import dynamic from "next/dynamic";
import Topbar from "../components/bar/Topbar";
import Formbar from "../components/bar/Formbar";
import BinList from "../components/bins/BinList";
import Meta from "../components/seo/Meta";
import { useAtom } from "jotai";
import { binsAtom } from "../states/bins";
import { useMatomo } from "@datapunt/matomo-tracker-react";
import { pageAtom } from "./_app";

const DynamicEditor = dynamic(
    () => {
        return import("../components/editor/Editor");
    },
    { ssr: false }
);


const Index = () => {
    const [bin] = useAtom(binsAtom);
    const { trackPageView } = useMatomo();
    const [page] = useAtom(pageAtom);

    useEffect(() => {
        trackPageView({
            documentTitle: "index",
        });
    }, []);



    return (
        <>
            <Meta title="TapeBin" titleTemplate="%s"/>
            {page.isLoaded && <Page title={bin.title} description={bin.description}/>}
        </>
    );
};

const Page = (props: any) => {

    return (
        <div className="flex flex-row" style={{ width: "100vw", height: "100vh" }}>
            <Navbar/>
            <Formbar title={props.title} description={props.description}/>
            <div className="flex flex-col w-full h-full overflow-hidden">
                <Topbar>
                    <BinList/>
                </Topbar>
                <DynamicEditor/>
            </div>
        </div>
    )
};

export default Index;
