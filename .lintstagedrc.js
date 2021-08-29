module.exports = {
  'src/**/*.{js,jsx,ts,tsx,json}': ['eslint --fix'],
  'src/**/*.{css,scss,js,jsx,ts,tsx}': ['stylelint --fix'],
  'src/**/*.{js,jsx,ts,tsx,json,css,scss,md}': ['prettier --write'],
};
