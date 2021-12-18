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
    'prefer-arrow-callback': 0,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
