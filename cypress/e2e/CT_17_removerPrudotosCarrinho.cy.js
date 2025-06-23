describe('Remover produtos ao carrinho', () => {

  beforeEach(() => {
    cy.acessarPagina()
  })

  it('Deve adicionar produtos ao carrinho, verificar página e remover produtos', () => {
    cy.verificarHomePage();
    cy.addProdutoCarrinho();
    cy.removerProdutos();
  })
})
