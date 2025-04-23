const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    experimentalRunAllSpecs:true,
    setupNodeEvents(on, config) {
      // add Mochawesome reporter      
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    specPattern: 'cypress/e2e/**/*.cy.js',
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome', 
    overwrite: false,
    html: true,
    json: true,
    embeddedScreenshots: true,
    inlineAssets: true
  },
});