describe('Game page', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit('/game');
  });

  it('should save the data after finishing the game in the results table', () => {
    const mockUserData = {
      firstName: 'John',
      lastName: 'Doe',
      country: 'Belarus',
      age: '25',
      avatar: 'https://example.com/avatar.jpg',
    };

    cy.contains('label', 'First Name').parent().find('input').type(mockUserData.firstName);
    cy.contains('label', 'Last Name').parent().find('input').type(mockUserData.lastName);
    cy.contains('label', 'Country').parent().find('input').type(mockUserData.country);
    cy.contains('label', 'Age').parent().find('input').type(mockUserData.age);

    cy.contains('label', 'First Name')
      .parent()
      .find('input')
      .should('have.value', mockUserData.firstName);

    cy.contains('label', 'Last Name')
      .parent()
      .find('input')
      .should('have.value', mockUserData.lastName);

    cy.contains('label', 'Country')
      .parent()
      .find('input')
      .should('have.value', mockUserData.country);

    cy.contains('label', 'Age').parent().find('input').should('have.value', mockUserData.age);

    cy.contains('button', 'Register').click();

    for (let i = 0; i < 10; i++) {
      cy.get('[data-cy="answerOption:label"]').first().click();
      cy.contains('button', 'Apply').click();
      cy.contains('button', 'Next').click();
    }

    cy.visit('/statistics');

    cy.get('[data-cy="statisticsTable:table"] tbody tr').should('have.length.at.least', 1);

    cy.get('[data-cy="statisticsTable:table"] tbody tr')
      .first()
      .within(() => {
        cy.get('td').eq(1).should('contain.text', mockUserData.firstName);
        cy.get('td').eq(2).should('contain.text', mockUserData.lastName);
        cy.get('td').eq(3).should('contain.text', mockUserData.age);
      });

    cy.window()
      .its('localStorage')
      .invoke('getItem', 'game-results-storage')
      .should('not.be.null')
      .then((savedData) => {
        const parsedData = JSON.parse(savedData!);
        cy.wrap(parsedData.state.results).should('have.length.at.least', 1);

        const lastResult = parsedData.state.results[parsedData.state.results.length - 1];
        cy.wrap(lastResult.firstName).should('equal', mockUserData.firstName);
        cy.wrap(lastResult.lastName).should('equal', mockUserData.lastName);
        cy.wrap(lastResult.age).should('equal', parseInt(mockUserData.age));
      });
  });
});
