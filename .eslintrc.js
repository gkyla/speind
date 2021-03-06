module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/vue3-essential", "@vue/airbnb"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "linebreak-style": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "max-len": "off",
    "no-multiple-empty-lines": "off",
    'vue/comment-directive' : 'off',
    'no-unused-vars' : 'warn',
    'import/prefer-default-export' : 'off'
  }
};
