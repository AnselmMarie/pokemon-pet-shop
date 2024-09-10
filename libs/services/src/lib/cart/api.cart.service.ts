import { CartDataApi } from '@pokemon-pet-shop/typing';

import { axiosInstance } from '../common/utils/api.util';

export const getCart = async () => {
  return (await axiosInstance.get<CartDataApi>('cart')).data;
};

export const updateCart = async (data: any) => {
  return (await axiosInstance.put<any>(`cart/item/${data?.id}`, data)).data;
};

export const clearCart = async () => {
  return (await axiosInstance.put<any>('cart/clear')).data;
};

export const deleteCartItem = async (id: string) => {
  return (await axiosInstance.delete<any>(`cart/item/${id}`)).data;
};
