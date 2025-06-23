describe('Funcionalidade: Subscrição ao final da página', () => {
    const EMAIL_SUBSCRICAO = 'victorfernando.bsi@gmail.com';

    beforeEach(() => {
        cy.acessarPagina();
    });

    it('Deve acessar subscrição ao final da página e efetuar o registro', () => {
        cy.verificarHomePage();
        cy.realizarSubscricao(EMAIL_SUBSCRICAO);
        cy.verificarSubscricaoSucesso();
    });
});