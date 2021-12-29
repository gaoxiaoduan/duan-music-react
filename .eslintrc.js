module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended', 'alloy', 'alloy/react'],
  env: {
    // Your environments (which contains several predefined global variables)
    //
    browser: true,
    es2021: true,
  },
  globals: {
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
  },
  rules: {
    // Customize your rules
    'prefer-arrow-callback': 0, //比较喜欢箭头回调
    'arrow-parens': 0, //箭头函数用小括号括起来
    'arrow-spacing': 0, //=>的前/后括号
    'no-unused-vars': 0,
    'no-debugger': 2, //禁用debugger
    'react/jsx-key': 2, //在数组或迭代器中验证JSX具有key属性
    'max-params': 0, // 参数最大个数
    'no-param-reassign': 0, // 允许对参数重新赋值
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
