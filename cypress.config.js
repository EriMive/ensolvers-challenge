const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '2eth9c',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
