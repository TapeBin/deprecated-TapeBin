import React from "react";
import Meta from "../../components/seo/Meta";
import Navbar from "../../components/bar/Navbar";
import Footer from "../../components/footer/Footer";

const Index = () => {

    return (
        <div className="flex flex-row bg-gray-800" style={{ width: "100vw", height: "100vh" }}>
            <Meta title="404 Error" url="https://tapeb.in/404"/>
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
    );
}

export default Index;