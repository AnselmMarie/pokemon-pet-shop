import type { SyncStorage } from 'jotai/vanilla/utils/atomWithStorage';

export const createInMemoryStorage = <T>(): SyncStorage<T> => {
  const store: Record<string, string> = {};

  return {
    getItem: (key: string, initialValue: T) => {
      const v = store[key];
      if (v === undefined) return initialValue;
      try {
        return JSON.parse(v) as T;
      } catch {
        return initialValue;
      }
    },
    setItem: (key: string, newValue: T) => {
      store[key] = JSON.stringify(newValue);
    },
    removeItem: (key: string) => {
      delete store[key];
    },
  };
};
