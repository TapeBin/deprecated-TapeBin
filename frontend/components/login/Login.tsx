import React from "react";
import LoginButton from "./LoginButton";
import { useAtom } from "jotai";
import { userAtom } from "../../states/user";
import { FRONT_END_ROUTE } from "../../utils/routes";

const Login = () => {
  const [user] = useAtom(userAtom);
  const discordLogin = () => {
    if (!user.isLoggedIn) {
      window.open(`${FRONT_END_ROUTE}/api/auth/discord`, "_self");
    }
  }

  const githubLogin = () => {
    if (!user.isLoggedIn) {
      window.open(`${FRONT_END_ROUTE}/api/auth/github`, "_self");
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center space-y-4">
      <div className="text-center font-lobster text-4xl text-gray-100">Get started by logging in</div>
      <LoginButton src="./images/social_media/discord.svg" alt="D" title="Discord" backgroundColor="#738ADB"
                   color={"#FFFFFF"} onClick={discordLogin}/>
      <LoginButton src="./images/social_media/github.svg" alt="G" title="GitHub" backgroundColor="#211F1F"
                   color={"#FFFFFF"} onClick={githubLogin}/>
    </div>
  )
};

export default Login;
