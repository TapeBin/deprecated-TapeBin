import { atom } from "jotai";
import { Bin } from "../types/Bin";

export const binsAtom = atom({
  title: "",
  description: "",
  bins: [] as Bin[],
});
