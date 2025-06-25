describe('Fazer pedido: registrar antes de finalizar a compra', () => {
    const USUARIO = {
        nome: `Usuario_${Cypress._.random(1, 1000)}`,
        email: `email_${Cypress._.random(1, 1000)}@gmail.com`,
        senha: '654321'
    };

    beforeEach(() => {
        cy.acessarPagina();
    });

    it('Deve fazer registro, adicionar produtos ao carrinho e finalizar a compra', () => {
        cy.verificarHomePage();
        cy.registrarAntesDeFinalizarCompra(USUARIO.nome, USUARIO.email, USUARIO.senha);
        cy.addProdutoCarrinho();
        cy.finalizarCompraExcluirConta();
    });
});
