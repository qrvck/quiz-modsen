import { create } from 'zustand';
import { NavigationStore } from './useMenuStore.types';

export const useMenuStore = create<NavigationStore>()((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
}));
