describe('Registrar Usuário', () => {
  
  beforeEach(() => {
    cy.acessarPagina()
  })
  
  it('Deve incluir e excluir usuário com sucesso', () => {
    cy.visit('https://automationexercise.com/');
    cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');

    cy.contains('Signup / Login').click();
    cy.contains('New User Signup!').should('be.visible');

    cy.preencherCadastro('Victor Figueiredo', 'email.bsi@gmail.com', '654321');

    cy.contains('Congratulations! Your new account has been successfully created!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();

    cy.contains('a', 'Logged in as', { timeout: 10000 })
      .should('be.visible')
      .find('b')
      .should('contain', 'Victor');

    cy.get('a[href="/delete_account"]').click();
    cy.contains('Your account has been permanently deleted!').should('be.visible');
  });
});