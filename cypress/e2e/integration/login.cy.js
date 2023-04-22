/* Automatizando login
   teste no site: http://lojaebac.ebaconline.art.br/
   user: aluno_ebac@teste.com
   pass: teste@teste.com 

   comando only para executar somente aquele teste
*/ 

/// <reference types="cypress" />

//const { it } = require("mocha");
//esta configuração é para utilizar o parametro que esta em outras pasta, login
//import { usuario, senha } from '..fixtures/perfil.json'; 

describe('Funcionaliade Login', () => {
    // diminuindo a quantiddade de repetições, mesmo link utilizado em dois lugares
    // cenário ou rotina que roda antes de todos os cenários
    beforeEach(() => {
        //otimanzando o acesso para uma configuração global, 
        //arquivo utilizado cypress.config.js
        // pois é sempre o mesmo link para este teste http://lojaebac.ebaconline.art.br
        cy.visit('minha-conta/')
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

    //usando o arquivo que esta no fixtures perfil.json
    it('Deve fazer login com sucesso - Usando arquivo de dados', () => {
        cy.get('#username').type('usuario')
        cy.get('#password').type('senha', {log: false})
        cy.get('#rememberme').click()
        cy.get('.woocommerce-form > .button').click()

        //após fazer o login, peguei um campo para validar o "acesso"
        cy.get('.page-title').should('contain', 'Minha conta')
    });

// TESTE NÃO ESTA FNCIONANDO! NÃO SEI PORQUE AINDA    

    //outra forma de fazer login, utilizando a configuração do fixture
    it('Deve fazer login com sucesso - Usando fixture', () => {
        //para garantir o uso do parametro, esta sendo criado uma nova vairavel
        cy.fixture('perfil.json').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('#rememberme').click()
            cy.get('.woocommerce-form > .button').click()
    
            cy.get('.page-title').should('contain', 'Minha conta')
        })
            
    });

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