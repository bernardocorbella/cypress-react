describe('<App />', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have correct title', () => {
    cy.title().should('include', 'Cypress React App');
  });

  context('<Nav />', () => {
    it('should have navigation', () => {
      cy.get('[data-testid=About-Link]').should('contain', 'About');
      cy.get('[data-testid=Home-Link]').should('contain', 'Home');
      cy.get('[data-testid=Login-Link]').should('contain', 'Login');
    });
  });
});
