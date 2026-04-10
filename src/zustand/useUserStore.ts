import { create } from "zustand";
import type { IUser } from "@/hooks/interfaces/auth";

interface UserState {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));

export const useIsLoggedIn = () => {
  const user = useUserStore((state) => state.user);
  return !!user; 
};