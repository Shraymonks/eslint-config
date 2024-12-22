import eslint from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';
import reacteslint from '@eslint-react/eslint-plugin';
import tseslint from 'typescript-eslint';

export const base = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  prettier,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.{c,m,}js'],
          defaultProject: './tsconfig.json',
        },
      },
    },
  },
  {
    files: ['**/*.{c,m,}js'],
    extends: [tseslint.configs.disableTypeChecked],
  },
);

export const browser = tseslint.config(...base, {
  languageOptions: {
    globals: globals.browser,
  },
});

export const node = tseslint.config(...base, {
  languageOptions: {
    globals: globals.node,
  },
});

export const react = tseslint.config(...browser, {
  files: ['**/*.{ts,tsx}'],
  ...reacteslint.configs['recommended-type-checked'],
});
