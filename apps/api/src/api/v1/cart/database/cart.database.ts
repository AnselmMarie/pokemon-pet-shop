export let cartDatabase = [];

export const getCartDataCallUtil = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cartDatabase);
    }, 500);
  });
};

export const updateCartDataCallUtil = async (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      cartDatabase = data;
      resolve(cartDatabase);
    }, 500);
  });
};

export const clearCartDataCallUtil = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      cartDatabase = [];
      resolve(cartDatabase);
    }, 500);
  });
};
