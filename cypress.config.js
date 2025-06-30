const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },

    baseUrl: 'https://automationexercise.com/',
    viewportWidth: 1920,
    viewportHeight: 1080
    
  },
});
