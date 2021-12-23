import React, { FunctionComponent } from "react";
import Select, { ActionMeta } from "react-select";
import { customStyles, SelectOption } from "./Selector";

type DefaultSelectorProps = {
  options: { label: string; value: string }[];
  onChange: (
    option: SelectOption | null,
    actionMeta: ActionMeta<SelectOption>
  ) => void;
  value?: {label: string, value: string};
  defaultValue: {label: string, value: string};
  label: string;
};

const DefaultSelector: FunctionComponent<DefaultSelectorProps> = (props: DefaultSelectorProps) => {

  return (
    <div className="w-[215px]">
      <label htmlFor={props.label}>
        {props.label}
      </label>
      <Select
        name={props.label}
        options={props.options}
        onChange={(
          option: SelectOption | null,
          actionMeta: ActionMeta<SelectOption>
        ) => {
          props.onChange(option, actionMeta);
        }}
        styles={customStyles}
        value={props.value}
        defaultValue={{
          label: props.defaultValue.label,
          value: props.defaultValue.value,
        }}
      />
    </div>
  )
};

export default DefaultSelector;
