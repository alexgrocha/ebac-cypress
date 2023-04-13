/// <reference types ="cypress" />

describe('Funcionalidade página de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos')
    });
    it('Deve selecionar um produto da lista', () => {
        //por se trata de um call antes deve conter um ponto >> . <<
        //se fosse uma id teria um 'jogo da velha' >> # <<
        //pode ser utilizado tbm cy.get('[class="product-block grid"]').first().click() ou id ou css por exemplo
        // para pegar o ultimos item last obs o last não esta funcionando
        cy.get('.product-block grid')
            //.last()
            //.eq(3)
            .contains('Abominable Hoodie')
            .click()
    });
    it.only('deve adicionar um produto ao carrinho', () => {
        // adicionando uma variavel, para a quantidade de intes no carrinho
        // incluido apenas para o teste
        var quantidade = 3
                                                        // buscando o produto pelo nome
        cy.get('[class="product-block grid"]').contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Blue').click()
        // antes de incluir a qtd, necessário limpar o campo
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        //verificando o resultado esperado
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        // para este teste vamos concatenar as informações..
        // por algum motivo, não esta dando certo ainda.. 12/04/23
        // identificado o prolema era espaço entre o x 13/04/23
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
        //cy.get('.woocommerce-message').contains('“Abominable Hoodie” foram adicionados no seu carrinho.')
    });
});