// postcss.config.mjs
export default {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')({
      config: './tailwind.config.js',
    }),
    require('autoprefixer'),
  ],
};