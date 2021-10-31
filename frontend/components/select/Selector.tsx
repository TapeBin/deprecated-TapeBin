import React, { FunctionComponent } from "react";
import Select from "react-select";

type SelectOption = {
  label: string;
  value: string;
};

type SelectorProps = {
  options: [];
  onChange: (option: SelectOption | null) => void;
};

const Selector: FunctionComponent<SelectorProps> = (props: SelectorProps) => {
  return <Select options={props.options} onChange={props.onChange} />;
};

export default Selector;
