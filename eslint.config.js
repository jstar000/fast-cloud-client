import js from '@eslint/js';
import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['node_modules', 'dist', 'build', '.vite', '*.config.js'],
  },
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node, // Node.js globals for config files
      },
      sourceType: 'module',
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      // React 19+ doesn't require React import
      'react/react-in-jsx-scope': 'off',

      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // React Refresh (Vite HMR)
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // TypeScript rules
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],

      /**=== 변수/스코프 === */
      'no-var': 'error', // var 사용 금지 (필수)
      'prefer-template': 'error', // 문자열 조합 백틱 사용 (필수)
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // 사용하지 않는 변수 (경고)
      'no-undef': 'error', // 정의되지 않은 변수 사용 금지 (필수)

      /**=== 함수 === */
      'prefer-arrow-callback': 'warn', // 화살표 사용 권장 (경고)
      'no-empty-function': 'error', // 빈 함수 금지 (필수)
      'no-param-reassign': 'error', // 파라미터 재할당 금지 (필수)

      /**=== 모듈 ===*/
      'import/first': 'error', // import문 최상단 위치 (필수)
      'import/no-duplicates': 'error', // 중복 import 금지 (필수)
      'import/prefer-default-export': 'warn', // 단일 export시, 'default export' 권장

      /**=== 기타 ===*/
      'no-console': ['warn', { allow: ['warn', 'error'] }], // console.log() 경고. 그 외 허용
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  prettier,
];
