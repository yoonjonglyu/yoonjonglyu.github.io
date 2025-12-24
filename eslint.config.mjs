// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

const eslintConfig = [...nextCoreWebVitals, ...nextTypescript, {
  rules: { 'storybook/no-renderer-packages': 'off' },
  ignores: [
    'node_modules/**',
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ],
}, ...storybook.configs['flat/recommended'], ...storybook.configs["flat/recommended"]];

export default eslintConfig;
