import { atom } from "jotai";
import { Bin } from "../types/Bin";

export const binsAtom = atom({
  title: "",
  fileName: "",
  description: "",
  bins: [] as Bin[],
});
