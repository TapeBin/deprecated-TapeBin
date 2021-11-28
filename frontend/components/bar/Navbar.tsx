import { useAtom } from "jotai";
import Router, { useRouter } from "next/router";
import React from "react";
import { userAtom } from "../../states/user";
import Pro from "../tiers/Pro";
import Icon from "./Icon";
import Logo from "./Logo";
import ProfileIcon from "./ProfileIcon";

const Navbar = () => {
  const router = useRouter();
  const [user] = useAtom(userAtom);

  const logIn = () => {
    if (user.isLoggedIn) {
      Router.push("/profile");
    } else {
      Router.push("/login");
    }
  };

  const redirectToSettings = () => {
    router.push("/settings");
  };

  return (
    <nav className="w-[70px] flex-none h-full bg-background flex flex-col space-y-12 justify-start items-center border-r-2 border-gray-700">
      <Logo />
      <div className="flex flex-col space-y-5 items-center">
        <ProfileIcon src={user.profileImage} alt="Profile" onClick={logIn} />
        <Icon src="/images/settings.svg" alt="Settings" onClick={redirectToSettings}/>
      </div>
    </nav>
  );
};

export default Navbar;
