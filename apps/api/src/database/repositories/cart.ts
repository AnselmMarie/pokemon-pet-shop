export const cartDatabase = { data: [], total: 0, counter: 0 };

export const getCartDataCall = async (): Promise<Cart.Base> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cartDatabase);
    }, 500);
  });
};

export const updateCartDataCall = async (data: any): Promise<Cart.Base> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      cartDatabase.data = data.data;
      cartDatabase.total = data.total;
      cartDatabase.counter = data.counter;
      resolve(data);
    }, 500);
  });
};

