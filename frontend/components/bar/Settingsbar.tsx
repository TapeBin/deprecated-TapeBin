import React from "react";
import FormContainer from "./FormContainer";
import Selector, { SelectOption } from "../select/Selector";
import Select, { ActionMeta } from "react-select";

const Settingsbar = () => {

  const options;
  const onChange = () => {

  };

  return (
    <FormContainer title="Settings">
      <Select
        options={options}
        onChange={(
          option: SelectOption | null,
          actionMeta: ActionMeta<SelectOption>
        ) => {
          props.onChange(option, actionMeta);
          handleValueChange();
        }}
        styles={customStyles}
        value={value}
        defaultValue={{
          label: getDefaultSettings().label,
          value: getDefaultSettings().value,
        }}
        isDisabled={props.isOnId}
      />
    </FormContainer>
  )
};

export default Settingsbar;
