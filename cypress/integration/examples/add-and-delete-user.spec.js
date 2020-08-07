describe('Test initial state', () => {
    it('should add another user and show it in the list', () => {
        cy.visit(" http://localhost:8080/");
        cy.get('#name').type('Paoli').should('have.value', 'Paoli');
        cy.contains('Boy').click();
        cy.contains('I am over the age of 18').click();
        cy.get('.input-container label span i.nes-octocat').click();
        cy.contains('Enter').click();
        cy.get('ul').contains('Marcel');
        cy.get('ul').contains('Paoli').siblings("button").click();
        cy.get('ul').contains('Paoli').should('not.exist');
    })
});
