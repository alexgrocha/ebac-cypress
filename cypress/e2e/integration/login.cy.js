/// <reference types="cypress" />


describe('Funcionaliade Login', () => {
    // diminuindo a quantiddade de repetições, memso link utilizado em dois lugares
    // cenário ou rotina que roda antes de todos os cenários
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => { 
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('#rememberme').click()
        cy.get('.woocommerce-form > .button').click()

        //após fazer o login, peguei um campo para validar o "acesso"
        cy.get('.page-title').should('contain', 'Minha conta')
    })
    // obs: depois o comando it pode ser adicionado o .only isso ira fazer executar apenas aquele teste
    it('Deve exibir uma mensagem de erro ao inserir usuário inválidos!', () => {
        cy.get('#username').type('alex@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('#rememberme').click()
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')        
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário ou senha inválidos!', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.')
        cy.get('#rememberme').click()
        cy.get('.woocommerce-form > .button').click()
        
        //verificando qual o retorno
        cy.get('.woocommerce-error > li').should('contain', 'Erro: a senha fornecida para o e-mail')
    })
})

// teste no site: http://lojaebac.ebaconline.art.br/
// user: aluno_ebac@teste.com
// pass: teste@teste.com 