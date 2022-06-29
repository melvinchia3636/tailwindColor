/* eslint-disable global-require */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{jsx,json}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
