module.exports = {
  plugins: ["@typescript-eslint", "prettier", "import"],
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "prettier/react"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true
      }
    ]
  },

  overrides: [
    {
      files: ["**/*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off"
      }
    }
  ],
  env: {
    jest: true
  }
};
