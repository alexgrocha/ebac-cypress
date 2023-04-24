const { defineConfig } = require("cypress");

//adicioando configuração após visualizar o relatório no cypress
module.exports = defineConfig({
  projectId: 'qayjir',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    //baseUrl: 'https://www.saucedemo.com'
    "baseUrl": 'http://lojaebac.ebaconline.art.br/'
  },
});