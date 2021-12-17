import React from "react";
import SocialMediaIcon from "./SocialMediaIcon";
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-end space-y-2 text-center opacity-60 hover:opacity-100 transition duration-300 text-gray-200">
      <div className="flex flex-row items-center space-x-6">
        <SocialMediaIcon
          src="../images/social_media/discord.svg"
          alt="Discord"
          url="https://discord.gg/vsh3VJGJqg"
        />
        <SocialMediaIcon
            src="../images/social_media/github.svg"
            alt="Github"
            url="https://github.com/TapeBin/TapeBin"
        />
        <SocialMediaIcon
          src="../images/social_media/twitter.svg"
          alt="Twitter"
        />
      </div>
      <div>Copyright © 2021, TapeBin. All Rights Reserved.</div>
        <div className="flex flex-row items-center space-x-6">
            <Link href="terms">
                Terms
            </Link>
            <Link href="privacy">
                Privacy
            </Link>
        </div>
    </footer>
  );
};

export default Footer;
