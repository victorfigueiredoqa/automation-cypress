describe('Visualizar e colocar produtos da marca no carrinho', () => {

  beforeEach(() => {
    cy.acessarPagina()
  })

  it('Deve verificar se as marcas estão visíveis e adicionar no carrinho conforme marca', () => {
    cy.verificarHomePage();
    cy.visualizarAddProdutosMarcaCarrinho();
  })
})