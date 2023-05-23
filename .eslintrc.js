module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'next',
    'next/core-web-vitals'
  ],
  rules: {
    'semi': ['error', 'always'], //regla que el ; sea obligatorio
    'prettier/prettier': 0, //ignorando la regla prettier
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'no-unused-vars': 'off',
    'semi': 'off'
  }
}
