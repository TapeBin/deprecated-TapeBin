// import {getModeWithLanguageId} from "../binUtil";
//
// const prettier = require("prettier/standalone");
// const plugins = [
//   require("prettier/parser-html"),
//   require("prettier/parser-babel"),
//   require("prettier/parser-graphql"),
//   require("prettier/parser-espree"),
//   require("prettier/parser-flow"),
//   require("prettier/parser-yaml"),
//   require("prettier/parser-angular"),
//   require("prettier/parser-glimmer"),
//   require("prettier/parser-markdown"),
//   require("prettier/parser-meriyah"),
//   require("prettier/parser-postcss"),
//   require("prettier/parser-typescript"),
//   require("prettier-plugin-java"),
// ];
//
// const LANGUAGES = [
//   "javascript",
//   "js",
//   "java",
//   "typescript",
//   "ts",
//   "meriyah",
//   "css",
//   "scss",
//   "sass",
//   "json",
//   "yaml",
//   "yml",
//   "angular",
//   "flow",
//   "babel",
//   "html",
//   "glimmer",
//   "graphql",
//   "markdown",
//   "espree",
// ];
//
// export const canBeautify = (aceMode) => {
//   let language = aceMode;
//   if (String(aceMode).match(/\d/))
//     language = getModeWithLanguageId(aceMode)
//   return LANGUAGES.includes(language);
// }
//
// export const beautify = (code, language) => {
//
//   if (language === "javascript" || language === "js")
//     language = "babel";
//
//   let prettified;
//   try {
//     prettified = prettier.format(code, {
//         parser: language,
//         tabWidth: parseInt(localStorage.getItem("tabWidth")),
//         plugins: plugins
//       },
//     );
//   } catch (e) {
//     return undefined;
//   }
//
//   return prettified;
// }
