import React, { FunctionComponent, useEffect } from "react";

type ButtonProps = {
  text: string;
};

const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  return (
    <button className="w-[215px] h-[45px] rounded-md bg-proColor border-none text-gray-700 border-[5px] transition duration-300 transform-gpu hover:scale-105 hover:bg-proHoverColor active:bg-proFocusColor active:text-gray-100">
      {props.text}
    </button>
  );
};

export default Button;
