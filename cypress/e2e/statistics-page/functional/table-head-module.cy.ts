describe('Table head module', () => {
  beforeEach(() => {
    cy.visit('/statistics');
  });

  it('should display structure correctly', () => {
    cy.visit('/statistics');
    cy.get('thead tr th').should('have.length', 6);
  });
});
