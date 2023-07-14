module.exports = {
    env: {
        es6: true,
        node: true
    },
    extends: [
        'eslint:recommended', 
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    plugins: [
        '@typescript-eslint',
        'prettier'
    ],
    rules: {
        'prettier/prettier': 'error',
        '@typescript-eslint/no-unused-vars': ['warn']
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2023,
        sourceType: 'module',
        project: './tsconfig.json'
    }
};

