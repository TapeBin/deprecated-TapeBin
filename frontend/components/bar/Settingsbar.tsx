import React from "react";
import FormContainer from "./FormContainer";
import DefaultSelector from "../select/DefaultSelector";
import {
  getBarHidden,
  getFirstOrSelectedFontFamily,
  getFirstOrSelectedLanguage, getFirstOrSelectedTheme,
  getFonts,
  getFontSize,
  getLanguages, getPrintMargin, getTabWidth, getThemes
} from "../../utils/fileUtil";
import { SelectOption } from "../select/Selector";
import { ActionMeta } from "react-select";
import { useAtom } from "jotai";
import { editorAtom } from "../../states/editor";
import Input from "../form/Input";
import Button from "../form/Button";
import { useRouter } from "next/router";
import Check from "../form/Check";
import {pageAtom} from "../../pages/_app";

const Settingsbar = () => {
  const router = useRouter();
  const [_, setEditor] = useAtom(editorAtom);
  const [__, setPage] = useAtom(pageAtom);

  const onFontFamilyChange = (option: SelectOption | null, actionMeta: ActionMeta<SelectOption>) => {
    setEditor(prevState => ({ ...prevState, fontFamily: option!!.value }));
    localStorage.setItem("fontFamily", option!!.value);
  };

  const onFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fontSize = `${event.target.value}px`;
    setEditor(prevState => ({ ...prevState, fontSize: fontSize }));
    localStorage.setItem("fontSize", fontSize);
  }

  const onLanguageChange = (option: SelectOption | null, actionMeta: ActionMeta<SelectOption>) => {
    const value = option!!.value;
    setEditor(prevState => ({ ...prevState, languageId: parseInt(value) }));
    localStorage.setItem("languageId", value);
  };

  const onThemeChange = (option: SelectOption | null, actionMeta: ActionMeta<SelectOption>) => {
    const value = option!!.value;
    setEditor(prevState => ({ ...prevState, theme: value }));
    localStorage.setItem("theme", value);
  };

  const onPrintMarginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setEditor(prevState => ({ ...prevState, printMargin: checked }));
    localStorage.setItem("printMargin", `${checked}`);
  };

  const onTabWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEditor(prevState => ({ ...prevState, tabWidth: parseInt(value) }))
    localStorage.setItem("tabWidth", value);
  }

  const onBarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setPage(prevState => ({ ...prevState, isBarHidden: checked }));
    localStorage.setItem("isBarHidden", `${checked}`);
  };

  const redirectToHomePage = () => {
    router.push("/");
  };

  return (
    <FormContainer title="Settings" ignoreHidden={true}>
      <DefaultSelector options={getFonts()} onChange={onFontFamilyChange} defaultValue={getFirstOrSelectedFontFamily()}
                       label={"Font Family"}/>
      <DefaultSelector options={getLanguages()} onChange={onLanguageChange} defaultValue={getFirstOrSelectedLanguage()}
                       label={"Default Language"}/>
      <DefaultSelector options={getThemes()} onChange={onThemeChange} defaultValue={getFirstOrSelectedTheme()}
                       label={"Theme"}/>
      <Input label={"Font Size"} type="number" onChange={onFontSizeChange} defaultValue={getFontSize()}/>
      <Input label={"Tab Width"} type="number" onChange={onTabWidthChange} defaultValue={getTabWidth()}/>
      <Check label={"Print Margin"} onChange={onPrintMarginChange} isChecked={getPrintMargin()}/>
      <Check label={"Bar Hidden"} onChange={onBarChange} isChecked={getBarHidden()}/>
      <Button text={"Return to home page"} onClick={redirectToHomePage}/>
    </FormContainer>
  )
};

export default Settingsbar;
