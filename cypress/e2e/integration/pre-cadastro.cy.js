/// <reference types="cypress" />

/*bibliotica para dados fake, necessário instalar antes*/
var faker = require('faker');

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve completar o pré cadastro de sucesso', () => {
        // criando variavel 13/05/23 para completar o cadastro com dados fake
        let nomeFaker = faker.name.firstName()
        // no momento de completar o cadastro apenas para teste podemos colocar o inicio do nome para completar o email
        let sobrenomeFaker = faker.name.lastName(nomeFaker)
        let emailFaker = faker.internet.email()


        //primeira parte do cadastro, email,senha e botão cadastrar
        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type(faker.internet.password())
        cy.get(':nth-child(4) > .button').click()
        //segunda parte botão, detalhes e confirmas os campos dos cadastro
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        // o lestName não esta funcionando, por isso dexei como firstName
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    });
});