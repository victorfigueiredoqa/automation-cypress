describe('Página de Test Cases', () => {

    beforeEach(() => {
        cy.acessarPagina();
    })

    it('Deve validar o acesso a página de test cases', () => {
        cy.verificarHomePage();
        cy.navegarParaTestCases();
        cy.verificarPaginaTestCases();
    });
});

