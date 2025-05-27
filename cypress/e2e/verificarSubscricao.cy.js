describe('Funcionalidade: Subscrição ao final da página', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Deve acessar subscrição ao final da página e efetuar o registro', () => {
        cy.contains('Full-Fledged practice website for Automation Engineers')
            .should('be.visible');

        cy.scrollTo('bottom');
        cy.contains('Subscription').should('be.visible');
        cy.get('#susbscribe_email').type('victorfernando.bsi@gmail.com')
        cy.get('#subscribe').click();
        cy.contains('You have been successfully subscribed!').should('be.visible');
    })

})