module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(true === true ? { cssnano: {} } : {})
  },
}
