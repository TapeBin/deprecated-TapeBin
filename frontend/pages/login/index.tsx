import React, { useEffect } from "react";
import Navbar from "../../components/bar/Navbar";
import Login from "../../components/login/Login";
import Footer from "../../components/footer/Footer";
import Meta from "../../components/seo/Meta";
import { useMatomo } from "@datapunt/matomo-tracker-react";

const Index = () => {
    const { trackPageView } = useMatomo();

    useEffect(() => {
        trackPageView({
            documentTitle: "login",
        });
    }, []);

    return (
        <div className="flex flex-row bg-gray-800" style={{ width: "100vw", height: "100vh" }}>
            <Meta title="Login" url="https://tapeb.in/login"/>
            <Navbar/>
            <div className="mx-auto mt-28 flex flex-col">
                <Login/>
                <div className="pb-4 mt-16">
                    <Footer/>
                </div>
            </div>
        </div>
    )
};

export default Index;
