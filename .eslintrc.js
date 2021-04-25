module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:jest/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [0],
    'import/no-unresolved': [0],
    'import/extensions': [0],
    'import/no-absolute-path': [0],
    'no-plusplus': [0],
    'vue/no-multiple-template-root': [0],
    // 不允给参数重新赋值
    'no-param-reassign': [0],
    'no-console': [0],
    // 涉及到工作区 未能检测到 忽略这个提醒
    'import/no-extraneous-dependencies': [0],
    // 函数未被调用 对应这种表达式cb && cb()会报错
    'no-unused-expressions': [2, { allowShortCircuit: true }]
  }
}
