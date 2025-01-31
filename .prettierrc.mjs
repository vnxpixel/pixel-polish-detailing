/** @type {import("prettier").Config} */
export default {
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  endOfLine: 'lf',
  plugins: [
    'prettier-plugin-tailwindcss',
    'prettier-plugin-astro',
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
