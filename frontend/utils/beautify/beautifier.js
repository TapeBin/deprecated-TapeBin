const prettier = require("prettier/standalone");
const plugins = [
  require("prettier/parser-html"),
  require("prettier/parser-babel"),
  require("prettier/parser-graphql"),
  require("prettier/parser-espree"),
  require("prettier/parser-flow"),
  require("prettier/parser-yaml"),
  require("prettier/parser-angular"),
  require("prettier/parser-glimmer"),
  require("prettier/parser-markdown"),
  require("prettier/parser-meriyah"),
  require("prettier/parser-postcss"),
  require("prettier/parser-typescript"),
  require("prettier-plugin-java"),
];

export const beautify = (code, language) => {

  if (language === "javascript" || language === "js")
    language = "babel";

  return prettier.format(code, {
    parser: language,
    plugins
  });
}
