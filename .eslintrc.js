module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["prettier", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    quotes: [
      "error",
      "double",
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    // suppress errors for missing 'import React' in files
    "react/react-in-jsx-scope": "off",
    // allow jsx syntax in js files (for next.js project)
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/prop-types": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/anchor-has-content": "off",
  },
};
