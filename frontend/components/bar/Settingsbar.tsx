import React from "react";
import FormContainer from "./FormContainer";
import DefaultSelector from "../select/DefaultSelector";
import {
  getFirstOrSelectedFontFamily,
  getFirstOrSelectedLanguage,
  getFonts,
  getFontSize,
  getLanguages
} from "../../utils/fileUtil";
import { SelectOption } from "../select/Selector";
import { ActionMeta } from "react-select";
import { useAtom } from "jotai";
import { editorAtom } from "../../states/editor";
import Input from "../form/Input";
import Button from "../form/Button";
import { useRouter } from "next/router";

const Settingsbar = () => {
  const router = useRouter();
  const [_, setEditor] = useAtom(editorAtom);

  const onFontFamilyChange = (option: SelectOption | null, actionMeta: ActionMeta<SelectOption>) => {
    setEditor(prevState => ({ ...prevState, fontFamily: option!!.value }));
    localStorage.setItem("fontFamily", option!!.value);
  };

  const onFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fontSize = `${event.target.value}px`;
    setEditor(prevState => ({...prevState, fontSize: fontSize}));
    localStorage.setItem("fontSize", fontSize);
  }

  const onLanguageChange = () => {

  };

  const redirectToHomePage = () => {
    router.push("/");
  }

  return (
    <FormContainer title="Settings">
      <DefaultSelector options={getFonts()} onChange={onFontFamilyChange} defaultValue={getFirstOrSelectedFontFamily()}
                       label={"Font Family"}/>
      <DefaultSelector options={getLanguages()} onChange={onLanguageChange} defaultValue={getFirstOrSelectedLanguage()} label={"Default Language"}/>
      {/*<DefaultSelector options={} onChange={} defaultValue={} label={"Theme"}/>*/}
      <Input label={"Font Size"} type="number" onChange={onFontSizeChange} defaultValue={getFontSize()}/>
      <Button text={"Return to home page"} onClick={redirectToHomePage}/>
    </FormContainer>
  )
};

export default Settingsbar;
