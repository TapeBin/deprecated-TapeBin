import React from "react";
import FormContainer from "./FormContainer";
import DefaultSelector from "../select/DefaultSelector";
import {
  getAceModeWithId,
  getFirstOrSelectedFontFamily,
  getFirstOrSelectedLanguage, getFirstOrSelectedTheme,
  getFonts,
  getFontSize,
  getLanguages, getThemes
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

  const onLanguageChange = (option: SelectOption | null, actionMeta: ActionMeta<SelectOption>) => {
    const value = option!!.value;
    setEditor(prevState => ({...prevState, mode: getAceModeWithId(value)}));
    localStorage.setItem("mode", value);
  };

  const onThemeChange = (option: SelectOption | null, actionMeta: ActionMeta<SelectOption>) => {
    const value = option!!.value;
    setEditor(prevState => ({...prevState, theme: value}));
    localStorage.setItem("theme", value);
  };

  const redirectToHomePage = () => {
    router.push("/");
    // router.reload();
  }

  return (
    <FormContainer title="Settings">
      <DefaultSelector options={getFonts()} onChange={onFontFamilyChange} defaultValue={getFirstOrSelectedFontFamily()}
                       label={"Font Family"}/>
      <DefaultSelector options={getLanguages()} onChange={onLanguageChange} defaultValue={getFirstOrSelectedLanguage()} label={"Default Language"}/>
      <DefaultSelector options={getThemes()} onChange={onThemeChange} defaultValue={getFirstOrSelectedTheme()} label={"Theme"}/>
      <Input label={"Font Size"} type="number" onChange={onFontSizeChange} defaultValue={getFontSize()}/>
      <Button text={"Return to home page"} onClick={redirectToHomePage}/>
    </FormContainer>
  )
};

export default Settingsbar;
