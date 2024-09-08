import { PricingApi } from '@pokemon-pet-shop/typing';

const formatPriceUSD = (price: number): string => {
  return `$${String(price).replace(/\d\d$/, (el: string) => {
    return `.${el}`;
  })}`;
};

const checkChain = (
  name: string,
  chainData: any,
  pricingData: PricingApi,
  i: number
): string | null => {
  const currentName = chainData?.evolves_to?.[0]?.species?.name;
  const iPlus = i + 1;

  if (iPlus > 3) {
    return null;
  }

  if (name === currentName) {
    return String(pricingData?.stages?.[String(iPlus)]?.price);
  }
  return checkChain(name, chainData?.evolves_to?.[0], pricingData, iPlus);
};

export const pricingFormatUtil = (pokemonData: any, pricingData: any): number | string => {
  const { name, isMythical, isLegendary, chainData } = pokemonData;
  let price = null;

  if (isLegendary) {
    price = pricingData?.legendary?.price;
  }

  if (isMythical) {
    price = pricingData?.mythical?.price;
  }

  if (name === chainData?.species?.name) {
    price = pricingData?.stages?.['1']?.price;
  }

  if (price === null) {
    price = checkChain(name, chainData, pricingData, 1);
  }

  return price ? formatPriceUSD(price) : 'Price is Not Available';
};
