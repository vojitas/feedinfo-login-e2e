const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    specPattern: 'cypress/integration/*/*.spec.js',
    baseUrl: 'https://www.feedinfo.com'
  }
})