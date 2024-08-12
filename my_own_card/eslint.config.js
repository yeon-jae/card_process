// eslint.config.js
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import reactApp from 'eslint-config-react-app'
import prettier from 'eslint-plugin-prettier'

const compat = new FlatCompat({
  baseDirectory: __dirname, // 현재 디렉토리 경로
  resolvePluginsRelativeTo: __dirname, // 현재 디렉토리에서 플러그인 해석
})

export default [
  js.configs.recommended,
  ...compat.extends(
    'react-app',
    'react-app/jest',
    'plugin:prettier/recommended',
  ),
  {
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
]
