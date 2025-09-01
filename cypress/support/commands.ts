Cypress.Commands.add('openMenu', () => {
  cy.get('[data-cy="open-nav-menu-button"]').click();
  cy.get('[data-cy="nav-menu"]').should('be.visible');
});

Cypress.Commands.add('closeMenu', () => {
  cy.get('[data-cy="close-nav-menu-button"]').click();
  cy.get('[data-cy="nav-menu"]').should('not.be.visible');
});
