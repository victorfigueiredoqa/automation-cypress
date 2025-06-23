describe('Login sem sucesso', () => {

  beforeEach(() => {
    cy.acessarPagina()
  })

  it('Deve validar usuário ou senha incorretos', () => {
    cy.verificarHomePage();
    cy.navegarParaLogin();
    
    const email = Cypress.env('email');
    const senha = Cypress.env('senha');
    
    cy.preencherLogin(email, senha);
    cy.verificarLoginInvalido();
  })
})
