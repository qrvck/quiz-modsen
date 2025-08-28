import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { Result, StatisticsStore } from './model/statisticsStore.types';

export const useStatisticsStore = create<StatisticsStore>()(
  persist(
    (set) => ({
      results: [],
      addResult: (result: Result) => set(({ results }) => ({ results: [...results, result] })),
    }),
    { name: 'zustand-game-results-storage' }
  )
);

export const rehydrateStatisticsStore = () => {
  useStatisticsStore.persist.rehydrate();
};
