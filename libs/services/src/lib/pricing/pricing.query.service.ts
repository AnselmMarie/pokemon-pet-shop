import { useQuery } from '@tanstack/react-query';

import { getPricing } from './api.pricing.service';

export function useGetPricing() {
  return useQuery({
    queryKey: ['pricing'],
    queryFn: getPricing,
  });
}
