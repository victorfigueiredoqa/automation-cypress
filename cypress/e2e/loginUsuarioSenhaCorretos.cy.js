describe('Registrar Usuário', () => {

  beforeEach(() => {
    cy.acessarPagina()
  })

  it('Deve incluir e excluir usuário com sucesso', () => {

    cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');
    cy.contains('Signup / Login').click();
    cy.contains('Login to your account').should('be.visible');

    cy.preencherLogin('email_893@gmail.com', '654321');

    cy.contains('a', 'Logged in as', { timeout: 10000 })
      .should('be.visible')
      .find('b')
      .should('contain', 'Usuario_253');

    cy.get('a[href="/delete_account"]').click();
    cy.contains('Your account has been permanently deleted!').should('be.visible');
  })
})
