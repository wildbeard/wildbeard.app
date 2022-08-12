module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
  ],
  //settings: {
  //  'import/resolver': {
  //    'eslint-import-resolver-custom-alias': {
  //      alias: {
  //        '@': path.resolve(__dirname, './src'),
  //      },
  //      extensions: [
  //        '.js',
  //        '.vue',
  //      ],
  //    },
  //  },
  //},
  overrides: [
    {
      files: [
        "src/pages/**/*.vue",
      ],
      rules: {
        "vue/multi-word-component-names": "off",
      },
    },
  ],
  rules: {
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
        ignores: ['router-link', 'b', 'span', 'strong', 'sup', 'sub', 'em', 'i', 'a'],
      },
    ],
    'max-len': [
      'error',
      {
        code: 300,
        ignorePattern: 'd="([\\s\\S]*?)"', // svg path d=".."
      },
    ],
    'no-return-assign': [
      'error',
      'except-parens',
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
  },
};
