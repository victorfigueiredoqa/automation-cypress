describe('Login de Usuário', () => {
  const USUARIO = {
    nome: 'Usuario_174',
    email: 'email_90@gmail.com'
  };
    
  beforeEach(() => {
    cy.acessarPagina();
  });
  
  it('Deve validar tentativa de cadastro com email já existente', () => {
    cy.verificarHomePage();
    cy.navegarParaLogin();
    cy.preencherUsuarioEmail(USUARIO.nome, USUARIO.email);
    cy.verificarMensagemEmailExistente();
  });
});

