import { pricingFormatUSD } from './pricing-format-country';

/** @todo I need to update this code to deal with possible recursive object and root array. See Eevee 215 and evolutions */
const checkChain = (
  name: string,
  chainData: any,
  pricingData: PokemonPricing.Base,
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

export const pricingFormat = (
  pokemonData: any,
  pricingData: any,
  returnAsNum = false
): number | string => {
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

  return price
    ? returnAsNum
      ? price
      : pricingFormatUSD(price)
    : 'Price is Not Available';
};
