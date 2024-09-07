export let cartDatabase = { data: [], total: 0, counter: 0 };

export const getCartDataCall = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cartDatabase);
    }, 500);
  });
};

export const updateCartDataCall = async ({ data, counter, total }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      cartDatabase.data = data;
      cartDatabase.counter = counter;
      cartDatabase.total = total;
      resolve(cartDatabase);
    }, 500);
  });
};

export const clearCartDataCall = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      cartDatabase = { data: [], total: 0, counter: 0 };
      resolve(cartDatabase);
    }, 500);
  });
};
