module.exports = {
  'src/**/*.{js,jsx,ts,tsx,json}': ['eslint --fix'],
  'src/**/*.{css,js,jsx,ts,tsx}': ['stylelint --fix'],
  'src/**/*.{js,jsx,ts,tsx,json,css,md}': ['prettier --write'],
};
