/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");
module.exports = {
  root: true,
  rules: {
    "prettier/prettier": ["error", { endOfLine: "off" }]
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
    "plugin:storybook/recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest"
  }
};
