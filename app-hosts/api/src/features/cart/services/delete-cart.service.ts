import { clone } from 'lodash';

import { Cart, CartData } from '@pokemon-pet-shop/types';

import { errFormat500ResponseUtil } from '../../../shared/middleware';
import { getCartDataCall, updateCartDataCall } from '../../../database/repositories';

export const deleteCartItemService = async (id: string) => {
  const currentCartData: Cart = clone(
    await getCartDataCall().catch(() => {
      throw errFormat500ResponseUtil();
    })
  );
  const data = clone(currentCartData.data);
  let keySplice: number | null = null;
  const dataToRemove: CartData[] = data.filter((data: CartData, i: number) => {
    if (data?.id == id) {
      keySplice = i;
      return true;
    }
    return false;
  });
  const totalPrice = dataToRemove[0]?.quantity * dataToRemove[0]?.price;

  currentCartData.counter = currentCartData.counter - dataToRemove[0]?.quantity;
  currentCartData.total = currentCartData.total - totalPrice;

  if (keySplice !== null) {
    data.splice(keySplice, 1);
  }
  currentCartData.data = data;

  await updateCartDataCall(currentCartData).catch(() => {
    throw errFormat500ResponseUtil();
  });

  return;
};
