import React, { FunctionComponent } from "react";

type InputProps = {
  label: string;
  placeholder?: string;
  type?: string | "text";
};

const Input: FunctionComponent<InputProps> = (props: InputProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={props.label}>{props.label}</label>
      <input
        type={props.type}
        name={props.label}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
