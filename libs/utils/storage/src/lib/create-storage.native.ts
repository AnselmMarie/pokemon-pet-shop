import type {
  SyncStorage,
  AsyncStorage,
} from 'jotai/vanilla/utils/atomWithStorage';

import { createInMemoryStorage } from './in-store-storage';

export const createStorage = <T>(): SyncStorage<T> | AsyncStorage<T> => {
  let AsyncStorageModule: any;

  try {
    AsyncStorageModule =
      require('@react-native-async-storage/async-storage').default;
  } catch (e) {
    return createInMemoryStorage<T>();
  }

  return {
    getItem: async (key: string) => {
      const value = await AsyncStorageModule.getItem(key);
      return value;
    },
    setItem: async (key: string, value: string) => {
      await AsyncStorageModule.setItem(key, value);
    },
    removeItem: async (key: string) => {
      await AsyncStorageModule.removeItem(key);
    },
  } as AsyncStorage<T>;
};
