import { useAtom } from "jotai";
import React from "react";
import { userAtom } from "../../states/user";

const TopProfile = () => {
  const [user] = useAtom(userAtom);
  return (
    <div className="flex flex-row items-center space-x-8 px-[40px] py-[20px] rounded-md bg-gray-500 text-gray-100">
      <img
        src={user.profileImage}
        alt="Profile Image"
        className="h-[90px] rounded-full"
      />
      <div className="flex flex-col text-3xl">
        <div>{user.username}</div>
      </div>
    </div>
  );
};

export default TopProfile;
