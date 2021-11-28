import React, { FunctionComponent } from "react";

type LoginButtonProps = {
  src: string;
  alt: string;
  title: string;
  backgroundColor: string;
  color: string;
  onClick?: () => void;
};

const LoginButton: FunctionComponent<LoginButtonProps> = (props: LoginButtonProps) => {

  return (
    <div style={{ backgroundColor: props.backgroundColor, color: props.color }}
         className="w-[270px] h-[50px] py-1 flex flex-row items-center rounded-md">
      <img className="h-[30px] px-4" src={props.src} alt={props.alt}/>
      <div className="pl-2">{props.title}</div>
    </div>
  )
};

export default LoginButton;
