declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * opens the navigation menu
       */
      openMenu(): Chainable<void>;

      /**
       * closes the navigation menu
       */
      closeMenu(): Chainable<void>;
    }
  }
}

export {};
