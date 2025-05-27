class ProdutosPage {
  acessarPaginaProdutos() {
    cy.get('a[href="/products"]').click();
  }

  validarPaginaProdutosVisivel() {
    cy.contains('All Products').should('be.visible');
  }

  buscarProduto(produto) {
    cy.get('#search_product').should('be.visible').type(produto);
    cy.get('#submit_search').click();
  }

  validarResultadoBusca(nomeProduto) {
    cy.contains('Searched Products').should('be.visible');
    cy.contains(nomeProduto).should('be.visible');
  }

  acessarPrimeiroProduto() {
    cy.get('.product-image-wrapper')
      .first()
      .find('a[href^="/product_details"]')
      .click();
  }
}

export default new ProdutosPage();
