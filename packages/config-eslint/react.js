import reactHooksPlugin from 'eslint-plugin-react-hooks'
import baseConfig from './index.js'

export default [
  ...baseConfig,
  {
    plugins: {
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
    },
  },
]
