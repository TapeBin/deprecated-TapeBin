import React, { FunctionComponent } from "react";
import TopProfile from "./TopProfile";
import ProfileBinList from "./ProfileBinList";
import Footer from "../footer/Footer";

type ProfileProps = {
    bins: any[];
};

const Profile: FunctionComponent<ProfileProps> = (props: ProfileProps) => {
    return (
        <div className="flex flex-col overflow-y-auto px-[25px] pt-[35px] pb-4 bg-gray-800 w-full h-full space-y-5">
            <TopProfile amountOfBins={props.bins.length}/>
            <ProfileBinList bins={props.bins}/>
            <div className="mt-16">
                <Footer/>
            </div>
        </div>
    );
};

export default Profile;
