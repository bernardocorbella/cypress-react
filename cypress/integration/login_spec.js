describe('<App />', () => {
  it('should have correct title', () => {
    cy.visit('/');

    cy.title().should('include', 'Cypress React App');
  });
});
