const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '2eth9c',
  e2e: {
    setupNodeEvents(on, config) {
      // implementa los listeners aquí
    },
    specPattern: 'cypress/e2e/**/*.cy.js',
  },
  video: true,
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },
  env: {
    baseUrl: 'https://qa-challenge.ensolvers.com',
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  browser: 'chrome',
  screenshotOnRunFailure: true,
})
