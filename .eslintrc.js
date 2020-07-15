const path = require("path")

module.exports = {
  env: {
    es6: true,
  },
  extends: [
    "standard",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/babel",
    "prettier/standard",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {},
    ecmaVersion: 2018,
    project: path.resolve(__dirname, "./tsconfig.json"),
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "babel", "prettier", "standard"],
  rules: {
    "quote-props": ["error", "as-needed"],
    "object-shorthand": ["error", "always"],
    "no-var": ["error"],
    "no-void": ["off"],
    "no-console": [
      "warn",
      {
        allow: ["warn", "error", "info"],
      },
    ],
    "prettier/prettier": ["error"],
  },
}
