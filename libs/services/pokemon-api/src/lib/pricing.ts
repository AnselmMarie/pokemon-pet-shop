import { useQuery } from '@tanstack/react-query';

import { axiosInstance } from '@utils/apiClient';

export const useGetPokemonPricing = () => {
  const queryFn = () => axiosInstance.get<PokemonPricing.Base>('pricing');

  return useQuery({
    queryKey: ['pricing'],
    queryFn: () => queryFn(),
    select: (r: any) => r?.data,
  });
};
