module.exports = {
  extends: ['alloy', 'alloy/react'],
  env: {
    // Your environments (which contains several predefined global variables)
    //
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
  },
  rules: {
    // Customize your rules
    allowNamedFunctions: 0,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
