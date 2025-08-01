import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import customRules from './eslint-plugin-custom-rules/index.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: {
      'custom-rules': customRules,
    },
  },
  {
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-console': ['error', { allow: ['error'] }],
      'custom-rules/no-block-only-jsx-return': 'error',
    },
  },
];

export default eslintConfig;
