import type { SyncStorage, AsyncStorage } from 'jotai/vanilla/utils/atomWithStorage';

import { createInMemoryStorage } from './in-store-storage';

interface AsyncStorageStatic {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
}

export const createStorage = <T>(): SyncStorage<T> | AsyncStorage<T> => {
  let AsyncStorageModule: AsyncStorageStatic;

  try {
    AsyncStorageModule = require('@react-native-async-storage/async-storage').default;
  } catch (e) {
    return createInMemoryStorage<T>();
  }

  return {
    getItem: async (key: string, initialValue: T): Promise<T> => {
      const value = await AsyncStorageModule.getItem(key);
      if (value === null) return initialValue;
      try {
        return JSON.parse(value) as T;
      } catch {
        return initialValue;
      }
    },
    setItem: async (key: string, newValue: T): Promise<void> => {
      await AsyncStorageModule.setItem(key, JSON.stringify(newValue));
    },
    removeItem: async (key: string): Promise<void> => {
      await AsyncStorageModule.removeItem(key);
    },
  };
};
