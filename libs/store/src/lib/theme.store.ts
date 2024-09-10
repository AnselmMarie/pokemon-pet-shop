import { create } from 'zustand';

export enum ThemeTypeEnum {
  LIGHT = 'light',
  DARK = 'dark',
}

const themeStore = (set: any, get: any) => ({
  theme: ThemeTypeEnum.LIGHT,
  isLocked: false,
  updateTheme: (newTheme: ThemeTypeEnum) => {
    set({ theme: newTheme });
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
