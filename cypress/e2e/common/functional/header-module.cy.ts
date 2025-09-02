describe('Header module', () => {
  it('should open nav menu when nav open button is clicked', () => {
    cy.visit('/');

    cy.get('[data-cy="menu:nav"]').should('not.be.visible');
    cy.openMenu();

    cy.get('[data-cy="menu:nav"]').within(() => {
      cy.get('[data-cy="menu:nav-item"]').should('exist');
      cy.get('[data-cy="menu:nav-item"]').should('have.length.at.least', 1);
    });
  });

  it('should navigate to main page when logo is clicked', () => {
    cy.visit('/about-us');
    cy.get('[data-cy="header:title-link"]').click();
    cy.url().should('match', /\/$|\/home$/);
    cy.url().should('not.include', '/about-us');
  });
});
