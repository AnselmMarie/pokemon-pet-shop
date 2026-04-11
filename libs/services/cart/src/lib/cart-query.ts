import { AxiosResponse } from 'axios';
import { useSuspenseQuery } from '@tanstack/react-query';

import { Cart } from '@pokemon-pet-shop/types';
import { axiosInstance } from '@pokemon-pet-shop/util-api-client';

export const useGetCart = () => {
  const queryFn = () => axiosInstance.get<Cart>('cart');

  return useSuspenseQuery({
    queryKey: ['cart'],
    queryFn: () => queryFn(),
    select: (r: AxiosResponse<Cart>) => r?.data,
  });
};
