import { axiosInstance } from '../common/utils/api.util';

export const getCart = async () => {
  return (await axiosInstance.get<any[]>('cart')).data;
};

export const updateCart = async (data: any) => {
  return (await axiosInstance.put<any>(`cart/update/${data?.id}`, data)).data;
};

export const clearCart = async () => {
  return (await axiosInstance.put<any>('cart/clear')).data;
};

export const deleteCartItem = async (id: number) => {
  return (await axiosInstance.delete<any>(`cart/item/${id}`)).data;
};