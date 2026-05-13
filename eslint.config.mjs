import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import { parser as tsParser, plugin as tsPlugin } from 'typescript-eslint';
import astro from 'eslint-plugin-astro';

export default defineConfig([
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/.astro/**'],
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
      eqeqeq: 'warn',
      semi: 'warn',
    },
  },
  {
    files: ['**/*.{ts,mts}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2017,
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      eqeqeq: 'warn',
      semi: 'warn',
      '@typescript-eslint/consistent-type-imports': 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
  ...astro.configs.recommended,
]);
