import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  userProfile: null,
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  setUserProfile: (userProfile) => set((state) => ({ ...state, userProfile })),
}));
