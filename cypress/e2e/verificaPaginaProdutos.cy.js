import ProdutosPage from '../support/pages/ProdutosPage';
import DetalhesProdutoPage from '../support/pages/DetalhesProdutoPage';

describe('Funcionalidade: Visualização de detalhes de um produto', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve acessar um produto e validar os detalhes apresentados', () => {
    cy.contains('Full-Fledged practice website for Automation Engineers')
      .should('be.visible');

    ProdutosPage.acessarPaginaProdutos();
    ProdutosPage.validarPaginaProdutosVisivel();
    ProdutosPage.acessarPrimeiroProduto();

    DetalhesProdutoPage.validarDetalhesProdutoVisiveis();
  });
});
