module.exports = {
  extends: ['@nuxtjs/eslint-config-typescript'],
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    'space-before-function-paren': [
      'error',
      {
        named: 'never',
        asyncArrow: 'always',
        anonymous: 'always',
      },
    ],
    semi: ['error', 'always'],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never',
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never', // img & input
          normal: 'never', // empty div, span, etc
          component: 'always', // no-slot components
        },
      },
    ],
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: [
          'router-link',
          'b',
          'span',
          'strong',
          'sup',
          'sub',
          'em',
          'i',
          'a',
        ],
      },
    ],
    'max-len': [
      'error',
      {
        code: 300,
        ignorePattern: 'd="([\\s\\S]*?)"', // svg path d=".."
      },
    ],
    'no-return-assign': ['error', 'except-parens'],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
  },
};
