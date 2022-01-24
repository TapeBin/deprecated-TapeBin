import React, { useEffect } from "react";
import Navbar from "../components/bar/Navbar";
import Formbar from "../components/bar/Formbar";
import Topbar from "../components/bar/Topbar";
import BinList from "../components/bins/BinList";
import dynamic from "next/dynamic";
import { GetServerSideProps } from "next";
import { useAtom } from "jotai";
import { binsAtom } from "../states/bins";
import { editorAtom } from "../states/editor";
import { binFormAtom } from "../states/binForm";
import { BACK_END_ROUTE, isCookieConsent } from "../utils/routes";
import Meta from "../components/seo/Meta";
import { pageAtom } from "./_app";
import { useMatomo } from "@datapunt/matomo-tracker-react";

const DynamicEditor = dynamic(
    () => {
        return import("../components/editor/Editor");
    },
    { ssr: false }
);

export const getServerSideProps: GetServerSideProps<{}, Record<"id", string>> = async ({ params }) => {
    const response = await fetch(`${BACK_END_ROUTE}/api/bin/${params!!.id}`);
    const json = await response.json();

    if (!json.succeed) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            bin: json,
            id: params!!.id
        }
    };

};


const ID = (props: any) => {
    const [_, setBin] = useAtom(binsAtom);
    const [page] = useAtom(pageAtom)
    const [__, setEditor] = useAtom(editorAtom);
    const [___, setBinForm] = useAtom(binFormAtom);
    const { trackPageView } = useMatomo();

    useEffect(() => {
        if (!page.isLoaded) return;
        const bin = props.bin;

        setEditor(prevState => ({
            ...prevState,
            languageId: bin.bins[0].languageId,
            text: bin.bins[0].text
        }));

        setBin({
            title: bin.title,
            description: bin.description,
            bins: bin.bins
        });

        setBinForm({
            currentBinId: bin.bins[0].id
        });

        if (isCookieConsent())
            trackPageView({
                documentTitle: `${props.id}`,
            });
        // axios.get(`http://localhost:8080/?module=API&method=Auctions.getPageUrl&pageUrl=${props.id}&idSite=2&format=JSON`)
        //   .then((result) => console.log(result));

    }, [page.isLoaded]);


    return (
        <>
            <Meta title={props.bin.title || props.id}
                  description={props.bin.description}
                  url={"https://tapeb.in/" + props.id}
            />

            {page.isLoaded && <Page bin={props.bin}/>}

        </>
    )
};

export const Page = (props: any) => {
    return (
        <div className="flex flex-row" style={{ width: "100vw", height: "100vh" }}>

            <Navbar/>
            <Formbar isOnId={true} title={props.bin.title} description={props.bin.description}/>
            <div className="flex flex-col w-full h-full overflow-hidden">
                <Topbar>
                    <BinList isOnId={true}/>
                </Topbar>
                <DynamicEditor/>
            </div>
        </div>
    )
};

export default ID;
