describe('Login com sucesso', () => {

  beforeEach(() => {
    cy.acessarPagina()
  })

  it('Deve logar e excluir usuário com sucesso', () => {

    cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');
    cy.contains('Signup / Login').click();
    cy.contains('Login to your account').should('be.visible');

    const email = Cypress.env('email');
    const senha = Cypress.env('senha');

    cy.preencherLogin(email, senha);

    cy.contains('a', 'Logged in as', { timeout: 10000 })
      .should('be.visible')
      .find('b')
      .should('contain', 'Usuario_406');

    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.contains('Login to your account').should('be.visible');
  })
})
