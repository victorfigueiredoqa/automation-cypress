describe('Fazer pedido: registrar durante a finalização da compra', () => {
    const USUARIO = {
        nome: `Usuario_${Cypress._.random(1, 1000)}`,
        email: `email_${Cypress._.random(1, 1000)}@gmail.com`,
        senha: '654321'
    };

    beforeEach(() => {
        cy.acessarPagina()
    })

    it('Deve adicionar produtos ao carrinho e se registrar durante a finalização da compra', () => {
        cy.verificarHomePage();
        cy.addProdutoCarrinho();
        cy.registrarFinalizandoCompra(USUARIO.nome, USUARIO.email, USUARIO.senha);
    })
})
