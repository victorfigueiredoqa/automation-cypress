describe('Verifica rolagem para baixo e para cima', () => {

  beforeEach(() => {
    cy.acessarPagina()
  })

  it('Deve rolar a página para baixo e para cima sem utilizar o botão seta no canto inferior direito da página', () => {
    // Teste
    cy.verificarRolagemSemBotao();
  })
})