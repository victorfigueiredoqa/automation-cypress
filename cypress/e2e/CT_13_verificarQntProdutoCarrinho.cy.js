describe('Verificar a quantidade do produto no carrinho', () => {

  beforeEach(() => {
    cy.acessarPagina()
  })

  it('Deve adicionar mais produtos ao carrinho e validar se quantidade está correta', () => {
    cy.verificarHomePage();
    cy.verificarQuantidade();
  })
})