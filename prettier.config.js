module.exports = {
  arrowParens: "always",
  endOfLine: "auto",
  proseWrap: "always",
  trailingComma: "all",
  semi: false,
  overrides: [
    {
      files: "*.js",
      options: {
        parser: "babel",
      },
    },
    {
      files: "*.md",
      options: {
        parser: "markdown",
      },
    },
    {
      files: "*.ts",
      options: {
        parser: "typescript",
      },
    },
  ],
}
