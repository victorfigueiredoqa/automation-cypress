describe('Login sem sucesso', () => {
  const USUARIO = {
    nome: 'Teste Login Sucesso',
    email: 'teste_login_sucesso@teste.com.br',
    senha: '1234567'
  };

  beforeEach(() => {
    cy.acessarPagina()
    cy.verificarHomePage();
  })

  it('Deve validar usuário ou senha incorretos', () => {
    cy.navegarParaLogin();
    cy.preencherLogin(USUARIO.email, USUARIO.senha);
    cy.verificarLoginInvalido();
  })
})
