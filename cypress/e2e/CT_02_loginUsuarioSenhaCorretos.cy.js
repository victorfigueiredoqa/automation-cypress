describe('Login com sucesso', () => {
    const idUnico = `${Cypress._.random(1, 10000)}_${Date.now()}`;
    const USUARIO = {
        nome: `Teste_${idUnico}`,
        email: `teste_${idUnico}@teste.com.br`,
        senha: '123456'
    };


    beforeEach(() => {
        cy.acessarPagina();
        cy.verificarHomePage();
    });

    it('Deve logar e excluir usuário com sucesso', () => {
        cy.navegarParaLogin();
        cy.preencherCadastro(USUARIO.nome, USUARIO.email, USUARIO.senha);
        cy.get('[data-qa="continue-button"]').click();
        cy.verificarLoginSucesso(USUARIO.nome);
        cy.realizarLogout();
        cy.navegarParaLogin();
        cy.preencherLogin(USUARIO.email, USUARIO.senha);
        cy.verificarLoginSucesso(USUARIO.nome);
        cy.excluirConta();
    });
});
