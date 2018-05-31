describe('<App />', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have correct title', () => {
    cy.title().should('include', 'Cypress React App');
  });

  it('should navigate to about', () => {
    const button = cy.get('[data-testid=AboutLink]');

    button.should('contain', 'About');
    button.click();
    // expect(location.href).to.eq('/about');
  });
});
