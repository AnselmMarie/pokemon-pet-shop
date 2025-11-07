import { useQuery } from '@tanstack/react-query';

import { getCart } from './api.cart.service';

export function useGetCart() {
  return useQuery({
    queryKey: ['cart'],
    queryFn: getCart,
  });
}
