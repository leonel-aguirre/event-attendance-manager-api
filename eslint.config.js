import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
      },
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...eslintConfigPrettier.rules,
      'prettier/prettier': 'error',
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'no-console': 'warn',
    },
    ignores: ['**/node_modules/**', '**/dist/**', '**/build/**'],
  },
]
