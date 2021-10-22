import React from "react";
import Item from "./Item";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="min-w-full bg-gray-800 py-5 flex flex-row justify-between px-5 items-center">
      <div>
        <Logo />
      </div>
      <div className="space-x-5">
        <Item link="/" text="Settings" />
        <Item link="/" text="Settings" />
      </div>
    </nav>
  );
};

export default Navbar;
