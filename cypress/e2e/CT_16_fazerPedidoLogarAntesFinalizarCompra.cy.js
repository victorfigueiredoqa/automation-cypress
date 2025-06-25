describe('Fazer pedido: efetuar login antes de finalizar a compra', () => {
    const USUARIO = {
        nome: `Usuario_${Cypress._.random(1, 1000)}`,
        email: `email_${Cypress._.random(1, 1000)}@gmail.com`,
        senha: '654321'
    };

    beforeEach(() => {
        cy.acessarPagina();
        cy.navegarParaLogin();
        cy.preencherCadastro(USUARIO.nome, USUARIO.email, USUARIO.senha);
        cy.verificarCadastroSucesso(USUARIO.nome);
    });

    it('Deve fazer login, adicionar produtos ao carrinho e finalizar a compra', () => {
        cy.verificarHomePage();
        cy.logarVerificarUsuarioLogado(USUARIO.nome, USUARIO.email, USUARIO.senha);
        cy.addProdutoCarrinho();
        cy.finalizarCompraExcluirConta();
    });
});
