module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
    'prettier',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    'prettier',
  ],
  'rules': {
     "prettier/prettier": "error",
    "semi": 0,
    "react/prop-types": 0,
    "react/display-name": 0,
    "require-jsdoc": "warn"
  },
  settings: {
    react: {
      version: "detect"
    }
  },
};
