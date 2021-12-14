import React, { useEffect, useState } from "react";
import Navbar from "../../components/bar/Navbar";
import Profile from "../../components/profile/Profile";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { userAtom } from "../../states/user";
import Meta from "../../components/seo/Meta";
import { pageAtom } from "../_app";

const Index = () => {
    const router = useRouter();
    const [user] = useAtom(userAtom);
    const [page, setPage] = useAtom(pageAtom);

    useEffect(() => {
        console.log(user);
        if (page.isLoaded && !user.isLoggedIn)
            router.push("/");
    }, [page.isLoaded]);

    return (
        <div className="flex flex-row" style={{ width: "100vw", height: "100vh" }}>
            <Meta title="Profile" url="https://tapeb.in/profile"/>
            <Navbar/>
            {page.isLoaded && <Profile/>}
        </div>
    );
};

export default Index;
