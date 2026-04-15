import baseConfig from '@acme/config-eslint'
import reactConfig from '@acme/config-eslint/react'

const withFiles = (configs, files) => configs.map((config) => ({ ...config, files }))

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['**/dist/**', '**/node_modules/**', '**/.turbo/**', '**/*.d.ts'],
  },
  ...withFiles(baseConfig, ['apps/api/**', 'packages/shared/**']),
  ...withFiles(reactConfig, ['apps/web/**', 'packages/ui/**']),
]
