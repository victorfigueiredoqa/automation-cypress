describe('Exibir produtos por categoria', () => {

  beforeEach(() => {
    cy.acessarPagina()
  })

  it('Deve validar categorias na barra lateral esquerda e testar categoria mulheres', () => {
    cy.verificarHomePage();
    cy.exibirProdutosCategoria();
  })
})
