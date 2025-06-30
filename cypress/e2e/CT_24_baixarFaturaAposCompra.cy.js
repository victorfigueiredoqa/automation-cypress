describe('Baixar fatura após pedido de compra', () => {
    const USUARIO = {
        nome: `Usuario_${Cypress._.random(1, 1000)}`,
        email: `email_${Cypress._.random(1, 1000)}@gmail.com`,
        senha: '654321'
    };
    beforeEach(() => {
        cy.acessarPagina()
        cy.verificarHomePage();
        cy.addProdutoCarrinho();
        cy.get('.btn.check_out').click();
        cy.get('a[href*="/login"]').contains('Register / Login').click();
    })

    it('Deve fazer um pedido de compra e depois baixar a fatura', () => {
        cy.registrarAntesDeFinalizarCompra(USUARIO.nome, USUARIO.email, USUARIO.senha);
        cy.finalizarCompraBaixarFaturaExcluirConta();
    })
})