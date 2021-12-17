import Router from "next/router";
import React from "react";

const Logo = () => {
  const goToHomePage = () => {
    Router.push("/");
  };

  return (
    <img
      src="/images/logo.svg"
      alt="TapeBin"
      className="h-[35px] mt-5 cursor-pointer"
      onClick={goToHomePage}
    />
  );
};

export default Logo;
