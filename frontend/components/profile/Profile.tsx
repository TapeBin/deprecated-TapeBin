import React, { FunctionComponent } from "react";
import TopProfile from "./TopProfile";
import ProfileBinList from "./ProfileBinList";

type ProfileProps = {
  bins: any[];
};

const Profile: FunctionComponent<ProfileProps> = (props: ProfileProps) => {
  return (
    <div className="flex flex-col px-[25px] py-[35px] bg-gray-800 w-full h-full space-y-5">
      <TopProfile amountOfBins={props.bins.length}/>
      <ProfileBinList bins={props.bins}/>
    </div>
  );
};

export default Profile;
