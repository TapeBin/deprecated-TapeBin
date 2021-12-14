import React from "react";
import Navbar from "../../components/bar/Navbar";
import Login from "../../components/login/Login";
import Footer from "../../components/footer/Footer";
import Meta from "../../components/seo/Meta";

const Index = () => {

    return (
        <div className="flex flex-row bg-gray-800" style={{ width: "100vw", height: "100vh" }}>
            <Meta title="Login" url="https://tapeb.in/login"/>
            <Navbar/>
            <div className="mx-auto mt-28 flex flex-col">
                <Login/>
                <div className="mb-4">
                    <Footer/>
                </div>
            </div>
        </div>
    )
};

export default Index;
