import { PricingApi } from '@pokemon-pet-shop/typing';

export const pricingDatabase = {
  stages: { '1': { price: 49999 }, '2': { price: 99999 }, '3': { price: 149999 } },
  legendary: { price: 150000 },
  mythical: { price: 150000 },
};

export const getPricingDataCall = async (): Promise<PricingApi> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(pricingDatabase);
    }, 500);
  });
};
