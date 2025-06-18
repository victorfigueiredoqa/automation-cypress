describe('Login com sucesso', () => {
    const NOME_USUARIO = 'Usuario_324';

    beforeEach(() => {
        cy.acessarPagina();
    });

    it('Deve logar e excluir usuário com sucesso', () => {
        cy.verificarHomePage();
        cy.navegarParaLogin();
        
        const email = Cypress.env('email');
        const senha = Cypress.env('senha');
        
        cy.preencherLogin(email, senha);
        cy.verificarLoginSucesso(NOME_USUARIO);
        cy.excluirConta();
    });
});
