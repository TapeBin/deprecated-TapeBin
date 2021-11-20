import { useAtom } from "jotai";
import React, { FunctionComponent, useEffect, useState } from "react";
import Select, { ActionMeta, StylesConfig } from "react-select";
import { binFormAtom } from "../../states/binForm";
import { binsAtom } from "../../states/bins";
import { editorAtom } from "../../states/editor";
import {
  getLanguageIdFromStorage, getLanguageModeWithIdAsString,
  getLanguageNameWithBin, getLanguageNameWithId,
  getLanguageNameWithMode,
} from "../../utils/binUtil";
import linguist from "../../utils/json/linguist.json";

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
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#737373",
  }),
  input: (provided) => ({
    ...provided,
    color: "#F5F5F5",
  }),
};

const Selector: FunctionComponent<SelectorProps> = (props: SelectorProps) => {
  const [bins] = useAtom(binsAtom);
  const [binForm] = useAtom(binFormAtom);
  const [editor, setEditor] = useAtom(editorAtom);
  const getDefaultSettings = () => {
    return {
      value: getLanguageIdFromStorage(),
      label:
        getLanguageNameWithBin(bins.bins) ||
        getLanguageNameWithId(parseInt(editor.mode))!!,
    };
  };

  const [value, setValue] = useState({
    label: getDefaultSettings().label,
    value: getDefaultSettings().value,
  });

  const handleValueChange = () => {
    const bin = bins.bins.find(
      (foundBin) => foundBin.id === binForm.currentBinId
    );


    if (bin) {
      // @ts-ignore
      setValue({
        label: linguist[bin.languageId.toString()].name,
        value: bin.languageId.toString() as string,
      });

      // A bug causes the editor text to reset, to prevent that, we set it again
      setEditor((prevState) => ({ ...prevState, text: bin.text }));
    }

  };

  useEffect(() => {
    handleValueChange();
  }, [binForm.currentBinId]);

  return (
    <Select
      options={props.options}
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
    />
  );
};

export default Selector;
