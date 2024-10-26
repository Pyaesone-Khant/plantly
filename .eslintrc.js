// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier", "react-native"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        parser: "flow",
        endOfLine: "auto",
        tabWidth: "4",
      },
    ],
    "react-native/no-unused-styles": "error",
  },
};
