import * as SecureStore from 'expo-secure-store';

export const setStorageItemUtil = async (key: string, value: string) => {
  await SecureStore.setItemAsync(key, value);
};

export const getStorageItemUtil = async (key: string) => {
  return await SecureStore.getItemAsync(key);
};

export const clearStorageItemUtil = async (key: string) => {
  await SecureStore.deleteItemAsync(key);
};
