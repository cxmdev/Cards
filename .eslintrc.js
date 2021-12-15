/*module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        "ecmaVersion": 2020,
        "ecmaFeatures": {
            jsx: true,
            parser: '@babel/eslint-parser',
            ecmaVersion: 6,
            ecmaFeatures: {
                experimentalObjectRestSpread: true,
            },
        },
        ecmaVersion: 13,
        sourceType: 'module',
    },
    plugins: ['react',],
    rules: {},
};
*/
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        ecmaVersion: 2020,
        ecmaFeatures: {
            jsx: true,
            parser: '@babel/eslint-parser',
            ecmaVersion: 6,
            ecmaFeatures: {
                experimentalObjectRestSpread: true,
            },
        },
        ecmaVersion: 13,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {},
};
