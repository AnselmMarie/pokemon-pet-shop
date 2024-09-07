/* eslint-disable @typescript-eslint/no-unused-vars */
import { getPokemonSpeciesService } from '../../pokemon';
import { getPokemonDetailService } from '../../pokemon/services/pokemon.detail.service';
import {
  clearCartDataCallUtil,
  getCartDataCallUtil,
  updateCartDataCallUtil,
} from '../database/cart.database';

interface CartDataProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  isLegendary: boolean;
  isMythical: boolean;
}

const doesItemExistKeyFn = (cartData, id) => {
  const cartLength = cartData.length;
  let key = null;

  for (let loop = 0; loop < cartLength; loop++) {
    if (cartData[loop]?.id == id) {
      key = loop;
      break;
    }
  }
  return key;
};

const getCartService = async () => {
  return await getCartDataCallUtil();
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
  const currentCartData: any = await getCartDataCallUtil();
  const doesItemExistKey = doesItemExistKeyFn(currentCartData, payload?.id);
  const finalRes = currentCartData;

  if (doesItemExistKey !== null) {
    const currentObj = currentCartData[doesItemExistKey];
    currentObj.quantity = currentObj.quantity + 1;

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
  finalRes.push(finalPayload);

  return finalPayload;
};

const clearCartService = async () => {
  const res = await clearCartDataCallUtil();
  return res;
};

export { getCartService, updateCartService, clearCartService };
