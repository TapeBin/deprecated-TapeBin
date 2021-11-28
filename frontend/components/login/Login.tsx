import React from "react";
import LoginButton from "./LoginButton";

const Login = () => {
    return (
        <div className="w-full h-full flex flex-col items-center space-y-4">
          <div className="text-center font-lobster text-4xl text-gray-100">Get started by logging in</div>
          <LoginButton src="./images/social_media/discord.svg" alt="D" title="Discord" backgroundColor="#738ADB" color={"#FFFFFF"}/>
          <LoginButton src="./images/social_media/github.svg" alt="G" title="GitHub" backgroundColor="#211F1F" color={"#FFFFFF"}/>
        </div>
    )
};

export default Login;
