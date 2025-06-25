describe('Registrar Usuário', () => {
    const USUARIO = {
        nome: `Usuario_${Cypress._.random(1, 1000)}`,
        email: `email_${Cypress._.random(1, 1000)}@gmail.com`,
        senha: '654321'
    };
    
    beforeEach(() => {
        cy.acessarPagina();
    });
    
    it('Deve incluir e excluir usuário com sucesso', () => {
        cy.verificarHomePage();
        cy.navegarParaLogin();
        cy.preencherCadastro(USUARIO.nome, USUARIO.email, USUARIO.senha);
        cy.verificarCadastroSucesso();
        cy.verificarLoginSucesso(USUARIO.nome);
    });
});