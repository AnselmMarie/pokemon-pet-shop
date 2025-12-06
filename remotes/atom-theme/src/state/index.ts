import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

import { createStorage } from './create-storage';

const STORAGE_NAMESPACE = 'pokemon-pet-shop';
const storageKey = (key: string) => `${STORAGE_NAMESPACE}:${key}`;

export type Theme = 'light' | 'dark';

export const themeAtom = atomWithStorage<Theme>(
  storageKey('theme'),
  'light',
  createStorage<Theme>() as any,
  { getOnInit: true }
);

export const toggleThemeAtom = atom(
  (get) => get(themeAtom),
  (get, set) => {
    const currentTheme = get(themeAtom);
    set(themeAtom, currentTheme === 'light' ? 'dark' : 'light');
  }
);

export const isDarkModeAtom = atom((get) => get(themeAtom) === 'dark');
