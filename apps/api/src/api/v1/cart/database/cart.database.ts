import { CartDataApi } from '@pokemon-pet-shop/typing';

export const cartDatabase = { data: [], total: 0, counter: 0 };

export const getCartDataCall = async (): Promise<CartDataApi> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cartDatabase);
    }, 500);
  });
};

export const updateCartDataCall = async (data): Promise<CartDataApi> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('data', data);
      cartDatabase.data = data.data;
      cartDatabase.total = data.total;
      cartDatabase.counter = data.counter;
      resolve(data);
    }, 500);
  });
};

export const clearCartDataCall = async (): Promise<CartDataApi> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = { data: [], total: 0, counter: 0 };
      cartDatabase.data = data.data;
      cartDatabase.total = data.total;
      cartDatabase.counter = data.counter;
      resolve(data);
    }, 500);
  });
};
