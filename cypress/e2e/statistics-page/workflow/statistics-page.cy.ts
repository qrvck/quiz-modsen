const placeholderWords = ['NO', 'DATA', 'PLAY', 'YOUR', 'FIRST', 'GAME'];

describe('Statistics page', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit('/statistics');
  });

  it('should display structure correctly', () => {
    cy.get('[data-cy="statisticsTable:table"]').within(() => {
      cy.get('thead').should('exist');
      cy.get('tbody').should('exist');
    });
  });

  it('should display all data correctly when localStorage has data', () => {
    const firstMock = {
      id: 1,
      avatarURL: 'https://example.com/avatar1.jpg',
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
      correctAnswers: 8,
      incorrectAnswers: 2,
    };

    const secondMock = {
      id: 2,
      avatarURL: 'https://example.com/avatar2.jpg',
      firstName: 'Jane',
      lastName: 'Smith',
      age: 30,
      correctAnswers: 9,
      incorrectAnswers: 1,
    };

    const mockData = [firstMock, secondMock];

    cy.window().then((win) => {
      win.localStorage.setItem(
        'game-results-storage',
        JSON.stringify({
          state: { results: mockData },
          version: 0,
        })
      );
    });

    cy.visit('/statistics');

    cy.get('[data-cy="statisticsTable:table"] tbody tr').should('have.length', 2);

    cy.get('[data-cy="statisticsTable:table"] tbody tr')
      .first()
      .within(() => {
        cy.get('td').eq(1).should('contain.text', firstMock.firstName);
        cy.get('td').eq(2).should('contain.text', firstMock.lastName);
        cy.get('td').eq(3).should('contain.text', firstMock.age);
        cy.get('td').eq(4).should('contain.text', firstMock.correctAnswers);
        cy.get('td').eq(5).should('contain.text', firstMock.incorrectAnswers);
      });
  });

  it('should display placeholder words when localStorage is empty', () => {
    cy.window().its('localStorage').invoke('getItem', 'game-results-storage').should('be.null');

    cy.get('[data-cy="statisticsTable:table"] tbody tr').should('exist');

    placeholderWords.forEach((word) => {
      cy.get('[data-cy="statisticsTable:table"] tbody').should('contain.text', word);
    });
  });

  it('should display placeholder words when localStorage has invalid data', () => {
    cy.window().then((win) => {
      win.localStorage.setItem('game-results-storage', 'invalid-json');
    });

    cy.visit('/statistics');

    placeholderWords.forEach((word) => {
      cy.get('[data-cy="statisticsTable:table"] tbody').should('contain.text', word);
    });
  });

  it('should display placeholder words when localStorage has empty results array', () => {
    cy.window().then((win) => {
      win.localStorage.setItem(
        'game-results-storage',
        JSON.stringify({
          state: { results: [] },
          version: 0,
        })
      );
    });

    cy.visit('/statistics');

    placeholderWords.forEach((word) => {
      cy.get('[data-cy="statisticsTable:table"] tbody').should('contain.text', word);
    });
  });

  it('should verify placeholder words are distributed across table cells', () => {
    cy.clearLocalStorage();
    cy.visit('/statistics');

    cy.get('[data-cy="statisticsTable:table"] tbody td').should(
      'have.length.at.least',
      placeholderWords.length
    );

    placeholderWords.forEach((word) => {
      cy.get('[data-cy="statisticsTable:table"] tbody').should('contain.text', word);
    });
  });

  it('should verify exact number of placeholder cells', () => {
    cy.clearLocalStorage();
    cy.visit('/statistics');

    placeholderWords.forEach((word) => {
      cy.get('[data-cy="statisticsTable:table"] tbody td').contains(word).should('have.length', 1);
    });
  });
});
