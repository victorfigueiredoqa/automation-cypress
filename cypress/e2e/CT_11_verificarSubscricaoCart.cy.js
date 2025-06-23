describe('Funcionalidade: Subscrição na página do carrinho', () => {
    const EMAIL_SUBSCRICAO = 'victorfernando.bsi@gmail.com';

    beforeEach(() => {
        cy.acessarPagina();
    });

    it('Deve acessar subscrição na página de carrinho e efetuar o registro', () => {
        cy.verificarHomePage();
        cy.realizarSubscricaoCart(EMAIL_SUBSCRICAO);
        cy.verificarSubscricaoSucesso();
    });
});