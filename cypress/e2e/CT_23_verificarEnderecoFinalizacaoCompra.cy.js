describe('Verificar endereço ao finalizar compra', () => {
    const USUARIO = {
        nome: `Usuario_${Cypress._.random(1, 1000)}`,
        email: `email_${Cypress._.random(1, 1000)}@gmail.com`,
        senha: '654321'
    };
    beforeEach(() => {
        cy.acessarPagina()
        cy.verificarHomePage();
        cy.registrarAntesDeFinalizarCompra(USUARIO.nome, USUARIO.email, USUARIO.senha);
        cy.addProdutoCarrinho();
    })

    it('Verificar detalhes do endereço na página de finalização da compra', () => {
        
        cy.verificaEnderecoFinalizarCompra();
    })
})