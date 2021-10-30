import { useAtom } from "jotai";
import React from "react";
import { userAtom } from "../../states/user";
import Pro from "../tiers/Pro";
import Icon from "./Icon";
import Logo from "./Logo";

const Navbar = () => {
  const [user] = useAtom(userAtom);

  const logIn = () => {
    if (user.isLoggedIn) {
      console.log("logged in");
    } else {
      window.open(`${process.env.BACK_END}/auth/github`, "_self");
    }
  };

  return (
    <nav className="w-[70px] h-full bg-background flex flex-col space-y-12 justify-start items-center border-r-2 border-gray-700">
      <Logo />
      <div className="flex flex-col space-y-5 items-center">
        <Icon src={user.profileImage} alt="Profile" onClick={logIn} />
        <Icon src="/images/settings.svg" alt="Settings" />
      </div>
    </nav>
  );
};

export default Navbar;
