import React from "react";
import Pro from "../tiers/Pro";
import Icon from "./Icon";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="w-[70px] h-full bg-background flex flex-col space-y-12 justify-start items-center border-r-2 border-gray-700">
      <Logo />

      <div className="flex flex-col space-y-5 items-center">
        <Icon src="/images/avatar.svg" alt="Profile" />
        <Icon src="/images/settings.svg" alt="Settings" />
      </div>
    </nav>
  );
};

export default Navbar;
