import { useQuery } from '@tanstack/react-query';

import { axiosInstance } from '@utils/apiClient';

export const useGetCart = () => {
  const queryFn = () => axiosInstance.get<Cart.Base>('cart');

  return useQuery({
    queryKey: ['cart'],
    queryFn: () => queryFn(),
    select: (r: any) => r?.data,
  });
};
