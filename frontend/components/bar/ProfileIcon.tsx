import React, { FunctionComponent } from "react";

type ProfileIconProps = {
  src: string;
  alt: string;
  onClick?: () => void;
};

const ProfileIcon: FunctionComponent<ProfileIconProps> = (
  props: ProfileIconProps
) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className="h-[35px] cursor-pointer rounded-2xl"
      onClick={props.onClick}
    />
  );
};

export default ProfileIcon;
