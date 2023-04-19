// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

// -- This is a parent command -- função customizado, nome do metódo login
// FORMA AUTOMATICA DE FAZER LOGIN 
Cypress.Commands.add('login1', (usuario, senha) => {
  // login e senha, botão login
  cy.get('#username').type(usuario)
  cy.get('#password').type(senha)
  cy.get('.woocommerce-form > .button').click()


})

//OUTRA AUTOMATICA FORMA DE FAZER LOGIN 
Cypress.Commands.add('login', (usuario, senha) => {
  // login e senha, botão login
  cy.get('[data-test="username"]').type(usuario)
  cy.get('[data-test="password"]').type(senha)
  cy.get('[data-test="login-button"]').click()
  // verificando elemento foto
  cy.get('#item_3_img_link > .inventory_item_img').should('be.visible')

})

Cypress.Commands.add('adicionarProduto', (produto) => {

  // adicionando um produto utilizando o nome, clicando no botão adicionar, voltando para a lista de produtos
  cy.contains(produto).click()
  // como se trata de uma class é utilizado ponto antes, caso fosse um id seria #
  cy.get('.btn_primary').click()
  cy.get('[data-test="back-to-products"]').click()

})

Cypress.Commands.add('cadastroUsuario', (nome, sobrenome, cep) => {
  // cadastro
  cy.get('[data-test="firstName"]').type(nome)
  cy.get('[data-test="lastName"]').type(sobrenome)
  cy.get('[data-test="postalCode"]').type(cep)
  cy.get('[data-test="continue"]').click()
  cy.get('[data-test="finish"]').click()

})

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })