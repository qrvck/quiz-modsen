Cypress.Commands.add('openMenu', () => {
  cy.get('[data-cy="header:open-menu-button"]').click();
  cy.get('[data-cy="menu:nav"]').should('be.visible');
});

Cypress.Commands.add('closeMenu', () => {
  cy.get('[data-cy="menu:close-nav-button"]').click();
  cy.get('[data-cy="menu:nav"]').should('not.be.visible');
});
