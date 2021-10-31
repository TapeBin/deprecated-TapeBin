import React, { FunctionComponent } from "react";
import Select, { ActionMeta } from "react-select";

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

const Selector: FunctionComponent<SelectorProps> = (props: SelectorProps) => {
  return <Select options={props.options} onChange={props.onChange} />;
};

export default Selector;
