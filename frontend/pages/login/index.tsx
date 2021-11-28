import React from "react";
import Navbar from "../../components/bar/Navbar";
import Login from "../../components/login/Login";

const Index = () => {

    return (
        <div className="flex flex-row bg-gray-800" style={{ width: "100vw", height: "100vh" }}>
            <Navbar/>
            <div className="mx-auto mt-28">
                <Login/>
            </div>
        </div>
    )
};

export default Index;
