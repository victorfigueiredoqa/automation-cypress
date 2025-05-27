describe('Página de Contato', () => {

    beforeEach(() => {
        cy.acessarPagina()
    })

    it('Deve validar página de contato', () => {
        cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');
        cy.get('a[href="/contact_us"]').click();
        cy.get('div.contact-form > .title').should('be.visible');
        cy.get('[data-qa="name"]').type('Victor Figueiredo');
        cy.get('[data-qa="email"]').type('victorfernando.bsi@gmail.com');
        cy.get('[data-qa="subject"]').type('Automação com Cypress');
        cy.get('[data-qa="message"]').type('Projeto de automação completo de página WEB com cypress! Segue arquivo em anexo...');

        // Upload do arquivo
        cy.get('input[name="upload_file"]').attachFile('exemplo.txt');

        cy.get('[data-qa="submit-button"]').click();

        cy.contains('Success! Your details have been submitted successfully.').should('be.visible');
        cy.get('a.btn.btn-success').click();
        cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');
    });
});

