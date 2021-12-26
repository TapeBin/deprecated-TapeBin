import React, { useEffect } from "react";
import Navbar from "../../components/bar/Navbar";
import Profile from "../../components/profile/Profile";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { userAtom } from "../../states/user";
import Meta from "../../components/seo/Meta";
import { pageAtom } from "../_app";
import { useMatomo } from "@datapunt/matomo-tracker-react";
import { GetServerSideProps } from "next";
import { BACK_END_ROUTE, isCookieConsent } from "../../utils/routes";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const response = await fetch(`${BACK_END_ROUTE}/api/bin`, {
        headers: { Cookie: `${context.req.headers.cookie}` },
        credentials: "include"
    });
    const json = await response.json();

    return {
        props: {
            bins: json
        }
    };

};

const Index = (props: any) => {
    const router = useRouter();
    const [user] = useAtom(userAtom);
    const [page] = useAtom(pageAtom);
    const { trackPageView } = useMatomo();

    useEffect(() => {
        if (isCookieConsent())
            trackPageView({
                documentTitle: "profile",
            });
    }, []);


    useEffect(() => {
        if (page.isLoaded && !user.isLoggedIn)
            router.push("/");
    }, [page.isLoaded]);

    return (
        <>
            <Meta title="Profile" url="https://tapeb.in/profile"/>
            {page.isLoaded && user.isLoggedIn && <Page bins={props.bins}/>}
        </>

    );
};

export const Page = (props: any) => {
    return (
        <div className="flex flex-row" style={{ width: "100vw", height: "100vh" }}>
            <Meta title="Profile" url="https://tapeb.in/profile"/>
            <Navbar/>
            <Profile bins={props.bins}/>
        </div>
    )
}

export default Index;
