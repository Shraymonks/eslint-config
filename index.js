import eslint from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';
import react from '@eslint-react/eslint-plugin';
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
          allowDefaultProject: ['*.js'],
          defaultProject: './tsconfig.json',
        },
      },
    },
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
  ...react.configs['recommended-type-checked'],
});
