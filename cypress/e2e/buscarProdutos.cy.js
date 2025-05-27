import ProdutosPage from '../support/pages/ProdutosPage';

describe('Funcionalidade: Busca de Produtos', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve buscar e exibir o produto corretamente', () => {
    cy.contains('Full-Fledged practice website for Automation Engineers')
      .should('be.visible');

    ProdutosPage.acessarPaginaProdutos();
    ProdutosPage.validarPaginaProdutosVisivel();
    ProdutosPage.buscarProduto('men tshirt');
    ProdutosPage.validarResultadoBusca('Men Tshirt');
  });
});
