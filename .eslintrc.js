module.exports = {
  extends: ["airbnb", "prettier", "prettier/react"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      // What do I do with this?
      // Remove it? https://eslint.org/docs/user-guide/migrating-to-2.0.0
      impliedStrict: true,
      classes: true
    }
  },
  env: {
    browser: true,
    node: true
  },
  rules: {
    "no-restricted-syntax": [
      2,
      "ForInStatement",
      "LabeledStatement",
      "WithStatement"
    ],
    "no-unused-vars": [
      1,
      {
        ignoreRestSiblings: false,
        argsIgnorePattern: "res|next|stage|^err"
      }
    ],
    "arrow-body-style": [2, "as-needed"],
    "no-param-reassign": [
      2,
      {
        props: false
      }
    ],
    "no-unused-expressions": [
      1,
      {
        allowTaggedTemplates: true
      }
    ],
    "no-console": "warn",
    "no-underscore-dangle": 0,
    "no-await-in-loop": 0,
    "linebreak-style": 0,
    "consistent-return": 0,
    "import/no-unresolved": 1,
    import: 0,
    "func-names": 0,
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "space-before-function-paren": 0,
    "import/extensions": 0,
    "react/display-name": 1,
    "react/react-in-jsx-scope": 0,
    "react/forbid-prop-types": "warn",
    "react/no-unescaped-entities": 0,
    "jsx-a11y/accessible-emoji": 0,
    "no-return-assign": ["error", "always"],
    radix: 0,
    "comma-dangle": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"]
      }
    ],
    "no-shadow": [
      2,
      {
        hoist: "all",
        allow: ["resolve", "reject", "done", "next", "err", "error"]
      }
    ],
    quotes: [
      2,
      "single",
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        semi: false,
        singleQuote: true,
        printWidth: 100
      }
    ],
    // Turn off for now maybe?
    // Related issues: https://github.com/airbnb/javascript/issues/1474, https://github.com/facebook/create-react-app/issues/2631
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        aspects: ["invalidHref"]
      }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  plugins: ["prettier", "react-hooks"]
};
