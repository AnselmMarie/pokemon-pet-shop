/* eslint-disable @typescript-eslint/no-unused-vars */
import { CartApiPayload, CartDataApi } from '@pokemon-pet-shop/typing';
import { clone } from 'lodash';

import {
  errFormat500ResponseUtil,
  errFormatResponseUtil,
} from '../../../../utils/err.format.response.util';
import { getPokemonSpeciesService } from '../../pokemon';
import { getPokemonDetailService } from '../../pokemon/services/pokemon.detail.service';
import { getCartDataCall, updateCartDataCall } from '../database/cart.database';

const doesItemExistKeyFn = (data, id) => {
  const cartLength = data.length;
  let key = null;
  let counter = null;
  let total = 0;

  for (let loop = 0; loop < cartLength; loop++) {
    const el = data[loop];

    if (el?.id == id) {
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

const getCartService = async () => {
  return await getCartDataCall().catch(() => {
    throw errFormat500ResponseUtil();
  });
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

const updateCartItemService = async (payload: CartApiPayload) => {
  const currentCartData: CartDataApi = clone(
    await getCartDataCall().catch(() => {
      throw errFormat500ResponseUtil();
    })
  );
  const data = clone(currentCartData.data);
  const { key, counter, total } = doesItemExistKeyFn(data, payload?.id);
  const currentObj = data[key];

  if (currentObj && payload.removeFromCart && currentObj.quantity === 1) {
    throw errFormatResponseUtil({
      status: 400,
      statusText: `This action can't be completed with this endpoint.`,
      message: 'We cannot complete this cart action at this moment.',
    });
  }

  if (key !== null) {
    currentObj.quantity = payload.addToCart ? currentObj.quantity + 1 : currentObj.quantity - 1;
    currentCartData.counter = payload.addToCart ? counter + 1 : counter - 1;
    currentCartData.total = payload.addToCart ? total + 500 : total - 500;

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

  const additionalData = await getSpeciesDetail(payload?.id).catch(() => {
    throw errFormat500ResponseUtil();
  });

  const finalPayload = {
    id: payload?.id,
    name: additionalData?.name,
    price: 500,
    quantity: 1,
    image: additionalData?.sprites?.other?.['official-artwork']?.front_default,
    isLegendary: additionalData?.is_legendary,
    isMythical: additionalData?.is_mythical,
  };
  currentCartData.counter = counter + 1;
  currentCartData.total = total + 500;

  currentCartData.data.push(finalPayload);

  await updateCartDataCall(currentCartData).catch(() => {
    throw errFormat500ResponseUtil();
  });

  return finalPayload;
};

const deleteCartItemService = async (id: string) => {
  const currentCartData: CartDataApi = clone(
    await getCartDataCall().catch(() => {
      throw errFormat500ResponseUtil();
    })
  );
  const data = clone(currentCartData.data);
  let key = null;
  const dataToRemove: any = data.filter((data, i: number) => {
    if (data?.id == id) {
      key = i;
      return data;
    }
  });
  const totalPrice = dataToRemove[0]?.quantity * dataToRemove[0]?.price;

  currentCartData.counter = currentCartData.counter - dataToRemove[0]?.quantity;
  currentCartData.total = currentCartData.total - totalPrice;

  data.splice(key, 1);
  currentCartData.data = data;

  await updateCartDataCall(currentCartData).catch(() => {
    throw errFormat500ResponseUtil();
  });

  return;
};

export { getCartService, updateCartItemService, deleteCartItemService };
