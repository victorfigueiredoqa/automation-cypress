describe('Página de Test Cases', () => {

    beforeEach(() => {
        cy.acessarPagina()
    })

    it('Deve validar o acesso a página de test cases', () => {
        cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');
        cy.contains('a[href="/test_cases"]', 'Test Cases').click();
        cy.get('h2.title.text-center b')
            .should('be.visible')
            .and('have.text', 'Test Cases');
    });
});

