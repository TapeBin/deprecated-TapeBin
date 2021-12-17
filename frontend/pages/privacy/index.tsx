import React from "react";
import Meta from "../../components/seo/Meta";
import Navbar from "../../components/bar/Navbar";
import Footer from "../../components/footer/Footer";
import dynamic from "next/dynamic";
const MarkdownContainer = dynamic(() => {return import("../../components/markdown/MarkdownContainer")}, {ssr: false})

const index = () => {

    return (
        <div className="flex flex-row bg-gray-800 overflow-y-auto" style={{ width: "100vw", height: "100vh" }}>
            <Meta title="Privacy" url="https://tapeb.in/privacy"/>
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
    );
}

export default index;