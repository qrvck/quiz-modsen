describe('Menu module', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should close nav menu when close-menu-button is clicked', () => {
    cy.openMenu();
    cy.closeMenu();
  });

  it('should close burger menu when clicking outside', () => {
    cy.openMenu();

    cy.get('body').click(285, 0);

    cy.get('[data-cy="menu:nav"]').should('not.be.visible');
  });

  it('should close burger menu when menu item is clicked', () => {
    cy.openMenu();

    cy.get('[data-cy="menu:nav-item"]').first().click();
    cy.get('[data-cy="menu:nav"]').should('not.be.visible');
  });

  it('should work correctly on mobile viewport', () => {
    cy.viewport('iphone-x');

    cy.get('[data-cy="header:open-menu-button"]').should('be.visible');

    cy.openMenu();
  });
});
