import fontFamilies from "./json/fonts.json";

interface Selection {
  label: string;
  value: string;
}

// FONTS ------------------------------------------------------------
export const getFonts = (): Selection[] => {
  const fonts = [];

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

  if (!fontFamily) {
    fontFamily = fontFamilies.fonts[0];
  }

  return { label: fontFamily, value: fontFamily };
};

export const getFontSize = (): number => {
  const fontSize = localStorage.getItem("fontSize")!!;

  fontSize.replace("px", "");

  return parseInt(fontSize);
};

// END FONTS ------------------------------------------------------------
