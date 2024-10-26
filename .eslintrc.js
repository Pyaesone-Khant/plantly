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
        endOfLine: "auto"
      },
    ],
    "react-native/no-unused-styles": "error",
  },
};
