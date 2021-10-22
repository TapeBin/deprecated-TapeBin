import React from "react";
import Pro from "../tiers/Pro";
import Avatar from "./Avatar";
import Item from "./Item";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="min-w-full bg-gray-800 py-5 flex flex-row justify-between px-5 items-center text-white">
      <div>
        <Logo />
      </div>
      <div className="space-x-5 flex items-center">
        <Item link="/" text="Settings" />
        <Pro />
        <Avatar />
      </div>
    </nav>
  );
};

export default Navbar;
