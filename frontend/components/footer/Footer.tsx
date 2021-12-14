import React from "react";
import SocialMediaIcon from "./SocialMediaIcon";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-end space-y-2 text-center opacity-60 hover:opacity-100 transition duration-300 text-gray-200">
      <div className="flex flex-row items-center space-x-6">
        <SocialMediaIcon
          src="../images/social_media/discord.svg"
          alt="Discord"
        />
        <SocialMediaIcon src="../images/social_media/github.svg" alt="Github" />
        <SocialMediaIcon
          src="../images/social_media/twitter.svg"
          alt="Twitter"
        />
      </div>
      <div>Copyright © 2021, TapeBin. All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
