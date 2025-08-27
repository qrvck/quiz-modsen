import { create } from 'zustand';

import { NavigationStore } from './model/useMenuStore.types';

export const useMenuStore = create<NavigationStore>()((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
}));
