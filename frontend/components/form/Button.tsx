import React, { FunctionComponent, useEffect } from "react";

type ButtonProps = {
  width?: string;
  height?: string;
  backgroundColor?: string;
  textColor?: string;
  text: string;
};

const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  useEffect(() => {
    console.log(props.backgroundColor);
  }, []);

  return (
    <button
      style={{
        width: props.width,
        height: props.height,
        backgroundColor: props.backgroundColor,
        color: props.textColor,
        borderRadius: "5px",
      }}
    >
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  width: "215px",
  height: "45px",
  backgroundColor: "#00C2FF",
  textColor: "#404040",
  text: "Not defined text",
};

export default Button;
