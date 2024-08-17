module.exports = {
  extends: [
    'eslint:recommended',
    'react-app',
    'react-app/jest',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: ['prettier', 'react',  'import'],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        // TypeScript 경로 설정이 포함된 파일을 참조합니다.
        project: './tsconfig.paths.json',
      },
    },
  },
};
