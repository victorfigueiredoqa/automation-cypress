describe('Adicionar produtos ao carrinho', () => {

  beforeEach(() => {
    cy.acessarPagina()
  })

  it('Deve adicionar 2 produtos ao carrinho e verificar descrição, preço, quantidade e total', () => {
    cy.verificarHomePage();
    cy.addProdutoCarrinho();
  })
})
