module.exports = {
  env: {
    es6: true,
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: ["airbnb-base", "plugin:json/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["prettier"],
  root: true,
  globals: {
    moment: "readonly"
  },
  rules: {
    "default-case": "off",
    "global-require": "off",
    "prefer-destructuring": "off",
    "prettier/prettier": "error",
    "import/no-dynamic-require": "off",
    "import/no-unresolved": "off",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-prototype-builtins": "off"
  }
};
