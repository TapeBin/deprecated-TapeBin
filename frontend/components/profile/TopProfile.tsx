import axios from "../../utils/axios";
import { useAtom } from "jotai";
import React, { FunctionComponent } from "react";
import { userAtom } from "../../states/user";
import { getFormattedDate } from "../../utils/dateUtil";
import Button from "../form/Button";
import { useRouter } from "next/router";

type TopProfileProps = {
  amountOfBins: number;
}

const TopProfile: FunctionComponent<TopProfileProps> = (props: TopProfileProps) => {
  const [user] = useAtom(userAtom);
  const router = useRouter();
  const logOut = () => {
    axios
      .get(`user/logout`, { withCredentials: true })
      .then((response: any) => {
        if (response.data.logOut) {
          router.push("/");
          router.reload();
        }
      });
  };

  return (
    <div
      className="flex flex-row items-center align-middle justify-between bg-gray-600 text-gray-100 rounded-md px-[40px] py-[20px]">
      <div className="flex flex-row items-center space-x-8">
        <img
          src={user.profileImage}
          alt="Profile Image"
          className="h-[90px] rounded-full"
        />
        <div className="flex flex-col space-y-1 align-middle">
          <div className="flex flex-row space-x-3 text-3xl">
            <div>{user.username}</div>
            <div className="flex flex-row space-x-2 text-xl items-center">
              <img src="/images/file.svg" className="w-[18px]" alt="Bins"/>
              <div>{props.amountOfBins}</div>
            </div>
          </div>

          <div className="text-lg text-gray-300">
            Joined on {getFormattedDate(user.creationDate)}
          </div>
        </div>
      </div>
      <Button text="Log out" onClick={logOut}/>
    </div>
  );
};

export default TopProfile;
