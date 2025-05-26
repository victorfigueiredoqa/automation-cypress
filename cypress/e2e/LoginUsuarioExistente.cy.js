describe('Registrar Usuário', () => {

  const nomeUsuario = 'Usuario_174';
  const emailUsuario = 'email_90@gmail.com';
    
  beforeEach(() => {
    cy.acessarPagina()
  })
  
  it('Deve validar login com usário já existente', () => {
    cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');
    cy.contains('Signup / Login').click();
    cy.contains('New User Signup!').should('be.visible');

    cy.preencherUsuarioEmail(nomeUsuario, emailUsuario);

    cy.contains('Email Address already exist!').should('be.visible');
    
  });
});

