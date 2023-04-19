/// <reference types="cypress" />

describe('Funcionalidade Endereço - Faturamento e Entrega', () => {
    beforeEach(() => {
        //utilizando a URL base, acessando o / minha-conta, depois fazer o login
        // utilizando automação que foi criado em cperfil
        cy.visit('minha-conta')
        cy.fixture('perfil.json').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('#rememberme').click()
            cy.get('.woocommerce-form > .button').click()
        })
    });

    it('Deve fazer cadatro de faturamento com sucesso', () => {
       
    });
});