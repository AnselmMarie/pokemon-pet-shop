import { createJSONStorage } from 'jotai/utils';
import type { SyncStorage, AsyncStorage } from 'jotai/vanilla/utils/atomWithStorage';

import { createInMemoryStorage } from './in-store-storage';

interface WebStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export const createStorage = <T>(): SyncStorage<T> | AsyncStorage<T> => {
  try {
    const ls =
      typeof globalThis !== 'undefined'
        ? (globalThis as unknown as { localStorage?: WebStorage }).localStorage
        : undefined;

    if (!ls) {
      throw new Error('localStorage not available');
    }

    ls.setItem('__test__', '__test__');
    ls.removeItem('__test__');

    return createJSONStorage<T>(() => ls);
  } catch (e) {
    return createInMemoryStorage<T>();
  }
};
