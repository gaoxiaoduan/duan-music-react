module.exports = {
  extends: ['alloy', 'alloy/react'],
  env: {
    // Your environments (which contains several predefined global variables)
    //
    browser: true,
    node: true,
    mocha: true,
    jest: true,
    // jquery: true
  },
  globals: {
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
  },
  rules: {
    // Customize your rules
    // "@typescript-eslint/explicit-member-accessibility": 0,
    // "@typescript-eslint/explicit-function-return-type": 0
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
