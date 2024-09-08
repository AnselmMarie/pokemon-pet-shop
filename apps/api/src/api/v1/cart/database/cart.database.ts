import { CartDataApi } from '@pokemon-pet-shop/typing';

export let cartDatabase = { data: [], total: 0, counter: 0 };

export const getCartDataCall = async (): Promise<CartDataApi> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cartDatabase);
    }, 500);
  });
};

export const updateCartDataCall = async ({ data, counter, total }): Promise<CartDataApi> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      cartDatabase.data = data;
      cartDatabase.counter = counter;
      cartDatabase.total = total;
      resolve(cartDatabase);
    }, 500);
  });
};

export const clearCartDataCall = async (): Promise<CartDataApi> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      cartDatabase = { data: [], total: 0, counter: 0 };
      resolve(cartDatabase);
    }, 500);
  });
};
