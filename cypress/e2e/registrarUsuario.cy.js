describe('Registrar Usuário', () => {

  const nomeUsuario = `Usuario_${Cypress._.random(1, 1000)}`;
  const emailUsuario = `email_${Cypress._.random(1, 1000)}@gmail.com`;
  const senha = '654321';
  
  beforeEach(() => {
    cy.acessarPagina()
  })
  
  it('Deve incluir e excluir usuário com sucesso', () => {
    cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');
    cy.contains('Signup / Login').click();
    cy.contains('New User Signup!').should('be.visible');

    cy.preencherCadastro(nomeUsuario, emailUsuario, senha);

    cy.contains('Congratulations! Your new account has been successfully created!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();

    cy.contains('a', `Logged in as ${nomeUsuario}`, { timeout: 10000 })
      .should('be.visible')
      .find('b')
      .should('contain', nomeUsuario);

    //cy.get('a[href="/delete_account"]').click();
    //cy.contains('Your account has been permanently deleted!').should('be.visible');
  });
});