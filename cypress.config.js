const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    //baseUrl: 'https://www.saucedemo.com'
    "baseUrl": 'http://lojaebac.ebaconline.art.br/'
  },
});