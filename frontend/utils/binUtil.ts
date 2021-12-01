import { Bin } from "../types/Bin";
import language from "./json/languages.json";
import linguist from "./json/linguist.json";
import { MAX_CHARACTERS } from "./constants";

export const getLanguageNameWithId = (
  id: number | undefined
): string | undefined => {
  if (!id) return undefined;

  if (linguist.hasOwnProperty(id.toString())) {
    // @ts-ignore
    return linguist[id.toString()].name;
  }
  return undefined;
};

export const getLanguageNameWithBin = (bins: Bin[]): string | undefined => {
  if (bins[0]) {
    return getLanguageNameWithId(bins[0].languageId);
  }
};

export const getLanguageNameWithMode = (mode: string): string => {
  for (const key in linguist) {
    if (linguist.hasOwnProperty(key)) {
      // @ts-ignore
      if (linguist[key].aceMode === mode) return linguist[key].name;
    }
  }

  return "";
};

export const getLanguageIdWithMode = (mode: string): number => {
  const name = getLanguageNameWithMode(mode);
  if (language.hasOwnProperty(name)) {
    // @ts-ignore
    return parseInt(language[name]);
  }
  return 0;
};

export const getLanguageIdAsString = (bins: Bin[]): string => {
  if (bins[0]) {
    return bins[0].languageId.toString();
  }
  return "";
};

export const getLanguageModeWithIdAsString = (number: string): string | undefined => {
  if (linguist.hasOwnProperty(number)) {
    // @ts-ignore
    return linguist[number].aceMode;
  }

  return undefined;
};

export const getLanguageModeWithId = (number: number): string => {
  if (linguist.hasOwnProperty(number)) {
    // @ts-ignore
    return linguist[number].aceMode;
  }

  return "";
};


export const getLanguageIdFromStorage = (): string => {
  return localStorage.getItem("languageId") || "null";
};

export const exceedsMaxCharacters = (bins: any[]): boolean => {
  let amountCharacters = 0;
  bins.forEach(bin => amountCharacters += bin.text.length);
  return amountCharacters >= MAX_CHARACTERS;
};

export const isEmptyBins = (bins: any[]) => {
  return bins.some(bin => bin.text === '');
};
