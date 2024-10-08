import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import jest from 'eslint-plugin-jest';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  {
    ignores: ['dist/'],
  },
  {
    files: [
      'src/**/*.{js,mjs,cjs,ts,jsx,tsx} tests/**/*.{js,mjs,cjs,ts,jsx,tsx}',
    ],
  },
  { files: ['**/*.js'], languageOptions: { sourceType: 'module' } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ['tests/**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ...jest.configs['flat/recommended'],
    rules: {
      ...jest.configs['flat/recommended'].rules,
      'jest/prefer-expect-assertions': 'off',
    },
  },
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      quotes: ['error', 'single'], // Accepter les single quotes
      'prettier/prettier': ['error', { singleQuote: true }],
    },
  },
  eslintPluginPrettierRecommended,
];
