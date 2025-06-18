describe('Funcionalidade para Buscar Produtos', () => {
    const PRODUTO = {
        nome: 'Men Tshirt',
        termoBusca: 'men tshirt'
    };
    
    beforeEach(() => {
        cy.acessarPagina();
    });

    it('Deve buscar por um produto e exibir resultados corretamente', () => {
        cy.verificarHomePage();
        cy.navegarParaProdutos();
        cy.buscarProduto(PRODUTO.termoBusca);
        cy.verificarProdutoEncontrado(PRODUTO.nome);
    });
});

