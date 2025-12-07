import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { axiosInstance } from '@utils/api-client';

export const useGetPokemonPricing = () => {
  const queryFn = () =>
    axiosInstance.get<PokemonPricing.Base>('pokemon/pricing');

  return useQuery({
    queryKey: ['pricing'],
    queryFn: () => queryFn(),
    select: (r: AxiosResponse<PokemonPricing.Base>) => r?.data,
  });
};
