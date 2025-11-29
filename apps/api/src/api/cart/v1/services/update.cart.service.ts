import { clone } from 'lodash';

import { pricingFormat } from '@utils/pricing';

import {
  errFormat500ResponseUtil,
  errFormatResponseUtil,
} from '../../../../utils/err.format.response.util';
import { getCartDataCall, updateCartDataCall } from '../database/cart.database';
import { getPokemonSpeciesService } from '../../../pokemon';
import { getPokemonDetailService } from '../../../pokemon/v1/services/pokemon.detail.service';
import { getPricingService } from '../../../pokemon/v1/services/pricing.service';
import { getPokemonEvolutionChainService } from '../../../pokemon/v1/services/pokemon.evolution.chain.service';

const doesItemExistKeyFn = (
  data: Cart.Data[],
  id: string
): { key: number | null; counter: number; total: number } => {
  const cartLength = data.length;
  let key: number | null = null;
  let counter = 0;
  let total = 0;

  for (let loop = 0; loop < cartLength; loop++) {
    const el = data[loop];

    if (el?.id === id) {
      key = loop;
    }
    counter = counter + el?.quantity;
    total = el?.price * el?.quantity + total;
  }

  return {
    key,
    counter,
    total,
  };
};

const getSpeciesDetail = async (id: string) => {
  return Promise.all([
    await getPokemonSpeciesService({ id }).catch(() => 'err'),
    await getPokemonDetailService({ id }).catch(() => 'err'),
  ]).then((data) => {
    if (data[0] === 'err' || data[1] === 'err') {
      return 'err';
    }
    return { ...data[0], ...data[1] };
  });
};

export const updateCartItemService = async (payload: Cart.Payload) => {
  const currentCartData: Cart.Base = clone(
    await getCartDataCall().catch(() => {
      throw errFormat500ResponseUtil();
    })
  );
  const data = clone(currentCartData.data);

  const { key, counter, total } = doesItemExistKeyFn(data, payload?.id);
  const currentObj = typeof key === 'number' && data[key];

  if (currentObj && payload.removeFromCart && currentObj.quantity === 1) {
    throw errFormatResponseUtil({
      status: 400,
      statusText: `This action can't be completed with this endpoint.`,
      message: 'We cannot complete this cart action at this moment.',
    });
  }

  const pricingData: PokemonPricing.Base = await getPricingService().catch(
    () => {
      throw errFormat500ResponseUtil();
    }
  );
  const speciesData = await getSpeciesDetail(payload?.id).catch(() => {
    throw errFormat500ResponseUtil();
  });

  const evolutionChainSplit = speciesData?.evolution_chain?.url?.split('/');

  const evolutionData = await getPokemonEvolutionChainService({
    id: evolutionChainSplit[evolutionChainSplit.length - 2],
  }).catch(() => {
    throw errFormat500ResponseUtil();
  });

  const pokemonPrice = Number(
    pricingFormat(
      {
        name: speciesData?.name,
        isLegendary: speciesData?.is_legendary,
        isMythical: speciesData?.is_mythical,
        chainData: evolutionData?.chain,
      },
      pricingData,
      true
    )
  );

  if (key !== null) {
    if (currentObj) {
      currentObj.quantity = payload.addToCart
        ? currentObj.quantity + 1
        : currentObj.quantity - 1;
    }
    currentCartData.counter = payload.addToCart ? counter + 1 : counter - 1;
    currentCartData.total = payload.addToCart
      ? total + pokemonPrice
      : total - pokemonPrice;

    await updateCartDataCall(currentCartData).catch(() => {
      throw errFormat500ResponseUtil();
    });

    return currentObj;
  }

  if (payload.removeFromCart) {
    throw errFormatResponseUtil({
      status: 400,
      statusText: `This action can't be completed with this endpoint.`,
      message: 'We cannot complete this cart action at this moment.',
    });
  }

  const finalPayload = {
    id: payload?.id,
    name: speciesData?.name,
    price: pokemonPrice,
    quantity: 1,
    image: speciesData?.sprites?.other?.['official-artwork']?.front_default,
    isLegendary: speciesData?.is_legendary,
    isMythical: speciesData?.is_mythical,
    types: speciesData?.types,
  };
  currentCartData.counter = counter + 1;
  currentCartData.total = total + pokemonPrice;

  currentCartData.data.push(finalPayload);

  await updateCartDataCall(currentCartData).catch(() => {
    throw errFormat500ResponseUtil();
  });

  return finalPayload;
};
