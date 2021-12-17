import { atom } from "jotai";

export const setItem = (item: string, value: string) => {
  if (window.localStorage.getItem(item) === null) {
    window.localStorage.setItem(item, value);
  }
  return window.localStorage.getItem(item)!!;
};

export const editorAtom = atom({
  theme: "",
  fontSize: "",
  fontFamily: "",
  printMargin: false,
  languageId: 0,
  text: "",
  tabWidth: 4
});
