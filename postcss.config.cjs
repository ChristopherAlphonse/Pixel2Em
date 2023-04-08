module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(import.meta.NODE_ENV === 'production' ? { cssnano: {} } : {})
  }
};
