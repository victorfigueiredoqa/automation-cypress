describe('Login sem sucesso', () => {

  beforeEach(() => {
    cy.acessarPagina()
  })

  it('Deve validar usuário ou senha incorretos', () => {

    cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');
    cy.contains('Signup / Login').click();
    cy.contains('Login to your account').should('be.visible');

    const email = Cypress.env('email');
    const senha = Cypress.env('senha');

    cy.preencherLogin(email, senha);

    cy.contains('Your email or password is incorrect!').should('be.visible');
  })
})
