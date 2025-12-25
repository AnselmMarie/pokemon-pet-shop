import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { axiosInstance } from '@utils/api-client';

export const useGetCart = () => {
  const queryFn = () => axiosInstance.get<Cart.Base>('cart');

  return useQuery({
    queryKey: ['cart'],
    queryFn: () => queryFn(),
    select: (r: AxiosResponse<Cart.Base>) => r?.data,
  });
};
