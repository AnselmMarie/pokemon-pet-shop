declare module 'atomTheme/State' {
  import type { Atom, Getter, Setter } from 'jotai';

  export type Theme = 'light' | 'dark';

  export const themeAtom: Atom<Theme>;

  export const toggleThemeAtom: Atom<Theme, [getter: Getter, setter: Setter]>;

  export const isDarkModeAtom: Atom<boolean>;
}

// If any of these remotes export named symbols, extend the declarations here.
