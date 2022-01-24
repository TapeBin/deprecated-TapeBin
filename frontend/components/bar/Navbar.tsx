import { useAtom } from "jotai";
import { useRouter } from "next/router";
import React from "react";
import { userAtom } from "../../states/user";
import Icon from "./Icon";
import Logo from "./Logo";
import ProfileIcon from "./ProfileIcon";
import { pageAtom } from "../../pages/_app";

const Navbar = () => {
  const router = useRouter();
  const [user] = useAtom(userAtom);
  const [page, setPage] = useAtom(pageAtom);

  const logIn = () => {
    if (user.isLoggedIn) {
      router.push("/profile");
    } else {
      router.push("/login");
    }
  };

  const redirectToSettings = () => {
    router.push("/settings");
  };

  const toggleNavbar = () => {
    const toggle = !page.isBarHidden;
    setPage(prevState => ({ ...prevState, isBarHidden: toggle }));
    localStorage.setItem("isBarHidden", `${toggle}`);
  };

  return (
    <nav className="w-[70px] sticky top-0 flex-none block overflow-y-auto  h-full bg-background flex flex-col space-y-12 justify-start items-center border-r-2 border-gray-700">
      <Logo />
      <div className="flex flex-col space-y-5 items-center">
        <ProfileIcon src={user.profileImage} alt="Profile" onClick={logIn} />
        <Icon src="/images/settings.svg" alt="Settings" onClick={redirectToSettings}/>
        <Icon src={page.isBarHidden ? "/images/arrow-collapse-right.svg" : "/images/arrow-collapse-left.svg"} alt={"Show/Hide"} onClick={toggleNavbar}/>
      </div>
    </nav>
  );
};

export default Navbar;
