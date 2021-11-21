import React from "react";
import FormContainer from "./FormContainer";
import DefaultSelector from "../select/DefaultSelector";
import { getFirstOrSelectedFontFamily, getFonts } from "../../utils/fileUtil";
import { SelectOption } from "../select/Selector";
import { ActionMeta } from "react-select";

const Settingsbar = () => {

  const onFontFamilyChange = (option: SelectOption | null, actionMeta: ActionMeta<SelectOption>) => {

  };

  console.log(getFonts());

  return (
    <FormContainer title="Settings">

      <DefaultSelector options={getFonts()} onChange={onFontFamilyChange} defaultValue={getFirstOrSelectedFontFamily()}
                       label={"Font Family"}/>
      {/*<DefaultSelector options={} onChange={} value={} defaultValue={} label={"Default Language"}/>*/}
      {/*<DefaultSelector options={} onChange={} value={} defaultValue={} label={"Theme"}/>*/}
    </FormContainer>
  )
};

export default Settingsbar;
