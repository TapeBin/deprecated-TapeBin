import React, { FunctionComponent } from "react";

type IconProps = {
  src: string;
  alt: string;
  onClick?: () => void;
};

const Icon: FunctionComponent<IconProps> = (props: IconProps) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className="h-[35px] cursor-pointer"
      onClick={props.onClick}
      title={props.alt}
    />
  );
};

export default Icon;
