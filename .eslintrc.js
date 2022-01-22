module.exports = {
    env: {
        node: true,
        es6: true,
    },
    ignorePatterns: ["*.sass", "*.scss", "*.css"],
    extends: 'eslint:recommended',
    globals: {
        customElements: true,
        HTMLElement: true,
        CustomEvent: true,
        document: true,
        getComputedStyle: true,
    },
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
    },
    rules: {
        'no-console': 0,
        'no-multiple-empty-lines': [1, {max: 2}],
    },
};
