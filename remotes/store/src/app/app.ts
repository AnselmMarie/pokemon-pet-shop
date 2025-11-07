import { atom, createStore } from 'jotai';

// Create a single global Jotai store
export const globalStore = createStore();

// Light / dark theme atom
export const themeAtom = atom('light');

// A derived atom for toggling the theme
export const toggleThemeAtom = atom(null, (get, set) => {
  const current = get(themeAtom);
  set(themeAtom, current === 'light' ? 'dark' : 'light');
});
