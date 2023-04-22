/// <reference types="cypress" />

//importantando o elemento criado em page-objects, o segundo importe é sobre o fixtures massa de dados
import EnderecoPage from "../../support/page-objects/endereco.page"
import dadosEndereco from "../../fixtures/endereco.json"
import dadosEnderecoEntrega from "../../fixtures/enderecoentrega.json"

describe('Funcionalidade Endereço - Faturamento e Entrega', () => {
    beforeEach(() => {
        //utilizando a URL base, acessando o / minha-conta, depois fazer o login
        // utilizando automação que foi criado em cperfil
        cy.visit('minha-conta')
        cy.fixture('perfil.json').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, { log: false })
            cy.get('#rememberme').click()
            cy.get('.woocommerce-form > .button').click()
        })
    });

    it('Deve fazer cadatro de faturamento com sucesso', () => {
        //utilizando o page-objects endereco.page.js para editar a pagina
        EnderecoPage.editarEnderecoFaturamento('João', 'Silva', 'EBAC ME', 'Brasil', 'rua 9', '22', 'Natal', 'Alagoas', '0000-0000', '8888-8888', 'teste.1@teste.com')
        //resultado esperado "mensagem de confirmação" 
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

    it('Deve fazer cadatro de faturamento com sucesso - Usando arquivo de dados', () => {
        //utilizando o fixtures endereco.js outra forma de fazer cadastro
        EnderecoPage.editarEnderecoEntrega(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].pais,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email
        )
        //resultado esperado "mensagem de confirmação" 
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
    it('Deve alterar cadastro dados de entrega - Usando arquivo de dados', () => {
        //utilizando o fixtures endereco.js outra forma de fazer cadastro
        EnderecoPage.editarEnderecoEntrega(
            dadosEnderecoEntrega[1].nome,
            dadosEnderecoEntrega[1].sobrenome,
            dadosEnderecoEntrega[1].empresa,
            dadosEnderecoEntrega[1].endereco,
            dadosEnderecoEntrega[1].numero,
            dadosEnderecoEntrega[1].pais,
            dadosEnderecoEntrega[1].cidade,
            dadosEnderecoEntrega[1].estado,
            dadosEnderecoEntrega[1].cep
        )
        //resultado esperado "mensagem de confirmação" 
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});