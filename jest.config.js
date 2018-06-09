module.exports = {
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  collectCoverageFrom: [
    '**/js/**/*.jsx',
    '**/js/**/*.js',
    '!**/js/**/ClientApp.jsx',
    '!**/js/**/utils.jsx',
  ],
}
