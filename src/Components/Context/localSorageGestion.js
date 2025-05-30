import { create } from "zustand";


export const useUserStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user: user }),
  clearUser: () => set({ user: null }),
}));


export const deconnexion = () => {
  localStorage.removeItem("token");
  useUserStore.getState().clearUser();
};