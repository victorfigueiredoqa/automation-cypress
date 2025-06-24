describe('Adicionar ao carrinho a partir de itens recomendados', () => {

    beforeEach(() => {
        cy.acessarPagina()
    })

    it('Deve adionar produto ao carrinho a partir dos itens recomendados ao final da página', () => {
        cy.addCarrinhoItensSelecionados();

    })
})