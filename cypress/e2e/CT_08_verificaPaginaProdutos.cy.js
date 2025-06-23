describe('Verifica página de produtos', () => {

    beforeEach(() => {
        cy.acessarPagina()
    })

    it('Deve acessar produto e validar detalhes', () => {
        cy.verificarHomePage();
        cy.navegarParaProdutos();
        cy.acessarDetalhesPrimeiroProduto();
        cy.verificarDetalhesProduto();
    });
});

