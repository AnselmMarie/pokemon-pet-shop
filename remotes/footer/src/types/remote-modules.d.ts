declare module 'store/theme' {
  import type { PrimitiveAtom, WritableAtom } from 'jotai';
  import type { Store } from 'jotai/vanilla';

  export const globalStore: Store;
  export const themeAtom: PrimitiveAtom<string>;
  export const toggleThemeAtom: WritableAtom<null, [], void>;
}

// If any of these remotes export named symbols, extend the declarations here.
