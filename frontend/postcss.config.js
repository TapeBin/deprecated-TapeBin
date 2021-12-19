module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(false === true ? { cssnano: {} } : {})
  },
}
