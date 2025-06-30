describe('Verifica rolagem pra cima usando botão seta', () => {

  beforeEach(() => {
    cy.acessarPagina()
  })

  it('Deve rolar a página para baixo e para cima através do botão seta no canto inferior direito da página', () => {
    cy.verificarRolagemComBotao();
  })
})