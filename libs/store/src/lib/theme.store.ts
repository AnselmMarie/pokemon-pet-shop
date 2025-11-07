import { create } from 'zustand';

export enum ThemeTypeEnum {
  LIGHT = 'light',
  DARK = 'dark',
}

const themeStore = (set: any) => ({
  theme: ThemeTypeEnum.LIGHT,
  varThemeMode: null,
  isLocked: false,
  updateTheme: (newTheme: ThemeTypeEnum, varThemeMode: any) => {
    set({ theme: newTheme, varThemeMode });
  },
  toggleTheme: () => {
    set((state: any) => ({
      theme: state.theme === ThemeTypeEnum.LIGHT ? ThemeTypeEnum.DARK : ThemeTypeEnum.LIGHT,
    }));
  },
  updateLock: (locked: boolean) => {
    set({ isLocked: locked });
  },
});

export const useThemeStore = create(themeStore);
