import { atom } from "jotai";

export const setItem = (item: string, value: string) => {
  console.log(localStorage.getItem(item));
  if (localStorage.getItem(item) === null) {
    localStorage.setItem(item, value);
  }
  return localStorage.getItem(item)!!;
};

export const editorAtom = atom({
  theme: setItem("theme", "one_dark"),
  fontSize: setItem("fontSize", "15px"),
  fontFamily: setItem("fontFamily", "Fira Code"),
  printMargin: setItem("printMargin", "false") === "true",
  mode: setItem("mode", "java"),
});
