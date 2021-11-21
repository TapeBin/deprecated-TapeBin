import React, { FunctionComponent } from "react";

type CheckProps = {
  label: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked?: boolean;
};

const Check: FunctionComponent<CheckProps> = (props: CheckProps) => {

  return (
    <div className="flex flex-col">
      <label htmlFor={props.label}>{props.label}</label>
      <input
        name={props.label}
        type="checkbox"
        className="text-proColor w-8 h-8 bg-gray-700
        focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded-md"
        onChange={props.onChange}
        defaultChecked={props.isChecked}
      />
    </div>
  )
};

export default Check;
