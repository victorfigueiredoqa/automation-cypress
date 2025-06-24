describe('Adicionar avaliação ao produto', () => {

    beforeEach(() => {
        cy.acessarPagina()
    })

    it('Deve acessar determinado produto e efetuar avaliação', () => {
        cy.verificarHomePage();
        cy.avaliarProduto();
    })
})