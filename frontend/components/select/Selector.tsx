import React, { FunctionComponent } from "react";
import Select, { ActionMeta, StylesConfig } from "react-select";

export type SelectOption = {
  label: string;
  value: string;
};

type SelectorProps = {
  options: { label: string; value: string }[];
  onChange: (
    option: SelectOption | null,
    actionMeta: ActionMeta<SelectOption>
  ) => void;
};

const customStyles: StylesConfig<SelectOption, false> = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#404040",
    color: "#F5F5F5",
    height: "45px",
    border: "none",
    borderRadius: "0.375em",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: "#404040",
    color: "#F5F5F5",
    ":active": {
      backgroundColor: "#737373",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#F5F5F5",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#737373",
  }),
};

const Selector: FunctionComponent<SelectorProps> = (props: SelectorProps) => {
  return (
    <Select
      options={props.options}
      onChange={props.onChange}
      styles={customStyles}
    />
  );
};

export default Selector;
