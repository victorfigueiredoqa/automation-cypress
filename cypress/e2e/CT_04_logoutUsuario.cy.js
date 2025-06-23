describe('Logout de Usuário', () => {
    const NOME_USUARIO = 'Usuario_406';

    beforeEach(() => {
        cy.acessarPagina();
    });

    it('Deve realizar login e logout com sucesso', () => {
        cy.verificarHomePage();
        cy.navegarParaLogin();
        
        const email = Cypress.env('email');
        const senha = Cypress.env('senha');
        
        cy.preencherLogin(email, senha);
        cy.verificarLoginSucesso(NOME_USUARIO);
        cy.realizarLogout();
    });
});
