/// <reference types="cypress"/>

describe('Teste de ponta a ponta em Saucelabs', () => {
    beforeEach( () => {
        // acessando o site, para o teste https://www.saucedemo.com/
          cy.visit('/')
    })

    it('Deve fazer o pedido de ponta a ponta', () => {

         // login e senha, botão login, executado por função
         cy.login('standard_user' , 'secret_sauce')

        //cy.get('[data-test="username"]').type('standard_user')
        //cy.get('[data-test="password"]').type('secret_sauce')     
        //cy.get('[data-test="login-button"]').click()
        // verificando elemento foto
        //cy.get('#item_3_img_link > .inventory_item_img').should('be.visible')

        // adicionando um produto utilizando o nome, clicando no botão adicionar, voltando para a lista de produtos
        cy.adicionarProduto('Sauce Labs Backpack')
        cy.adicionarProduto('Sauce Labs Bike Light')
        cy.adicionarProduto('Sauce Labs Fleece Jacket') 

        // clicar no carrinho, depois checkout
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()

        // cadastro
        cy.cadastroUsuario('Alex', 'Rocha', '13465-000')

        // resultado esperado
        cy.get('.complete-header').should('contain','Thank you for your order!')

    });
    
});