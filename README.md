# @shraymonks/eslint-config

My eslint config.

## Installation

```console
pnpm add -D @shraymonks/eslint-config
```

## Usage

Add to your `eslint.config.js`:

```js
import { base } from '@shraymonks/eslint-config';

export default [
  ...base,
];
```

## Available configs

- `base`
- `browser`
- `node`
- `react`
