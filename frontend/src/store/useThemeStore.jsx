import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "coffee",
  setTheme: (theme) => {
    console.log(theme);
    localStorage.setItem("chat-theme", theme);
    console.log(theme);
    set({ theme });
  },
}));
