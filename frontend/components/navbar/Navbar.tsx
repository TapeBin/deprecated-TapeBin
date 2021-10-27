import React from "react";
import Pro from "../tiers/Pro";
import Icon from "./Icon";
import Icons from "./Icon";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="bg-background w-[70px] h-full flex flex-col space-y-12 justify-start items-center">
      <Logo />

      <div className="flex flex-col space-y-4 items-center">
        <Icon src="/images/avatar.svg" alt="Profile" />
        <Icon src="/images/settings.svg" alt="Settings" />
      </div>
    </nav>
  );
};

export default Navbar;
