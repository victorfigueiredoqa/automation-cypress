describe('Logout de Usuário', () => {
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

    it('Deve realizar login e logout com sucesso', () => {
        cy.navegarParaLogin();
        cy.preencherCadastro(USUARIO.nome, USUARIO.email, USUARIO.senha);
        cy.get('[data-qa="continue-button"]').click();
        cy.verificarLoginSucesso(USUARIO.nome);
        cy.realizarLogout();
    });
});
