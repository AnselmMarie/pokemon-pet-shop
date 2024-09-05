import { create } from 'zustand';

export enum ThemeTypeEnum {
  LIGHT = 'light',
  DARK = 'dark',
}

interface setUpdateThemeProps {
  newTheme: ThemeTypeEnum;
}

const themeStore = (set: any, get: any) => ({
  theme: ThemeTypeEnum.LIGHT,
  updateTheme: ({ newTheme }: setUpdateThemeProps) => {
    set({ theme: newTheme });
  },
});

export const useThemeStore = create(themeStore);
