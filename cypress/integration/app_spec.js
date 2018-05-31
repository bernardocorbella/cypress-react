describe('<App />', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have correct title', () => {
    cy.title().should('include', 'Cypress React App');
  });

  context('<Nav />', () => {
    let aboutLink, homeLink, loginLink;
    beforeEach(() => {
      aboutLink = cy.get('[data-testid=About-Link]');
      homeLink = cy.get('[data-testid=Home-Link]');
      loginLink = cy.get('[data-testid=Login-Link]');
    });

    it('should have navigation', () => {
      aboutLink.should('contain', 'About');
      homeLink.should('contain', 'Home');
      loginLink.should('contain', 'Login');
    });

    it('should correctly navigate', () => {
      loginLink.click();
      expect(location.href).to.eq('/login');

      aboutLink.click();
      expect(location.href).to.eq('/about');

      homeLink.click();
      expect(location.href).to.eq('/');
    });
  });
});
