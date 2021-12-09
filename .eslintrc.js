module.exports = {
    env: {
        browser: true,
        jest: true,
        es6: true,
    },
    plugins: ["import"],
    extends: ["plugin:prettier/recommended"],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        "no-console": "warn",
        "no-eval": "error",
        "import/first": "error",
    },
};
/* env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
  },
};
 */
