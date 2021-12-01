import { atom } from "jotai";

export const setItem = (item: string, value: string) => {
  if (localStorage.getItem(item) === null) {
    localStorage.setItem(item, value);
  }
  return localStorage.getItem(item)!!;
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
