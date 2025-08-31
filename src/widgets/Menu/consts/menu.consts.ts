import { ROUTING } from 'shared/consts/routing';

export const NAV_ITEMS_TEXT = {
  HOME: '🏠 Home',
  GAME: '🕹️ Game',
  STATISTICS: '📗 Statistics',
  ABOUT_US: '🌀 About us',
};

export const NAV_ITEMS_LIST = [
  {
    text: NAV_ITEMS_TEXT.HOME,
    rout: ROUTING.HOME,
  },

  {
    text: NAV_ITEMS_TEXT.GAME,
    rout: ROUTING.GAME,
  },

  {
    text: NAV_ITEMS_TEXT.STATISTICS,
    rout: ROUTING.STATISTICS,
  },

  {
    text: NAV_ITEMS_TEXT.ABOUT_US,
    rout: ROUTING.ABOUT_US,
  },
];

export const CLOSE_BUTTON_TEXT = '⬅︎';
