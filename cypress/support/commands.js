import 'cypress-file-upload';

Cypress.Commands.add('acessarPagina', () => {
  cy.visit('/')
})


Cypress.Commands.add('preencherCadastro', (nome, email, senha) => {
  cy.get('[data-qa="signup-name"]').type(nome);
  cy.get('[data-qa="signup-email"]').type(email);
  cy.get('[data-qa="signup-button"]').click();

  cy.get('#id_gender1').click();
  cy.get('[data-qa="name"]').should('have.value', nome);
  cy.get('[data-qa="email"]').should('have.value', email);
  cy.get('[data-qa="password"]').type(senha);
  cy.get('#days').select('11');
  cy.get('#months').select('February');
  cy.get('#years').select('1989');
  cy.get('label[for="newsletter"]').click();
  cy.get('label[for="optin"]').click();

  cy.get('[data-qa="first_name"]').type('Victor');
  cy.get('[data-qa="last_name"]').type('Victor');
  cy.get('[data-qa="company"]').type('Victor QA Automation');
  cy.get('[data-qa="address"]').type('Rua Josino Antunes da Silva');
  cy.get('[data-qa="address2"]').type('Nº 95. Curva do Rio');
  cy.get('[data-qa="country"]').select('United States');
  cy.get('[data-qa="state"]').type('Minas Gerais');
  cy.get('[data-qa="city"]').type('Unai');
  cy.get('[data-qa="zipcode"]').type('38.620-874');
  cy.get('[data-qa="mobile_number"]').type('(38) 9.9970-6879');
  cy.get('[data-qa="create-account"]').click();
});

Cypress.Commands.add('preencherLogin', (email, senha) => {
  cy.get('[data-qa="login-email"]').type(email);
  cy.get('[data-qa="login-password"]').type(senha);
  cy.get('[data-qa="login-button"]').click();
});

Cypress.Commands.add('preencherUsuarioEmail', (nome, email) => {
  cy.get('[data-qa="signup-name"]').type(nome);
  cy.get('[data-qa="signup-email"]').type(email);
  cy.get('[data-qa="signup-button"]').click();
});

