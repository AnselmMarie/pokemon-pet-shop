/* eslint-disable @typescript-eslint/no-unused-vars */
import { getPokemonSpeciesService } from '../../pokemon';
import { getPokemonDetailService } from '../../pokemon/services/pokemon.detail.service';
import { clearCartDataCall, getCartDataCall, updateCartDataCall } from '../database/cart.database';

interface CartDataProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  isLegendary: boolean;
  isMythical: boolean;
}

const doesItemExistKeyFn = (data, id) => {
  const cartLength = data.length;
  let key = null;
  let counter = null;
  let total = null;

  for (let loop = 0; loop < cartLength; loop++) {
    const el = data[loop];

    if (el?.id == id) {
      key = loop;
    }
    counter = counter + el?.quantity;
    total = total + el?.price;
  }
  return {
    key,
    counter,
    total,
  };
};

const getCartService = async () => {
  return await getCartDataCall();
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

const updateCartService = async (payload) => {
  const currentCartData: any = await getCartDataCall();
  const data = currentCartData.data;
  const { key, counter, total } = doesItemExistKeyFn(data, payload?.id);

  if (key !== null) {
    const currentObj = data[key];
    currentObj.quantity = currentObj.quantity + 1;
    currentCartData.counter = counter + 1;
    currentCartData.total = total + 500;

    return currentObj;
  }

  const additionalData = await getSpeciesDetail(payload?.id);

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

  data.push(finalPayload);

  return finalPayload;
};

const clearCartService = async () => {
  const res = await clearCartDataCall();
  return res;
};

export { getCartService, updateCartService, clearCartService };
