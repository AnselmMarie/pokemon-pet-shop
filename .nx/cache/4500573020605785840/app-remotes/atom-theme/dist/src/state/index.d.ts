export type Theme = 'light' | 'dark';
export declare const themeAtom: import("jotai").WritableAtom<Theme, [Theme | typeof import("jotai/utils").RESET | ((prev: Theme) => Theme | typeof import("jotai/utils").RESET)], void>;
export declare const toggleThemeAtom: import("jotai").WritableAtom<Theme, [], void>;
export declare const isDarkModeAtom: import("jotai").Atom<boolean>;
//# sourceMappingURL=index.d.ts.map