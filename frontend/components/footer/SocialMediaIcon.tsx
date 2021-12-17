import React, { FunctionComponent } from "react";

type SocialMediaIconProsp = {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  url?: string;
};

const SocialMediaIcon: FunctionComponent<SocialMediaIconProsp> = (
  props: SocialMediaIconProsp
) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      style={{ width: props.width, height: props.height, cursor: "pointer" }}
      onClick={() => window.open(props.url, "_blank")}
    />
  );
};

SocialMediaIcon.defaultProps = {
  width: "25px",
  height: "25px",
  url: "https://tapeb.in",
};

export default SocialMediaIcon;
