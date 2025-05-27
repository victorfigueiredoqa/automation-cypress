class DetalhesProdutoPage {
  validarDetalhesProdutoVisiveis() {
    cy.get('.product-information > h2').should('be.visible');
    cy.get('.product-information p').contains('Category').should('be.visible');
    cy.get('.product-information span span').contains('Rs. 500').should('be.visible');
    cy.get('.product-information p').contains('Availability:').should('be.visible');
    cy.get('.product-information p').contains('Condition:').should('be.visible');
    cy.get('.product-information p').contains('Brand:').should('be.visible');
  }
}

export default new DetalhesProdutoPage();
