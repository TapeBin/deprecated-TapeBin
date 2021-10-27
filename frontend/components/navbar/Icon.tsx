import React, { FunctionComponent } from "react";

type IconProps = {
  src: string;
  alt: string;
};

const Icon: FunctionComponent<IconProps> = (props: IconProps) => {
  return <img src={props.src} alt={props.alt} className="h-[35px]" />;
};

export default Icon;
