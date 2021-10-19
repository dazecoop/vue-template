module.exports = {
  extends: [
    "plugin:vue/base",
    "plugin:vue/recommended",
  ],
  rules: {
    'max-len': ["error", { "code": 100 }], // Max line length 100 characters
    'quotes': ["error", "single"], // Prefer single quotes where possible
    "indent": ["error", 2], // Enforce indentation to 2 space-tabs
    "vue/html-self-closing": 0, // Prefer self-closing tags
  }
}
