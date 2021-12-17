const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    mode: "jit",
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme("colors.gray.100"),
                        maxWidth: "100%",
                        h1: {
                            color: theme("colors.gray.100"),
                            paddingBottom: ".3em",
                            borderBottom: "1px solid hsla(0,0%,100%,0.05)"
                        },
                        h2: {
                            color: theme("colors.gray.100"),
                            paddingBottom: ".3em",
                            borderBottom: "1px solid hsla(0,0%,100%,0.05)"
                        },
                        h3: {
                            color: theme("colors.gray.100")
                        },
                        p: {
                            color: theme("colors.gray.300")
                        },
                        li: {
                            color: theme("colors.gray.300")
                        },
                        strong: {
                            color: theme("colors.gray.300")
                        },
                        a: {
                            color: "#3cb1ff"
                        },

                    }
                }
            }),
            fontFamily: {
                sans: ["Roboto", ...defaultTheme.fontFamily.sans, "Lobster"],
                lobster: ["Lobster", "Roboto", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                gray: colors.trueGray,
                proColor: "#00C2FF",
                proHoverColor: "#00a7db",
                proFocusColor: "#009ccc",
                background: "#262626",
                binColor: "#309CFF"
            },
            outline: {
                gray: "1px solid #F5F5F5",
            },
        },
    },
    variants: {
        extend: {
            textColor: ["disabled"]
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require("@tailwindcss/typography")
    ],
};
