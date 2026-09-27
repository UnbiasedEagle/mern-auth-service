// @ts-check

import eslint from '@eslint/js'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

export default defineConfig(
    {
        ignores: ['dist', 'coverage', 'node_modules', 'eslint.config.mjs'],
    },
    eslint.configs.recommended,
    tseslint.configs.recommended,
    {
        rules: {
            // 'no-console': 'error',
        },
    },
)
