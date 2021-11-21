import React, { FunctionComponent } from "react";

type InputProps = {
  label: string;
  placeholder?: string;
  type?: string;
  isOnId?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string | number;
};

const Input: FunctionComponent<InputProps> = (props: InputProps) => {
  return (
    <div className="flex flex-col text-gray-100 ">
      <label htmlFor={props.label}>{props.label}</label>
      <input
        type={props.type}
        name={props.label}
        placeholder={props.placeholder}
        className="h-[45px] rounded-md px-2 bg-gray-700 disabled:text-gray-100"
        disabled={props.isOnId}
        onChange={props.onChange}
        defaultValue={props.defaultValue}
      />
    </div>
  );
};

Input.defaultProps = {
  type: "text",
};

export default Input;
