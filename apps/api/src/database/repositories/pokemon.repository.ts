export const pricingDatabase = {
  stages: {
    '1': { price: 49999 },
    '2': { price: 99999 },
    '3': { price: 149999 },
  },
  legendary: { price: 15000000 },
  mythical: { price: 15000000 },
};

export const getPricingDataCall = async (): Promise<PokemonPricing.Base> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(pricingDatabase);
    }, 500);
  });
};

