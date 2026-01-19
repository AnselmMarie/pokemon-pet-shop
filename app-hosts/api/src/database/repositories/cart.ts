import { Cart } from '@pokemon-pet-shop/types';

export const cartDatabase: Cart = { data: [], total: 0, counter: 0 };

export const getCartDataCall = async (): Promise<Cart> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cartDatabase);
    }, 500);
  });
};

export const updateCartDataCall = async (data: Cart): Promise<Cart> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      cartDatabase.data = data.data;
      cartDatabase.total = data.total;
      cartDatabase.counter = data.counter;
      resolve(data);
    }, 500);
  });
};
