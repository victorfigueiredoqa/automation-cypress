describe('Pesquisar produtos e verificar carrinho', () => {

  beforeEach(() => {
    cy.acessarPagina()
  })

  it('Deve pesquisar por produtos e verificar o carrinho após o login', () => {
    cy.verificarHomePage();
    cy.pesquisarProdutosVerificarCarrinho();
    cy.navegarParaLogin();
    cy.preencherLogin(Cypress.env('email'), Cypress.env('senha'));
    cy.verificarCarrinho();
  })
})