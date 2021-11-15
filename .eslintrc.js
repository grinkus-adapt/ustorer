/* eslint-disable quotes,no-undef */
module.exports = {
  extends: ['eslint-config-react-app', 'eslint-config-prettier'],
  plugins: ['eslint-plugin-prettier'],
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'eol-last': ['error', 'always'],
    'linebreak-style': ['error', 'unix'],
    'no-alert': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 2 }],
    'prettier/prettier': 'error',
    quotes: ['error', 'backtick'],
    'react/jsx-no-target-blank': [`error`, { allowReferrer: true }],
  },
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
};
