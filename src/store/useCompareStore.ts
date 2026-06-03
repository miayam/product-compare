import { create } from "zustand";

interface CompareState {
  compareList: number[]; // Array of product IDs
  addToCompare: (id: number) => void;
  removeFromCompare: (id: number) => void;
  clearComparison: () => void;
}

export const useCompareStore = create<CompareState>((set) => ({
  compareList: [],
  addToCompare: (id) =>
    set((state) => {
      if (state.compareList.includes(id) || state.compareList.length >= 2)
        return state;
      return { compareList: [...state.compareList, id] };
    }),
  removeFromCompare: (id) =>
    set((state) => ({
      compareList: state.compareList.filter((i) => i !== id),
    })),
  clearComparison: () => set({ compareList: [] }),
}));
