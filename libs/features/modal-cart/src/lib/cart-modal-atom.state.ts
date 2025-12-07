import { atom } from 'jotai';

export const isSideCartModalOpenAtom = atom(false);

export const openSideCartModalAtom = atom(null, (_, set) => {
  set(isSideCartModalOpenAtom, true);
});

export const closeSideCartModalAtom = atom(null, (_, set) => {
  set(isSideCartModalOpenAtom, false);
});
