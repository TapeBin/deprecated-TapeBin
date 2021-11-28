import fontFamilies from "./json/fonts.json";
import languages from "./json/languages.json";
import linguist from "./json/linguist.json";
import themes from "./json/themes.json";

interface Selection {
  label: string;
  value: string;
}

// FONTS ------------------------------------------------------------

export const getFonts = (): Selection[] => {
  const fonts: Selection[] = [];

  for (const index in fontFamilies.fonts) {
    if (fontFamilies.fonts.hasOwnProperty(index)) {
      const font = fontFamilies.fonts[index];
      fonts.push({ label: font, value: font });
    }
  }

  return fonts;
};

export const getFirstOrSelectedFontFamily = (): Selection => {
  let fontFamily = localStorage.getItem("fontFamily");

  if (!fontFamily)
    fontFamily = fontFamilies.fonts[0];

  return { label: fontFamily, value: fontFamily };
};

export const getFontSize = (): number => {
  const fontSize = localStorage.getItem("fontSize")!!;

  fontSize.replace("px", "");

  return parseInt(fontSize);
};

// END FONTS ------------------------------------------------------------

// TAB WIDTH ------------------------------------------------------------

export const getTabWidth = (): number => {
  return parseInt(localStorage.getItem("tabWidth")!!);
}

// END TAB WIDTH ------------------------------------------------------------

// LANGUAGES ------------------------------------------------------------

export const getLanguages = (): Selection[] => {
  const properLanguages: Selection[] = [];

  for (const language in languages) {
    if (languages.hasOwnProperty(language)) {
      // @ts-ignore
      properLanguages.push({ label: language, value: languages[language] });
    }
  }

  return properLanguages;
};

export const getAceModeWithId = (id: string): string => {
  // @ts-ignore
  return linguist[id].aceMode;
}

export const getFirstOrSelectedLanguage = (): Selection => {
  let mode = localStorage.getItem("mode");

  if (!mode)
    mode = linguist[0].extension;

  // @ts-ignore
  const languageName = linguist[mode].name;
  return { label: languageName, value: mode };
}

// END LANGUAGES ------------------------------------------------------------

// THEMES ------------------------------------------------------------

export const getThemes = (): Selection[] => {
  const newThemes: Selection[] = [];

  for (const theme in themes) {
    if (themes.hasOwnProperty(theme)) {
      // @ts-ignore
      newThemes.push({ label: themes[theme], value: theme });
    }
  }

  return newThemes;
};

export const getFirstOrSelectedTheme = (): Selection => {
  let theme = localStorage.getItem("theme");

  if (!theme)
    // @ts-ignore
    theme = themes[0];

  // @ts-ignore
  return { label: themes[theme], value: theme };
};

// END THEMES ------------------------------------------------------------

// MARGIN ------------------------------------------------------------

export const getPrintMargin = (): boolean => {
  return localStorage.getItem("printMargin") === "true";
};

// END MARGIN ------------------------------------------------------------
